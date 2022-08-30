import React, { useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';

const SmallSpinner = (props: any) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    setTimeout(() => ref.current?.play(), 100);
    return () => {
      ref.current?.reset();
    };
  }, []);

  return (
    <View
      style={{
        height: 125,
        width: 125,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible',
      }}
    >
      <LottieView
        style={{
          height: 125,
          width: 125,
          overflow: 'visible',
        }}
        resizeMode="contain"
        ref={ref}
        autoSize={true}
        speed={2}
        source={require('./animationDatas/redmusic.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default SmallSpinner;
