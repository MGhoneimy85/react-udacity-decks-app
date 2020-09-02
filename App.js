import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DeckListView from './components/DeckListView';
import NewDeckView from './components/newDeckView';
import DeckDetailsView from './components/DeckDetailsView';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers/index';
 
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
    </HomeStack.Navigator>
  );
}
export default function App() {
 
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


