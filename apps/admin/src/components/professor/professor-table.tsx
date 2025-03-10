import { Form } from 'antd';
import useEditTable from '~/hooks/useEditTable';
import ProfessorTableView from './professor-table-view';

export interface ProfessorData {
  key: string;
  name: string;
  role: string;
  contact: string;
  email: string;
  img?: string;
  officeLoc: string;
}

const professorData: ProfessorData[] = [
  {
    key: '1',
    name: '이은정',
    role: '교수',
    contact: '031-249-9671',
    email: 'ejlee@kyonggi.ac.kr',
    img: 'https://i.namu.wiki/i/JRDRUJDo0B40h2vkSMTBsTc-AUCgXb9_CR__E4Kp2nwm5gALZWXhDMXHMuEgHxzmB6hRCkzWpUnEcJe3iBgPjQ.webp',
    officeLoc: '8213호',
  },
  {
    key: '2',
    name: '박민준',
    role: '조교수',
    contact: '031-249-9672',
    email: 'pmj@kyonggi.ac.kr',
    img: 'https://i.namu.wiki/i/JRDRUJDo0B40h2vkSMTBsTc-AUCgXb9_CR__E4Kp2nwm5gALZWXhDMXHMuEgHxzmB6hRCkzWpUnEcJe3iBgPjQ.webp',
    officeLoc: '8502호',
  },
];

function ProfessorTable() {
  const [form] = Form.useForm();
  const { isEditing, handleEdit, cancel } = useEditTable(form);

  const handleSave = () => {
    // TODO: 교수 수정 PATCH API 연동
  };

  const handleDelete = () => {
    // TODO: 교수 삭제 DELETE API 연동
  };

  return (
    <ProfessorTableView
      form={form}
      data={professorData}
      isEditing={isEditing}
      handleEdit={handleEdit}
      handleSave={handleSave}
      handleDelete={handleDelete}
      cancel={cancel}
    />
  );
}

export default ProfessorTable;
