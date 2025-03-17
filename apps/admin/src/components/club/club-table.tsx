import { Form } from 'antd';
import useEditTable from '~/hooks/useEditTable';
import ClubTableView from './club-table-view';

export interface ClubData {
  key: string;
  name: string;
  info: string;
  site: string;
  img?: {
    id: number;
    physicalPath: string;
  };
}

const ClubData: ClubData[] = [
  {
    key: '1',
    name: 'SSF',
    info: '웹 개발 동아리 SSF입니다',
    site: 'http://ailab.kyonggi.ac.kr',
    img: {
      id: 1,
      physicalPath:
        'https://www.kyonggi.ac.kr/site/u_ai/images/contents/key9123_img01.png',
    },
  },
  {
    key: '2',
    name: '데이터연구실',
    site: 'http://datalab.kyonggi.ac.kr',
    info: '경기대학교 정보보안 동아리 K.Knock입니다.',
    img: {
      id: 2,
      physicalPath: '/files/lab/20250131/lab-A.png',
    },
  },
];

function ClubTable() {
  const [form] = Form.useForm();
  const { register } = useEditTable<ClubData>(form);

  const handleSave = () => {
    // TODO: 연구실 수정 PATCH API 연동
  };

  const handleDelete = () => {
    // TODO: 연구실 삭제 DELETE API 연동
  };

  return (
    <ClubTableView
      form={form}
      data={ClubData}
      register={register}
      handleSave={handleSave}
      handleDelete={handleDelete}
    />
  );
}

export default ClubTable;
