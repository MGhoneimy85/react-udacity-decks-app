import * as React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers/index';
import DeckListView from './components/DeckListView';
import NewDeckView from './components/newDeckView';
import DeckDetailsView from './components/DeckDetailsView';
import newCardView from './components/newCardView';
import quizView from './components/QuizView';
import { setLocalNotification } from './utils/helpers'
 
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
);

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={DeckListView} />
      <HomeStack.Screen name="Details" component={DeckDetailsView} />
      <HomeStack.Screen name="New Card" component={newCardView}  />
      <HomeStack.Screen name="Quiz" component={quizView}  />
    </HomeStack.Navigator>
  );
}
export default function App() {
  function componentDidMount() {
    setLocalNotification()
  }
  return (
     <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Deck List" component={HomeStackScreen} />
          <Tab.Screen name="New Deck" component={NewDeckView} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


