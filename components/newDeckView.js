import * as React from 'react';
import { Text, View,TextInput, StyleSheet, Image } from 'react-native';



class NewDeckView  extends React.Component {
    handleSubmit(e, questionId) {
      e.preventDefault();
  }
  render(){

  
  return (
    <View style={styles.container}>
     
          <Text>What is the Title of Your New Deck?</Text>
          <TextInput onChange={(e) => this.handleSubmit(e)} >
              

          </TextInput>
          
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  }
});


export default NewDeckView