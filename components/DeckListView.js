import * as React from 'react';
import { Text, View, StyleSheet, Button  , ScrollView} from 'react-native';

import { connect } from 'react-redux';
import { getDecks } from '../utils/api';
import { receiveDecks } from '../actions';
import { purple } from '../utils/colors';
class DeckListView  extends React.Component {

 componentDidMount(){
    getDecks().then(decks => this.props.recieveDecks(decks))
  }
  render(){

  const { decksList } = this.props
  const navigation = this.props.navigation
  return (
    <ScrollView>
        {Object.values(decksList).map((item) => {
            return(
              <View style={styles.listItem} key={item.title}>
                <Text style={styles.textStyle}> {item.title }</Text>
                <Text style={styles.textStyle}> {item.questions.length} Cards</Text>
                <Button title="Go to Details" onPress={() => navigation.navigate('Details' , {deckTitle : item.title , deckLength:item.questions.length})} />
              </View>
            )
          }
        )}

    </ScrollView>
  )
  }
}

const styles = StyleSheet.create({
  scrollStyle: {
    flex:1,
  },
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  listItem: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10 ,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    width:'90%' ,
    backgroundColor: purple
  },
  textStyle: {
    color:'white',
    fontSize:30,
    padding:10
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

export default connect(mapStateToProps,mapDispatchToProps)(DeckListView);



