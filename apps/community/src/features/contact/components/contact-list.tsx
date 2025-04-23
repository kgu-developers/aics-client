'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

import { List } from '~/features/contact/components/list'
import { CONTACT_QUERY_OPTIONS } from '~/features/contact/services/queries'

function ContactList() {
  const { data } = useSuspenseQuery(CONTACT_QUERY_OPTIONS.ALL())
  return (
    <>
      {data.contents.map((contact) => (
        <List key={`contact-${contact.title}`} title={contact.title}>
          {contact.description.map((desc, index) => (
            <List.Row key={`${contact.title}-${index}`}>{desc}</List.Row>
          ))}
        </List>
      ))}
    </>
  )
}

export { ContactList }
