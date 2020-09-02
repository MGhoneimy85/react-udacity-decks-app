import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { getDecks } from '../utils/api';
import { receiveDecks } from '../actions'
class QuizView  extends React.Component {
  state = {
    currentQuestionIndex: 0,
    showAnswerFlag:false
  }
  componentDidMount(){
    getDecks().then(decks => this.props.recieveDecks(decks))
  }
  render(){
    const currentQuestionIndex = this.state.currentQuestionIndex
    const currentQuestionNumber = this.state.currentQuestionIndex + 1
    
      console.log(this.props)
      const { decksList } = this.props
      console.log(decksList)
      const deck = this.props.route.params.deck
      console.log(deck)
      const  questions  = [] =  decksList[deck].questions
      console.log(questions)
      if(questions.length==0){
        return (
          <View style={styles.container}>
            <Text style={styles.text}>No Cards to display</Text>
          </View>
        )
      } else{
        if(currentQuestionIndex < questions.length){
          return (
            <View style={styles.container}>
              <Text> {currentQuestionNumber} / {questions.length} </Text>
              { !this.state.showAnswerFlag ?  <Text> {questions[currentQuestionIndex].question}</Text> : <Text> {questions[currentQuestionIndex].answer}</Text> }
                <TouchableOpacity  style={styles.buttonBorder}  onPress={() => this.setState({ showAnswerFlag: true}) }>
                  <Text style={styles.textButtonBorder}>Show Answer</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.buttonBackgroundCorrect}  onPress={() => this.setState({ currentQuestionIndex:this.state.currentQuestionIndex+1}) }  >
                  <Text style={styles.textButtonBgCorrect}>Correct</Text>
                </TouchableOpacity>
                
                <TouchableOpacity  style={styles.buttonBackgroundinCorrect}  onPress={() => this.setState({ currentQuestionIndex:this.state.currentQuestionIndex+1})}  >
                  <Text style={styles.textButtonBginCorrect}>Incorrect</Text>
                </TouchableOpacity>
            </View>
          )
        } else {
            return (
              <View style={styles.container}>
                <Text>
                    your Results
                </Text>
              </View>
            )
        }
      }
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
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
    marginBottom: 20,
    textAlign: 'center'
  },
  buttonBorder:{
      width:'150px',
      borderColor:'green',
      borderWidth:'2px',
      borderRadius:'5px',
      backgroundColor:'#fff',
      padding: 10,
      marginTop:20
      
  },
  textButtonBorder:{
    color:'green',
    fontSize:'20px',
    textAlign: 'center'
  },
  buttonBackgroundCorrect:{
      width:'150px',
      borderColor:'#000',
      borderWidth:'2px',
      borderRadius:'5px',
      backgroundColor:'green',
      padding: 10,
      marginTop:20
      
  },
  textButtonBgCorrect:{
    color:'#fff',
      fontSize:'20px',
      textAlign: 'center'
  },
  buttonBackgroundinCorrect:{
    width:'150px',
    borderColor:'#000',
    borderWidth:'2px',
    borderRadius:'5px',
    backgroundColor:'red',
    padding: 10,
    marginTop:20
    
},
textButtonBginCorrect:{
  color:'#fff',
    fontSize:'20px',
    textAlign: 'center'
}
});

function mapStateToProps (decksList) {
  return {
    decksList
  }
}

function mapDispatchToProps( dispatch ){
  return {
    recieveDecks: (decks) => dispatch(receiveDecks(decks))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(QuizView)