import graphqlHTTP from 'express-graphql';
import express from 'express';

const app = express();

app.use('/graphql', graphqlHTTP({ schema: MyGraphQLSchema, graphiql: true }));
