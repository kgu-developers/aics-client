import * as styles from '~/shared/components/form/form-error-message.css'

function FormErrorMessage({
  isError,
  message,
}: {
  isError: boolean
  message: string
}) {
  if (!isError) return null

  return <span className={styles.errorMessage}>{message}</span>
}

export default FormErrorMessage
