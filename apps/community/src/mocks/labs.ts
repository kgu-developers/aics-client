interface Lab {
  id: number;
  name: string;
  img?: string;
  location: string;
  site: string;
  professor: string;
}

const LABS: Lab[] = [
  {
    id: 1,
    name: '인공지능 연구실',
    img: 'https://www.kyonggi.ac.kr/site/u_ai/images/contents/key9123_img01.png',
    location: '육영관 8502호, 8503호',
    site: 'http://ailab.kyonggi.ac.kr/',
    professor: '김인철',
  },
  {
    id: 2,
    name: '알고리즘 연구실',
    img: 'https://www.kyonggi.ac.kr/site/u_ai/images/contents/key9123_img02.png',
    location: '육영관 8504호',
    site: 'http://algeo.kyonggi.ac.kr/',
    professor: '배상원',
  },
  {
    id: 3,
    name: '데이터마이닝 연구실',
    img: 'https://www.kyonggi.ac.kr/site/u_ai/images/contents/key9123_img03.png',
    location: '육영관 8505A호',
    site: 'https://sites.google.com/view/dmininglab/home',
    professor: '정경용',
  },
  {
    id: 4,
    name: '정보보호 연구실',
    img: 'https://www.kyonggi.ac.kr/site/u_ai/images/contents/key9123_img04.png',
    location: '-',
    site: 'http://islab.kyonggi.ac.kr/',
    professor: '김희열',
  },
  {
    id: 5,
    name: 'Smart IoT 연구실',
    img: 'https://www.kyonggi.ac.kr/site/u_ai/images/contents/key9123_img05.png',
    location: '육영관 8506호',
    site: 'https://netlab.kyonggi.ac.kr/',
    professor: '김남기',
  },
  {
    id: 6,
    name: 'RTOS 연구실',
    img: 'https://www.kyonggi.ac.kr/site/u_ai/images/contents/key9123_img06.png',
    location: '육영관 8514호',
    site: 'http://rtos.kyonggi.ac.kr/',
    professor: '이병대',
  },
  {
    id: 7,
    name: '컴퓨터그래픽스 연구실',
    img: 'https://www.kyonggi.ac.kr/site/u_ai/images/contents/key9123_img07.png',
    location: '육영관 8501호',
    site: 'http://giplab.kyonggi.ac.kr/',
    professor: '전준철',
  },
  {
    id: 8,
    name: '데이터&프로세스 공학 연구실',
    img: 'https://www.kyonggi.ac.kr/site/u_ai/images/contents/key9123_img08.png',
    location: '육영관 8513호',
    site: 'http://ctrl.kyonggi.ac.kr/',
    professor: '김광훈',
  },
  {
    id: 9,
    name: '소프트웨어공학 연구실',
    img: 'https://www.kyonggi.ac.kr/site/u_ai/images/contents/key9123_img09.png',
    location: '육영관 8306B호',
    site: 'https://sites.google.com/view/safetysw',
    professor: '권기현',
  },
  {
    id: 10,
    name: '분산보안 연구실',
    img: 'https://www.kyonggi.ac.kr/site/u_ai/images/contents/key9123_img10.png',
    location: '육영관 8508호',
    site: 'https://sites.google.com/view/ksel',
    professor: '김도훈',
  },
  {
    id: 11,
    name: '기계학습 연구실',
    location: '육영관 8505B호',
    site: 'https://sites.google.com/view/mllab-kgu',
    professor: '임현기',
  },
  {
    id: 12,
    name: '비전 인공지능 연구실',
    img: 'https://www.kyonggi.ac.kr/downloadContentsFile.do?key=9123&fileNo=1258',
    location: '제2공학관 615호',
    site: 'https://sites.google.com/kyonggi.ac.kr/cvpr/%ED%99%88',
    professor: '안준호',
  },
] as const;

export { type Lab, LABS };
