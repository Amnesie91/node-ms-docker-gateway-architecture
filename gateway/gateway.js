const { ApolloGateway } = require("@apollo/gateway");
const { ApolloServer } = require("apollo-server");

const gateway = new ApolloGateway({
  serviceList: [{ name: "accounts", url: "http://account:8080" }, { name: "template", url: "http://template:8080" }],
});

const server = new ApolloServer({ 
  gateway,
  subscriptions: false,
});

server.listen({port: 8080}).then(({url}) => console.log(`🚀 Gateway Server ready at ${url}`) );
