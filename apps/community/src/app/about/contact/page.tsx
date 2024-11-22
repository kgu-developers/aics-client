import { List } from '~/components/about/list';
import { PageHeader } from '~/components/page-header';
import { getContacts } from './remotes';

// TODO: for mocking but will be replaced with a proper solution later
export const dynamic = 'force-dynamic';

export default async function ContactPage() {
  const { data } = await getContacts();

  return (
    <>
      <PageHeader
        title="찾아오시는 길"
        description="연락처와 위치를 알려드려요."
      />
      {data.map((contact) => (
        <List key={`contact-${contact.title}`} title={contact.title}>
          {contact.description.map((desc, index) => (
            <List.Row key={`${contact.title}-${index}`}>{desc}</List.Row>
          ))}
        </List>
      ))}
    </>
  );
}
