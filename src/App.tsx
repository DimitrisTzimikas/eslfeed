/* Libraries */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

/* Local files */
import {persistor, store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView>
          <Header />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
