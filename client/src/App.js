import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Footer from './components/Footer';
import Nav from './components/Nav'
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import PatientNotes from './pages/PatientNotes';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
   
      <Router>
      <Nav />
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
         
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/profile" 
                element={<Profile />} 
              />
              <Route 
                path="/patientnotes/:id" 
                element={<PatientNotes />} 
              />
              <Route 
                path="*" 
                element={<NoMatch />} 
              />
            </Routes>

          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;