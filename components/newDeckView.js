import * as React from 'react';
import { Text, View, TextInput,Button,TouchableOpacity, StyleSheet } from 'react-native';

import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'


class NewDeckView extends React.Component {
  state = {
    title: ''
  }
  submitDeck = (navigation) => {
    const { title } = this.state
    if(title!==''){
      saveDeckTitle(title)
      this.props.dispatch(addDeck(title))
      navigation.navigate('Details',  {deckTitle : title , deckLength:0})
      this.setState({
        title: ''
      })
    } else {
      alert('empty input')
    }
    

  }
  render() {
    return (
      <View style={styles.container}>
        <Text>What is the Title of Your New Deck?</Text>
        <TextInput style={styles.input} onChangeText={(title) => this.setState({ title })} value={this.state.title} />
        <TouchableOpacity  style={styles.buttonBackground} onPress={() => this.submitDeck(this.props.navigation)} >
            <Text style={styles.textButtonBg}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  buttonBackground:{
    width:'150px',
    borderColor:'#000',
    borderWidth:'2px',
    borderRadius:'5px',
    backgroundColor:'#000',
    padding: 10,
    marginBottom:10,
    
},
textButtonBg:{
  color:'#fff',
  fontSize:'20px'
},
input: {
		  width: 250,
		  height: 40,
		  padding: 8,
		  borderWidth: 1,
		  borderColor: '#757575',
		  margin: 20
	},
});


export default connect()(NewDeckView)