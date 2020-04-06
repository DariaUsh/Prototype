import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';
import Layout from './Components/Layout/Layout';

const client = new ApolloClient({
  uri: 'https://api.8base.com/ck3jwgj7v000201ml1nuu0gu3',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <Layout></Layout>
      </div>
    </ApolloProvider>
  );
}

export default App;
