import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress = () => {
        const { email, password } = this.state

        this.setState({ error: ' ', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => this.onLoginSuccess())
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => this.onLoginSuccess())
                    .catch(() => this.onLoginFail());
            })
    }

    onLoginSuccess = () => {
        this.setState({ 
            email: '',
            password: '',
            error: '',
            loading: false
        });
        console.log('login successful')
    }

    onLoginFail = () => {
        this.setState({
            error: 'Authentication failed',
            loading: false
        });
        console.log('login failed')
    }

    renderButton = () => {
        if(this.state.loading) {
            return <Spinner size='small' />
        }

        return (
            <Button onPress={this.onButtonPress}>
                Login
            </Button>
        )
    }
 
    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        label="Email"
                        placeholder="user@email.com"
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    };
};

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm