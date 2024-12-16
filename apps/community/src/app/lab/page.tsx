import { labsQueryOptions } from '~/apis/lab/queries';
import * as styles from '~/app/lab/page.css';
import { LabCard } from '~/components/lab/lab-card';
import { PageHeader } from '~/components/page-header';
import { Hydrate, getDehydratedQuery } from '~/utils/react-query';

//** TODO: for mocking */
export const dynamic = 'force-dynamic';

export default async function LabPage() {
  const { queryKey, queryFn } = labsQueryOptions.all();
  const query = await getDehydratedQuery({ queryKey, queryFn });
  const { data } = query.state.data ?? {};

  return (
    <>
      <PageHeader
        title="연구실 소개"
        description="경기대학교 AI컴퓨터공학부의 다양한 연구실을 소개해요."
      />
      <Hydrate state={{ query }}>
        <section className={styles.cardContainer}>
          {data?.map((lab) => (
            <LabCard key={`lab-${lab.id}`} lab={lab} />
          ))}
        </section>
      </Hydrate>
    </>
  );
}
