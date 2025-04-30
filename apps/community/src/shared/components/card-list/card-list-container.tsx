import * as styles from '~/shared/components/card-list/card-list-container.css'

function CardListContainer({ children }: { children: React.ReactNode }) {
  return <section className={styles.cardListContainer}>{children}</section>
}

export default CardListContainer
