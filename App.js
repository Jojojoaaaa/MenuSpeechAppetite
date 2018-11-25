import React, {Component} from 'react';
import {View} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { NativeRouter, Route } from 'react-router-native';


import * as routes from './src/constants/routes';
//store
import rootReducer from './src/store/reducer';

const store = createStore(rootReducer);

import MenuContainer from './src/containers/MenuContainer';
import SplashpageContainer from './src/containers/SplashpageContainer';

export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <NativeRouter> 
          <View>
            <Route exact path={routes.SPLASHPAGE} component ={SplashpageContainer}/>
            <Route exact path={routes.MENU} component = {MenuContainer}/>
          </View>
        </NativeRouter>
      </Provider>  
    );
  }
}

