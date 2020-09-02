import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

class DeckDetailsView  extends React.Component {
   
  render(){
      const title  = this.props.route.params.deckTitle
      const length  = this.props.route.params.deckLength
      return (
        <View style={styles.container}>
          <Text style={styles.title} >{title}</Text>
          <Text style={styles.text} >{length} Cards</Text>
          <TouchableOpacity  style={styles.buttonBorder}>
            <Text style={styles.textButtonBorder}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.buttonBackground}>
            <Text style={styles.textButtonBg}>Start Quiz</Text>
          </TouchableOpacity>
          
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',
    padding: 24,
  },
  title: {
    fontSize:'40px',
    color: '#000',
    marginBottom: 20
  },
  text: {
    fontSize:'20px',
    color:'#aaa',
    marginBottom: 20
  },
  buttonBorder:{
      width:'150px',
      borderColor:'#000',
      borderWidth:'2px',
      borderRadius:'5px',
      backgroundColor:'#000',
      padding: 10,
      marginBottom:10,
      textAlign:"center"
      
  },
  textButtonBorder:{
    color:'#fff',
    fontSize:'20px'
  },
  buttonBackground:{
      width:'150px',
      borderColor:'#000',
      borderWidth:'2px',
      borderRadius:'5px',
      backgroundColor:'#fff',
      padding: 10,
      marginBottom:10,
      textAlign:"center"
      
  },
  textButtonBg:{
    color:'#000',
      fontSize:'20px'
  }
});


export default DeckDetailsView