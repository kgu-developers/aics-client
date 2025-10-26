export type ThesisRow = {
  id: number
  no: number
  studentId: string
  name: string
  advisor: string         
  gradTerm: string        
  status: string           
  approved: '승인' | '미승인' | '승인 대기'
} 