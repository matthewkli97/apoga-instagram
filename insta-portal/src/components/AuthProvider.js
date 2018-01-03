import React, { Component } from 'react';
import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase/app';

export default class AuthProvider extends Component {

    // Configure FirebaseUI.
    uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ]
    };

    render() {
        return (
            <div>
                <FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        );

    }
}