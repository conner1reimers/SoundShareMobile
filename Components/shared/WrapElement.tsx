import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const WrapElement = React.forwardRef((props: Props, ref: any) => {
  return (
    <View>
      <Text>WrapElement</Text>
    </View>
  );
});

export default WrapElement;

const styles = StyleSheet.create({});
