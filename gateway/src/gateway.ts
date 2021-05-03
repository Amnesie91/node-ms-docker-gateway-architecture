import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";
import { buildServiceList } from "./buildServiceList";

const serviceList = buildServiceList(process.env.WAIT_HOSTS || "");

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
