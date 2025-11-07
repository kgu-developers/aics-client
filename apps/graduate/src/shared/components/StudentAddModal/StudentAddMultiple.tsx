import { Button, Table, Typography, Upload, message } from 'antd'
import { useState } from 'react'
import { PROFESSORS } from '~/shared/constants/professors'
import type { BulkUploadRow } from './types'

type Props = {
  onBulkSubmit?: (rows: BulkUploadRow[]) => void | Promise<void>
}

const COLUMNS = [
  { title: 'No', dataIndex: 'key', width: 60 },
  { title: '학번', dataIndex: 'studentNo' },
  { title: '이름', dataIndex: 'name' },
] as const

const CAPSTONE_MAP: Record<string, 'PASSED' | 'FAILED'> = {
  이수: 'PASSED',
  미이수: 'FAILED',
  passed: 'PASSED',
  failed: 'FAILED',
}

const PROFESSOR_NAME_TO_ID = PROFESSORS.reduce<Record<string, number>>((acc, p) => {
  acc[p.name.trim()] = p.id
  return acc
}, {})

export default function StudentAddMultiple({ onBulkSubmit }: Props) {
  const [fileName, setFileName] = useState('')
  const [rows, setRows] = useState<BulkUploadRow[]>([])
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const pageSize = 7
  const [current, setCurrent] = useState(1)

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: React.Key[]) => setSelectedRowKeys(keys),
  }

  // expected headers: 학번,이름,지도교수,캡스톤이수여부,졸업년도,학과
  const parseCsv = (text: string) => {
    const rawLines = text.split(/\r?\n/)
    const lines = rawLines.filter(l => l.trim().length > 0)
    if (!lines.length) return [] as BulkUploadRow[]

    const header = lines[0].split(',').map(h => h.trim())
    const hasHeader = header.some(h => ['학번', '이름', '지도교수', '캡스톤이수여부', '졸업년도', '학과'].includes(h))
    const start = hasHeader ? 1 : 0

    const idx = (name: string, fallback: number) => (hasHeader ? Math.max(0, header.findIndex(h => h === name)) : fallback)
    const iStudentNo = idx('학번', 0)
    const iName = idx('이름', 1)
    const iAdvisor = idx('지도교수', 2)
    const iCapstone = idx('캡스톤이수여부', 3)
    const iGrad = idx('졸업년도', 4)
    const iDept = idx('학과', 5)

    const out: BulkUploadRow[] = []
    for (let li = start; li < lines.length; li++) {
      const cols = lines[li].split(',')
      if (cols.length < 2) continue
      const rawStudentNo = (cols[iStudentNo] || '').trim()
      const rawName = (cols[iName] || '').trim()
      const professorName = (cols[iAdvisor] || '').trim()
      const capstoneText = (cols[iCapstone] || '').trim().toLowerCase()
      const grad = (cols[iGrad] || '').trim()
      const dept = (cols[iDept] || '').trim()

      if (!rawStudentNo || !rawName) continue

      const advisorId = PROFESSOR_NAME_TO_ID[professorName] ?? null
      const capstoneStatus = (CAPSTONE_MAP as any)[capstoneText] ?? null

      let graduationMonth: string | null = null
      const m = grad.match(/^(\d{4})[-/.]?(\d{1,2})$/)
      if (m) {
        const mm = (m[2] as string).padStart(2, '0')
        graduationMonth = `${m[1]}-${mm}`
      }

      out.push({ key: li, studentNo: rawStudentNo, name: rawName, advisorId, capstoneStatus, graduationMonth, department: dept || null })
    }
    return out
  }

  const parseXlsx = async (file: File) => {
    try {
      const XLSX: any = await import('xlsx')
      const ab = await file.arrayBuffer()
      const wb = XLSX.read(ab, { type: 'array' })
      const sheet = wb.Sheets[wb.SheetNames[0]]
      const rowsArr: any[][] = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true })
      if (!rowsArr || rowsArr.length === 0) return []

      const header = (rowsArr[0] || []).map((h: any) => String(h ?? '').trim())
      const hasHeader = header.some((h: string) => ['학번', '이름', '지도교수', '캡스톤이수여부', '졸업년도', '학과'].includes(h))
      const start = hasHeader ? 1 : 0

      const idx = (name: string, fallback: number) => (hasHeader ? Math.max(0, header.findIndex((h: string) => h === name)) : fallback)
      const iStudentNo = idx('학번', 0)
      const iName = idx('이름', 1)
      const iAdvisor = idx('지도교수', 2)
      const iCapstone = idx('캡스톤이수여부', 3)
      const iGrad = idx('졸업년도', 4)
      const iDept = idx('학과', 5)

      const out: BulkUploadRow[] = []
      for (let r = start; r < rowsArr.length; r++) {
        const row = rowsArr[r] || []
        const rawStudentNo = String(row[iStudentNo] ?? '').trim()
        const rawName = String(row[iName] ?? '').trim()
        const professorName = String(row[iAdvisor] ?? '').trim()
        const capstoneText = String(row[iCapstone] ?? '').trim().toLowerCase()
        const grad = String(row[iGrad] ?? '').trim()
        const dept = String(row[iDept] ?? '').trim()
        if (!rawStudentNo || !rawName) continue

        const advisorId = PROFESSOR_NAME_TO_ID[professorName] ?? null
        const capstoneStatus = (CAPSTONE_MAP as any)[capstoneText] ?? null

        let graduationMonth: string | null = null
        const m = grad.match(/^(\d{4})[-/.]?(\d{1,2})$/)
        if (m) {
          const mm = (m[2] as string).padStart(2, '0')
          graduationMonth = `${m[1]}-${mm}`
        }

        out.push({ key: r, studentNo: rawStudentNo, name: rawName, advisorId, capstoneStatus, graduationMonth, department: dept || null })
      }
      return out
    } catch (e) {
      message.error('xlsx 파싱에 실패했습니다. xlsx 패키지가 설치되어 있는지 확인해주세요.')
      return []
    }
  }

  const onFileChange = async (file: File) => {
    setFileName(file.name)
    const name = file.name.toLowerCase()
    if (name.endsWith('.csv')) {
      const text = await file.text()
      setRows(parseCsv(text))
      setCurrent(1)
      setSelectedRowKeys([])
    } else if (name.endsWith('.xlsx') || name.endsWith('.xls')) {
      const parsed = await parseXlsx(file)
      setRows(parsed)
      setCurrent(1)
      setSelectedRowKeys([])
    } else {
      message.warning('CSV 또는 XLSX 파일을 업로드하세요.')
      setRows([])
    }
    return false
  }

  return (
    <div>
      <Typography.Paragraph>
        총 {rows.length}명의 학생이 등록될 예정입니다.
      </Typography.Paragraph>

      <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 8 }}>
        <Table
          size="small"
          dataSource={rows}
          columns={[
            { ...COLUMNS[0], render: (_: any, __: any, idx: number) => (current - 1) * pageSize + idx + 1 },
            COLUMNS[1],
            COLUMNS[2],
          ] as any}
          rowSelection={rowSelection}
          pagination={{ pageSize, current, onChange: (p) => setCurrent(p) }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
        <Upload beforeUpload={onFileChange} showUploadList={false} accept=".csv,.xlsx,.xls">
          <Button>파일 선택</Button>
        </Upload>
        <Typography.Text type="secondary">{fileName || '선택된 파일 없음'}</Typography.Text>
        <div style={{ flex: 1 }} />
        <Button
          disabled={!rows.length || !selectedRowKeys.length}
          onClick={async () => {
            const selected = rows.filter(r => selectedRowKeys.includes(r.key))
            await onBulkSubmit?.(selected)
          }}
        >
          선택 추가
        </Button>
        <Button
          type="primary"
          disabled={!rows.length}
          onClick={async () => {
            await onBulkSubmit?.(rows)
          }}
        >
          일괄 추가
        </Button>
      </div>
    </div>
  )
}

