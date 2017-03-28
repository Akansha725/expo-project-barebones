import React from 'react';
import {
  View, // https://facebook.github.io/react-native/docs/view.html
  Text, // https://facebook.github.io/react-native/docs/text.html
  StyleSheet, // https://facebook.github.io/react-native/docs/stylesheet.html
  Image, // https://facebook.github.io/react-native/docs/image.html
  Button, // https://facebook.github.io/react-native/docs/button.html
  TouchableOpacity, // https://facebook.github.io/react-native/docs/touchableopacity.html
  TextInput, // https://facebook.github.io/react-native/docs/textinput.html
  Dimensions, // https://facebook.github.io/react-native/docs/dimensions.html
} from 'react-native';

const fullWidth = Dimensions.get('window').width;

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      title: "Welcome to rmotr's Workshop!"
    };

    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress(){
    console.log('Pressed')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.section, { flex: 1 }]}>
          <Image
            style={styles.logo}
            source={{uri: 'http://i.imgur.com/GfAe1bp.png'}}
          />

          <Text style={styles.textLarge}>
            {this.state.title}
          </Text>

          <Text style={styles.textSmall}>
            (Open up main.js to start working)
          </Text>
        </View>

        <View style={styles.section}>
          <Button
            onPress={this.onButtonPress.bind(this)}
            title="Press Me"
            color={'#16a085'}
            accessibilityLabel="See an informative alert"
          />

          <TouchableOpacity
            style={styles.customButton}
            onPress={this.onButtonPress.bind(this)}
          >
            <Text style={styles.customButtonText}>
              Our button
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <TextInput
            style={styles.textInput}
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
            autoCorrect={false}
            placeholder={'This is a placeholder!'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
    padding: 10
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 20
  },
  textLarge: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50'
  },
  textSmall: {
    color: '#34495e',
    fontStyle: 'italic',
    paddingBottom: 5
  },
  customButton: {
    backgroundColor: '#16a085',
    borderRadius: 3,
    margin: 5,
    padding: 5
  },
  customButtonText: {
    color: '#fff',
    fontSize: 16
  },
  textInput: {
    height: 30,
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
    width: fullWidth - 20,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 5
  },
});

export default App;
