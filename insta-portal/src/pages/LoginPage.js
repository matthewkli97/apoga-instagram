import React, { Component } from 'react';
import AuthProvider from '../components/AuthProvider';

export default class LoginPage extends Component {

    render() {
        const styles = {
            component: {
                width: "100%",
                height: "100%"
            }
        }

        return (
            <div style={styles.component}>
                <AuthProvider />
            </div>
        )
    }
}