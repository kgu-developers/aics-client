'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Fragment } from 'react';

import { sprinkles } from '@aics-client/design-system/styles';

import { DEPT_QUERY_OPTIONS } from '~/features/dept/services/queries';

import { List } from '~/components/about/list';
import { Section } from '~/components/about/section';

function DeptInfoSection() {
  const { data } = useSuspenseQuery(DEPT_QUERY_OPTIONS.ALL());

  return (
    <Section>
      {data.contents.map((dept) => (
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
  );
}

export { DeptInfoSection };
