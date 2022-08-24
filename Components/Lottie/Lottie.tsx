import React, {useRef, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';


const Animation = () => {

  const ref = useRef<any>(null);


  useEffect(() => {
    setTimeout(() => ref.current?.play(), 500);
    return () => {
      ref.current?.reset();
    }
  }, []);


  return (
    <View style={{
      height: 50,
      width: 50,
          // backgroundColor: "green",
      justifyContent: "center",
      alignItems: "center",
      overflow: "visible"
    }}>
      <LottieView
        style={{
          height: 50,
          width: 50,
          overflow: "visible",
          // backgroundColor: "red"
        }}
        resizeMode="center"
        ref={ref}
        autoSize
        source={require('./animationDatas/blueMain.json')}
        autoPlay
        loop />
      
    </View>
  );
}


export default Animation;