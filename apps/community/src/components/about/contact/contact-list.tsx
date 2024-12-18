'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

import { contactQueryOptions } from '~/apis/about/contact/queries';

import { List } from '~/components/about/list';

function ContactList() {
  const { data } = useSuspenseQuery(contactQueryOptions.all());
  return (
    <>
      {data.data.map((contact) => (
        <List key={`contact-${contact.title}`} title={contact.title}>
          {contact.description.map((desc, index) => (
            <List.Row key={`${contact.title}-${index}`}>{desc}</List.Row>
          ))}
        </List>
      ))}
    </>
  );
}

export { ContactList };
