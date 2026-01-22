/**
 * 날짜를 한국어 형식으로 포맷팅합니다.
 * @param date - 포맷팅할 날짜
 * @returns 포맷팅된 날짜 문자열 (예: "2024년 1월 13일")
 */
export const formatDateKorean = (date: Date): string => {
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
