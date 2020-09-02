import * as React from 'react';
import { Text, View, TextInput,Button,TouchableOpacity, StyleSheet } from 'react-native';

import { connect } from 'react-redux'
import { addCardToDeck } from '../actions'
import { saveCardToDeck } from '../utils/api'


class newCardView extends React.Component {
  state = {
    question: '',
    answer:''
  }
  
  submitQuestion = (navigation) => {
    const { question,answer } = this.state
    const selectedDeck = this.props.route.params.deck
    
    console.log(selectedDeck);
    if(question!=='' && answer!=='' ){
      saveCardToDeck(selectedDeck , { question : question , answer: answer})
      this.props.dispatch(addCardToDeck(selectedDeck , { question : question , answer: answer}))
      navigation.popToTop()
      this.setState({
        question: '',
        answer:''
      })
    } else {
      alert('empty inputs')
    }
    

  }
  render() {
    const {navigation} = this.props
    console.log(navigation)
    return (
      <View style={styles.container}>
        <Text>Question</Text>
        <TextInput style={styles.input} onChangeText={(question) => this.setState({ question })} value={this.state.question} />
        <Text>Answer</Text>
        <TextInput style={styles.input} onChangeText={(answer) => this.setState({ answer })} value={this.state.answer} />
        <TouchableOpacity  style={styles.buttonBackground} onPress={() => this.submitQuestion(this.props.navigation)} >
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
    marginBottom:10
    
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
	}
});


export default connect()(newCardView)