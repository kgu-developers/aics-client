export type SingleSubmitPayload = {
  studentNo: string
  name: string
  advisorId: number
  capstoneStatus: 'PASSED' | 'FAILED'
  graduationMonth: string // YYYY-MM
  department: string
}

export type BulkUploadRow = {
  key: number
  studentNo: string
  name: string
  advisorId: number | null
  capstoneStatus: 'PASSED' | 'FAILED' | null
  graduationMonth: string | null
  department: string | null
}

