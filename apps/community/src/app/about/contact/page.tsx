import { contactQueryOptions } from '~/apis/about/contact/queries';
import { List } from '~/components/about/list';
import { PageHeader } from '~/components/page-header';
import { Hydrate, getDehydratedQuery } from '~/utils/react-query';

// TODO: for mocking but will be replaced with a proper solution later
export const dynamic = 'force-dynamic';

export default async function ContactPage() {
  const { queryKey, queryFn } = contactQueryOptions.all();
  const query = await getDehydratedQuery({ queryKey, queryFn });
  const { data } = query.state.data ?? {};

  return (
    <>
      <PageHeader
        title="찾아오시는 길"
        description="연락처와 위치를 알려드려요."
      />
      <Hydrate state={{ query }}>
        {data?.map((contact) => (
          <List key={`contact-${contact.title}`} title={contact.title}>
            {contact.description.map((desc, index) => (
              <List.Row key={`${contact.title}-${index}`}>{desc}</List.Row>
            ))}
          </List>
        ))}
      </Hydrate>
    </>
  );
}
