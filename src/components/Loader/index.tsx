import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

export default function Loader() {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="grey" />
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
