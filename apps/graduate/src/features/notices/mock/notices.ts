export const mockData = [
	{
		id: 1,
		title: '[필독] 2025학년도 졸업논문 일정 안내',
		createdAt: '2025-10-01',
		isPinned: true,
		author: '관리자',
	},
	{
		id: 2,
		title: '[중요] 제안서 제출 시 유의사항',
		createdAt: '2025-10-05',
		isPinned: true,
		author: '관리자',
	},
	{
		id: 3,
		title: '중간보고서 양식 업데이트 안내',
		createdAt: '2025-10-08',
		isPinned: false,
		author: '관리자',
	},
	{
		id: 4,
		title: '최종보고서 심사 기준 변경 공지',
		createdAt: '2025-10-10',
		isPinned: false,
		author: '관리자',
	},
	{
		id: 5,
		title: '졸업논문 지도교수 배정 안내',
		createdAt: '2025-10-12',
		isPinned: false,
		author: '관리자',
	},
	{
		id: 6,
		title: '학술대회 참가 신청 안내',
		createdAt: '2025-10-13',
		isPinned: false,
		author: '관리자',
	},
	...Array.from({ length: 15 }, (_, i) => ({
		id: i + 7,
		title: `일반 공지사항 ${i + 1}`,
		createdAt: `2025-09-${String(30 - i).padStart(2, '0')}`,
		isPinned: false,
		author: '관리자',
	})),
];
export const noticeFormData = {
	title: '[필독] 2025학년도 졸업논문 일정 안내',
	content: `2025학년도 졸업논문 일정을 다음과 같이 안내드립니다.

1. 신청접수: 2025-10-02 ~ 2025-10-16
2. 제안서 제출: 2025-10-17 ~ 2025-10-30
3. 중간보고서 제출: 2025-11-01 ~ 2025-12-10

자세한 사항은 학과 사무실로 문의 바랍니다.`,
	isPinned: true,
	createdAt: '2025-10-01 14:30',
	updatedAt: '2025-10-05 09:15',
};
