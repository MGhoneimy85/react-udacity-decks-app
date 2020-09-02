import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';




class DeckDetailsView  extends React.Component {
   
  render(){
      const title  = this.props.route.params.deckTitle
      const length  = this.props.route.params.deckLength
      return (
        
        <View style={styles.container}>
        
          
              <Text style={styles.title} >{title}</Text>
              <Text style={styles.text} >{length} Cards</Text>
              
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
  }
});


export default DeckDetailsView