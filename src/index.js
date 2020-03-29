import {GraphQLServer} from 'graphql-yoga'
import {resolvers} from './resolvers'
import {typeDefs} from './typeDefs'
import './database'

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log('Server is running');
})