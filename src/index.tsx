/// <reference path="../typings/index.d.ts" />

const React = require('react')
const ReactDOM = require('react-dom')
const gql = require('graphql-tag')
import { graphql, ApolloProvider } from 'react-apollo'

import ApolloClient, { createNetworkInterface } from 'apollo-client'


import { createLocalNetworkInterface } from './localInterface'
import { graphqlSchema } from './local-graphql/schema'



const localNetworkInterface = createLocalNetworkInterface({
  schema: graphqlSchema
})

console.log('localNetworkInterface', localNetworkInterface)
const client = new ApolloClient({
  networkInterface: localNetworkInterface
});

console.log('reactdom', ReactDOM)
const App = () => {
    return (<ApolloProvider client={client}><UserListConnected /></ApolloProvider>)
}

const UserList = ({data: { loading, getUser }}) => {
  if(loading) {
    return <div>Loading...</div>
  } else {
    console.log('getUser??', getUser)
    return (
      <ul>
        {getUser.map(user =>
          <li key={user.id}>{user.email}</li>
        )}
      </ul>
    )
  }
} 


const UserListConnected = graphql(gql`
  query {
    getUser {
      id
      email
    }
  }
`)(UserList)

ReactDOM.render(
  <App />, document.getElementById('root'))