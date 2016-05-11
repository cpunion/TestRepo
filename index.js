import React from 'react'
import ReactNative from 'react-native'
const {
  View,
  Text,
  Image
} = ReactNative

export default class App extends React.Component {
  render () {
    return (
      <View>
        <Text>Welcome!</Text>
        <Image style={{width: null}} source={require('./images/animated-login.gif')} />
      </View>
    )
  }
}
