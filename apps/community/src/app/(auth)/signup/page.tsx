import { AuthFooter } from '~/features/auth/components/auth-footer'
import { AuthHeader } from '~/features/auth/components/auth-header'
import { SignUpForm } from '~/features/auth/components/sign-up-form'

export default function SignUpPage() {
  return (
    <>
      <AuthHeader title="회원가입" description="경기대학교 AI컴퓨터공학부" />
      <SignUpForm />
      <AuthFooter
        description="이미 계정이 있으신가요?"
        link="로그인"
        href="/signin"
      />
    </>
  )
}
