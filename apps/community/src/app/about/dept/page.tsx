import { Fragment } from 'react';
import { sprinkles } from '@aics-client/design-system/styles';
import { List } from '~/components/about/list';
import { Section } from '~/components/about/section';
import { getDepts } from '~/app/about/dept/remotes';
import { PageHeader } from '~/components/page-header';

//** TODO: for mocking */
export const dynamic = 'force-dynamic';

export default async function Dept() {
  const { data } = await getDepts();

  return (
    <>
      <PageHeader
        title="학부 소개"
        description="경기대학교 AI컴퓨터공학부를 소개해요."
      />
      <Section>
        {data.map((dept) => (
          <Fragment key={`dept-${dept.name}`}>
            <Section.Title>{dept.name}</Section.Title>
            <p className={sprinkles({ marginBottom: 'none' })}>{dept.description}</p>
            <List title="교육 목표">
              {dept.educationGoals.map((goal) => (
                <List.Row key={`dept-goal-${goal}`}>{goal}</List.Row>
              ))}
            </List>
          </Fragment>
        ))}
      </Section>
    </>
  );
}
