export const dynamic = 'force-dynamic';

import { PageHeader } from '~/shared/components/page-header/page-header';

import ChangePasswordForm from '~/features/change-password/components/change-password-form';

export default function ChangePasswordPage() {
  return (
    <>
      <PageHeader
        title='비밀번호 변경'
        description='등록한 비밀번호를 변경할 수 있어요.'
      />
      <ChangePasswordForm />
    </>
  );
}
