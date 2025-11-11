import { Clock } from 'lucide-react'

import { vars } from '~/vars.css'

export const timelineItems = [
  {
    color: vars.colors.main,
    children: (
      <div>
        <div style={{ fontWeight: 600 }}>중간 보고서 제출</div>
        <div style={{ color: 'rgba(0,0,0,0.45)' }}>2024-09-30 완료</div>
      </div>
    ),
  },
  {
    dot: <Clock size={20} />,
    color: vars.colors.main,
    children: (
      <div>
        <div style={{ fontWeight: 600 }}>최종 보고서 작성</div>
        <div style={{ color: 'rgba(0,0,0,0.45)' }}>현재 진행 중</div>
      </div>
    ),
  },
  {
    color: 'gray',
    children: (
      <div>
        <div style={{ fontWeight: 600 }}>최종 보고서 제출 및 심사</div>
        <div style={{ color: 'rgba(0,0,0,0.45)' }}>예정</div>
      </div>
    ),
  },
]
