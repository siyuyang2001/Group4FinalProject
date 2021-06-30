import React from 'react'
import { StyleSheet, Button, View } from 'react-native'
import email from 'react-native-email'

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Button title="Send A Reminder" onPress={this.handleEmail} />
            </View>
        )
    }

    handleEmail = () => {
        const to = ['yours@email.com']
        email(to, {
            subject: 'Cat Reminder',
            body: 'Your Message'
        }).catch(console.error)
    }
}
