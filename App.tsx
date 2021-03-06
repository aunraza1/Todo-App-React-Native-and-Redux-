/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MainApp from './src/MainApp'
import { Provider } from 'react-redux';
import store from './store/index'




const App = () => {
  
  return (
  
 <>
<Provider store={store}>
<MainApp/>
</Provider>
 </>
       
     
  );
};



export default App;
