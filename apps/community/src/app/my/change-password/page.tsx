import ChangePasswordForm from '~/components/my/change-password/change-password-form'
import { PageHeader } from '~/components/page-header'

const ChangePasswordPage = () => {
  return (
    <>
      <PageHeader
        title="비밀번호 변경"
        description="등록한 비밀번호를 변경할 수 있어요."
      />
      <ChangePasswordForm />
    </>
  )
}

export default ChangePasswordPage
