import * as styles from '~/app/(auth)/layout.css';
import { AuthFooter } from '~/components/(auth)/auth-footer';
import { AuthHeader } from '~/components/(auth)/auth-header';

interface Props {
  title: string;
  description: string;
  footerDescription: string;
  footerLink: string;
  footerHref: string;
  children: React.ReactNode;
}

export default function AuthLayout({
  title,
  description,
  footerDescription,
  footerLink,
  footerHref = '/',
  children,
}: Props) {
  return (
    <section className={styles.section}>
      <AuthHeader title={title} description={description} />
      {children}
      <AuthFooter
        description={footerDescription}
        link={footerLink}
        href={footerHref}
      />
    </section>
  );
}
