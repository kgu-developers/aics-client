import Link from 'next/link';
import * as styles from '~/components/(auth)/auth-footer.css';

interface Props {
  description: string;
  link: string;
  href: string;
}

function AuthFooter({ description, link, href }: Props) {
  return (
    <div className={styles.footerWrapper}>
      <p>{description}</p>
      <Link href={href} className={styles.link}>
        {link}
      </Link>
    </div>
  );
}

export { AuthFooter };
