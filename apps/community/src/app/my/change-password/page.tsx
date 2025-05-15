export const dynamic = 'force-dynamic'

import ChangePasswordForm from '~/features/change-password/components/change-password-form'
import { PageHeader } from '~/shared/components/page-header/page-header'

export default function ChangePasswordPage() {
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
