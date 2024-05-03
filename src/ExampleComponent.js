import { useQuery, gql } from '@apollo/client';

const EXAMPLE_QUERY = gql`
  query ExampleQuery {
    user {
      id
      name
      email
    }
  }
`;

function ExampleComponent() {
  const { loading, error, data } = useQuery(EXAMPLE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { id, name, email } = data.user;

  return (
    <div>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default ExampleComponent;
