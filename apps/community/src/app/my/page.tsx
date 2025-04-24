import { MyInformation } from '~/features/profile/components/my-information'
import { PageHeader } from '~/shared/components/page-header/page-header'

export default function MyPage() {
  return (
    <>
      <PageHeader
        title="회원 정보"
        description="등록한 회원 정보를 확인할 수 있어요."
      />
      <MyInformation />
    </>
  )
}
