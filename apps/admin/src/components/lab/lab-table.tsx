import { Form } from 'antd';
import useEditTable from '~/hooks/useEditTable';
import LabTableView from './lab-table-view';

export interface LabData {
  key: string;
  name: string;
  loc: string;
  site: string;
  advisor: string;
  img?: {
    id: number;
    physicalPath: string;
  };
}

const labData: LabData[] = [
  {
    key: '1',
    name: '인공지능연구실',
    loc: '8502, 8503',
    site: 'http://ailab.kyonggi.ac.kr',
    advisor: '박민준',
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
    loc: '8502, 8503',
    advisor: '이서준',
    img: {
      id: 2,
      physicalPath: '/files/lab/20250131/lab-A.png',
    },
  },
];

function LabTable() {
  const [form] = Form.useForm();
  const { register } = useEditTable<LabData>(form);

  const handleSave = () => {
    // TODO: 연구실 수정 PATCH API 연동
  };

  const handleDelete = () => {
    // TODO: 연구실 삭제 DELETE API 연동
  };

  return (
    <LabTableView
      form={form}
      data={labData}
      register={register}
      handleSave={handleSave}
      handleDelete={handleDelete}
    />
  );
}

export default LabTable;
