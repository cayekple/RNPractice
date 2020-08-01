import React from 'react';
import {View, Text, Button} from 'react-native';

const ExploreScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Explore Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default ExploreScreen;
