import { Button, Modal } from 'antd'
import { useState } from 'react'
import StudentAddSingle from './StudentAddSingle'
import StudentAddMultiple from './StudentAddMultiple'
import type { SingleSubmitPayload, BulkUploadRow } from './types'
import * as styles from './StudentAddModal.css'

type Props = {
  open: boolean
  onClose: () => void
  onSubmit?: (payload: SingleSubmitPayload) => void | Promise<void>
  onBulkSubmit?: (rows: BulkUploadRow[]) => void | Promise<void>
}

export default function StudentAddModal({ open, onClose, onSubmit, onBulkSubmit }: Props) {
  const [mode, setMode] = useState<'single' | 'excel'>('single')

  return (
    <Modal open={open} onCancel={onClose} footer={null} title="학생 추가">
      <div className={styles.modeSelector}>
        <Button
          type={mode === 'single' ? 'primary' : 'default'}
          onClick={() => setMode('single')}
          className={styles.modeCard}
        >
          <span className={styles.cardInner}>
            <span className={styles.modeTitle}>단일 추가</span>
            <span className={styles.modeDescription}>학생 정보를 수기로 입력해요.</span>
          </span>
        </Button>

        <Button
          type={mode === 'excel' ? 'primary' : 'default'}
          onClick={() => setMode('excel')}
          className={styles.modeCard}
        >
          <span className={styles.cardInner}>
            <span className={styles.modeTitle}>엑셀 업로드</span>
            <span className={styles.modeDescription}>엑셀 파일로 여러 명 입력해요.</span>
          </span>
        </Button>
      </div>

      {mode === 'single' ? (
        <StudentAddSingle open={open} onSubmit={onSubmit} />
      ) : (
        <StudentAddMultiple onBulkSubmit={onBulkSubmit} />
      )}
    </Modal>
  )
}
