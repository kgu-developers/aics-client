import { Form } from 'antd';
import useEditTable from '~/hooks/useEditTable';
import ClubTableView from './club-table-view';
import { useClubServiceGetApiV1Clubs } from '~/apis/community/queries';
import type { ClubDetailResponse } from '~/apis/community/requests';

type ClubTableRow = ClubDetailResponse & { key: string };

function ClubTable() {
  const [form] = Form.useForm();
  const { register } = useEditTable<ClubTableRow>(form);
  const { data } = useClubServiceGetApiV1Clubs();

  const dataSource: ClubTableRow[] = (data?.contents || []).map(
    (item, index) => ({
      ...item,
      key: index.toString(),
    }),
  );

  const handleSave = async (record: ClubTableRow) => {
    try {
      const row = await form.validateFields();
      const updatedRecord = { ...record, ...row };
      console.log('수정된 데이터:', updatedRecord);
      // TODO: 동아리 수정 API 연동
    } catch (error) {
      console.log('Validation Failed:', error);
    }
  };

  const handleDelete = (record: ClubTableRow) => {
    console.log('삭제된 데이터:', record);
    // TODO: 삭제 API 연동
  };

  return (
    <ClubTableView
      form={form}
      data={dataSource}
      register={register}
      handleSave={handleSave}
      handleDelete={handleDelete}
    />
  );
}

export default ClubTable;
