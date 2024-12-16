import { sprinkles } from '@aics-client/design-system/styles';
import { Fragment } from 'react';
import { deptQueryOptions } from '~/apis/about/dept/queries';
import { List } from '~/components/about/list';
import { Section } from '~/components/about/section';
import { PageHeader } from '~/components/page-header';
import { Hydrate, getDehydratedQuery } from '~/utils/react-query';

// TODO: for mocking but will be replaced with a proper solution later
export const dynamic = 'force-dynamic';

export default async function Dept() {
  const { queryKey, queryFn } = deptQueryOptions.all();
  const query = await getDehydratedQuery({ queryKey, queryFn });
  const { data } = query.state.data || {};

  return (
    <>
      <PageHeader
        title="학부 소개"
        description="경기대학교 AI컴퓨터공학부를 소개해요."
      />
      <Hydrate state={{ query }}>
        <Section>
          {data?.map((dept) => (
            <Fragment key={`dept-${dept.name}`}>
              <Section.Title>{dept.name}</Section.Title>
              <p className={sprinkles({ marginBottom: 'none' })}>
                {dept.description}
              </p>
              <List title="교육 목표">
                {dept.educationGoals.map((goal) => (
                  <List.Row key={`dept-goal-${goal}`}>{goal}</List.Row>
                ))}
              </List>
            </Fragment>
          ))}
        </Section>
      </Hydrate>
    </>
  );
}
