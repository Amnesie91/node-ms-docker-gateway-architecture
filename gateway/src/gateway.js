const { ApolloGateway } = require("@apollo/gateway");
const { ApolloServer } = require("apollo-server");
const { buildServiceList } = require("./buildServiceList");

const serviceList = buildServiceList(process.env.WAIT_HOSTS);

const gateway = new ApolloGateway({
  serviceList,
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

server
  .listen({ port: 8080 })
  .then(({ url }) => console.log(`🚀 Gateway Server ready at ${url}`));
