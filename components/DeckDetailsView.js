import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class DeckDetailsView  extends React.Component {
   
  render(){
      const title  = this.props.route.params.deckTitle
      const length  = this.props.route.params.deckLength
      const navigation = this.props.navigation
      console.log(this.props.route)
      return (
        <View style={styles.container}>
          <Text style={styles.title} >{title}</Text>
          <Text style={styles.text} >{length} Cards</Text>
          <TouchableOpacity  style={styles.buttonBorder} onPress={() => navigation.navigate('New Card', {deck: title}) } >
            <Text style={styles.textButtonBorder}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.buttonBackground}  onPress={() => navigation.navigate('Quiz', {deck: title}) }>
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
    fontSize:40,
    color: '#000',
    marginBottom: 20
  },
  text: {
    fontSize:20,
    color:'#aaa',
    marginBottom: 20
  },
  buttonBorder:{
      width:150,
      borderColor:'#000',
      borderWidth:2,
      borderRadius:5,
      backgroundColor:'#000',
      padding: 10,
      marginBottom:10
      
  },
  textButtonBorder:{
    color:'#fff',
    fontSize:20,
    textAlign: 'center'
  },
  buttonBackground:{
      width:150,
      borderColor:'#000',
      borderWidth:2,
      borderRadius:5,
      backgroundColor:'#fff',
      padding: 10,
      marginBottom:10
      
  },
  textButtonBg:{
    color:'#000',
      fontSize:20,
      textAlign: 'center'
  }
});


export default connect()(DeckDetailsView)