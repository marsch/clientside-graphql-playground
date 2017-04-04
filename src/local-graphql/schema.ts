import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema
} from 'graphql'


const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    email: {type: GraphQLString},
    id: {type: GraphQLString}
  })
})

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    getUser: {
      type: new GraphQLList(UserType),
      resolve: (root) => {
        return new Promise((resolve, reject) => {
          resolve([])
        })
      }
    }
  }),
});

export const graphqlSchema = new GraphQLSchema({
  query: QueryType,
});
