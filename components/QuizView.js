import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { getDecks } from '../utils/api';
import { receiveDecks } from '../actions'
class QuizView  extends React.Component {
  state = {
    currentQuestionIndex: 0,
    showAnswerFlag:false,
    correctAnswer:0,
    incorrectAnswer:0,
  }
  componentDidMount(){
    getDecks().then(decks => this.props.recieveDecks(decks))
  }
  render(){
    const currentQuestionIndex = this.state.currentQuestionIndex
    const currentQuestionNumber = this.state.currentQuestionIndex + 1
    console.log(this.state)
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
              <Text style={styles.text}> {currentQuestionNumber} / {questions.length} </Text>
              { !this.state.showAnswerFlag ?  <Text style={styles.text}> {questions[currentQuestionIndex].question}</Text> : <Text style={styles.text}> {questions[currentQuestionIndex].answer}</Text> }
                <TouchableOpacity  style={styles.buttonBorder}  onPress={() => this.setState({ showAnswerFlag: !this.state.showAnswerFlag}) }>
                  <Text style={styles.textButtonBorder}> {!this.state.showAnswerFlag ? 'Show Answer' : 'Show Question' } </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.buttonBackgroundCorrect}  onPress={() => this.setState({ currentQuestionIndex:this.state.currentQuestionIndex+1 ,correctAnswer:this.state.correctAnswer+1,  showAnswerFlag: false }) }  >
                  <Text style={styles.textButtonBgCorrect}>Correct</Text>
                </TouchableOpacity>
                
                <TouchableOpacity  style={styles.buttonBackgroundinCorrect}  onPress={() => this.setState({ currentQuestionIndex:this.state.currentQuestionIndex+1 ,incorrectAnswer:this.state.incorrectAnswer+1, showAnswerFlag: false})}  >
                  <Text style={styles.textButtonBginCorrect}>Incorrect</Text>
                </TouchableOpacity>
            </View>
          )
        } else {
            return (
              <View style={styles.container}>
                <Text style={styles.text}>
                    Your Results
                </Text>
                <Text style={styles.text}>
                    You answered {this.state.correctAnswer} correct Question from {questions.length} Questions
                </Text>
                <Text style={styles.text}>
                    Your Percent  {((this.state.correctAnswer / questions.length) * 100).toFixed(0)} %
                </Text>
                <TouchableOpacity  style={styles.buttonBorder}  onPress={() => this.props.navigation.navigate('Home') }>
                  <Text style={styles.textButtonBorder}> Go Home </Text>
                </TouchableOpacity>
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
    color:'#000',
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