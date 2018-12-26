// Import libraries
import React from 'react';
import { Text, View } from 'react-native';

// Make Component
const Header = (props) => {
  const{ textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5
  },
  textStyle: {
    fontSize: 40
  }
};
// Make available to other parts of app
export default Header;
