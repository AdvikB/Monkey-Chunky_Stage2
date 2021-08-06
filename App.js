import * as React from 'react';
import { Text, View, StyleSheet, Platform, StatusBar, TextInput, TouchableOpacity, Image} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import db from './localdb';


console.log(db['to'].chunks);
export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],

    }
  }




  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.androidSafeArea} />

        <Header
          centerComponent={{ text: 'Monkey Chunky', style: { color: 'white', alignSelf: 'center', fontFamily: 'jokerman'} }}
        />                                                                 

        <Image source={{ uri: 'https://png.pngtree.com/png-clipart/20201208/original/pngtree-vector-cartoon-cute-playing-monkey-material-clipart-monkey-clipart-png-image_5532785.jpg' }} style={styles.img}/>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            this.setState({
              text: text,
            })
          }}
          value={this.state.text}
        />

        <TouchableOpacity style={styles.button} onPress={() =>
          this.setState({
            chunks: db[this.state.text].chunks,
          })
        } >
          <Text> Go </Text>
        </TouchableOpacity>
        <View style= {styles.cont}>
          {
            this.state.chunks.map(item => {
              return <Text style={styles.displayText} > {item} </Text>
            })
          }
        </View>


      </SafeAreaProvider >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  androidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 400,
    alignSelf: 'center',
    borderRadius: 20,
  },
  button: {
    backgroundColor: 'red',
    width: 100,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    alignSelf: 'center'
  },
  img: {
    width : 300,
    height: 300,
    alignSelf: 'center',
    justifyContent:'center'
  },
  cont: {
    flexDirection: "row",
    flexWrap: 'wrap', 
  },
   displayText: {
     alignSelf: 'center',
  
     fontWeight: 'bold',
     fontSize: 20,
    
     display : 'flex',
     
     
   }


});
