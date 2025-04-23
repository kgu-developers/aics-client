import { AuthFooter } from '~/features/auth/components/auth-footer'
import { AuthHeader } from '~/features/auth/components/auth-header'
import { SignInForm } from '~/features/auth/components/sign-in-form'

export default function SignInPage() {
  return (
    <>
      <AuthHeader title="로그인" description="경기대학교 AI컴퓨터공학부" />
      <SignInForm />
      <AuthFooter
        description="계정이 없으신가요?"
        link="회원가입"
        href="/signup"
      />
    </>
  )
}
