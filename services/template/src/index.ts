import { ApolloServer, gql } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";

const typeDefs = gql`
  type Template @key(fields: "id") {
    id: ID!
    message: String
  }

  extend type Query {
    templates: [Template]
  }
`;

const resolvers = {
  Query: {
    templates() {
      return [{ id: "1", message: "Hi there" }];
    },
  },
  Template: {
    __resolveReference() {
      return { id: "1", message: "Hi there" };
    },
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen(8080).then(({ url }) => {
  console.log(`🚀 Template Server ready at ${url}!!`);
});
