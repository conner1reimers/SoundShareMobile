import { Text } from 'react-native'
import * as Font from 'expo-font';
import { ReactChild, useEffect, useState } from 'react';
import { FC } from 'react'
import { textPrimary } from '../../../util/style/variables';

interface Props {
  other?: boolean;
  children: ReactChild;
  otherProps?: any,
  font?: string
}

const BasicText: FC<Props> = ({children, other, otherProps, font}) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
        'Catamaran': require('../../../assets/fonts/Catamaran/static/Catamaran-Regular.ttf'),
        'RobotoBlack': require('../../../assets/fonts/Roboto/Roboto-Black.ttf'),
        'RobotoBlackItalic': require('../../../assets/fonts/Roboto/Roboto-BlackItalic.ttf'),
        'RobotoBold': require('../../../assets/fonts/Roboto/Roboto-Bold.ttf'),
        'RobotoBoldItalic': require('../../../assets/fonts/Roboto/Roboto-BoldItalic.ttf'),
        'RobotoLight': require('../../../assets/fonts/Roboto/Roboto-Light.ttf'),
        'RobotoMedium': require('../../../assets/fonts/Roboto/Roboto-Medium.ttf'),
        'RobotoThin': require('../../../assets/fonts/Roboto/Roboto-Thin.ttf'),
        'Roboto': require('../../../assets/fonts/Roboto/Roboto-Regular.ttf'),
    });
    setFontsLoaded(true);
  }


  useEffect(() => {
    loadFonts();
  }, []);


  
  const style = {
    fontFamily: other ? "Catamaran" : font ? font : "Roboto",
    color: textPrimary,

  }
  
  const textProps = otherProps 
    ? { ...otherProps, style }  
    : {style};
    
  return (
    <>
      {fontsLoaded && (
        <Text {...textProps}>
                {children}
        </Text>)}
    </>
  )
}

export default BasicText
