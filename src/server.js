const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();
const PORT = process.env.PORT || 4000;

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User]!
  }
`;

const users = [
  { id: '1', name: 'John', email: 'john@example.com' },
  { id: '2', name: 'Alice', email: 'alice@example.com' }
];

const resolvers = {
  Query: {
    users: () => users
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startServer().then(() => {
  app.listen(PORT, () => {
    console.log(`Сервер GraphQL запущен на порту ${PORT}`);
  });
});






