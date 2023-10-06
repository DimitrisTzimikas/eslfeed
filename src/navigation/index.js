/* Libraries */
import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';

/* Local Files */
import HomeStack from './stacks/Home.stack';

const AppNavigation = () => {
  const navigationRef = useRef();
  useReduxDevToolsExtension(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <HomeStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
