

import React from 'react';

import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#0f0d2b' : '#c1c1c1',
  };
  return (
    <View style={[backgroundStyle, {flex: 1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
