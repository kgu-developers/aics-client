interface UserDetail {
  title: string
  value: string
}

interface UserEditableDetail extends UserDetail {
  field: 'phone' | 'email'
}

export type { UserDetail, UserEditableDetail }
