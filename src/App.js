import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    // eslint-disable-next-line no-undef
    state = { loggedIn: null };
    componentDidMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCTgq5UZ9ql3Kd6OxvqSj3tbQoDVWr3IWk',
            authDomain: 'authentication-9cc3f.firebaseapp.com',
            databaseURL: 'https://authentication-9cc3f.firebaseio.com',
            projectId: 'authentication-9cc3f',
            storageBucket: 'gs://authentication-9cc3f.appspot.com/',
            messagingSenderId: '797537731555',
            appId: '1:797537731555:web:47253611b1a785be'
          });
          firebase.auth().onAuthStateChanged((user) => {
              if (user) {
                  this.setState({ loggedIn: true });
              } else {
                  this.setState({ loggedIn: false });
              }
          });
    }
    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                <Button onPress={() => firebase.auth().signOut()}>Log Out </Button>
                );

            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large' />;
        }
    }
    render() {
        return (
            <View>
               <Header headerText="Authentication" /> 
               {this.renderContent()}
            </View>
        );
    }
}

export default App;
