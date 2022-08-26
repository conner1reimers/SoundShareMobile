import React, {useRef, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';


const Animation = (props: any) => {

  const ref = useRef<any>(null);


  useEffect(() => {
    setTimeout(() => ref.current?.play(), 500);
    return () => {
      ref.current?.reset();
    }
  }, []);


  return (
    <View style={{
      height: props.modal ? 100 : 50,
      width: props.modal ? 100 : 50,
      justifyContent: "center",
      alignItems: props.modal ? "flex-end" : "center",
      overflow: "visible"
    }}>
      <LottieView
        style={{
          height: props.modal ? 140 : 50,
          width: props.modal ? 100 : 50,
          overflow: "visible",
          alignItems: props.modal ? "flex-start" : "center",
        }}
        resizeMode={props.modal ? "contain" : "center"}
        ref={ref}
        autoSize={!props.modal}
        source={require('./animationDatas/blueMain.json')}
        autoPlay
        loop />
      
    </View>
  );
}


export default Animation;