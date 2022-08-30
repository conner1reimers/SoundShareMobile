import { Animated, Image, Modal, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Close from '../../../assets/images/close.svg';
import { darkColor, darkColor2, textPrimary } from '../../../util/style/variables';
import { setLogoOff, setLogoOn } from '../../../redux/store/actions/uiActions';
import BasicText from '../Text/BasicText';
import Animation from '../../Lottie/Lottie';
import { useNavigation, useNavigationState, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../types/types';
import { ScrollView } from 'react-native-gesture-handler';
import StickyHeader from './Auth/StickyHeader';

type Props = {
  children: any;
  rightCorner?: any;
  auth?: boolean;
};

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const MainModal = (props: Props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const routeLength = useNavigationState((state) => state.routes.length);
  const scrollToValue = useSelector((state: any) => state.auth.scroll);

  const close = () => {
    for (let i = 0; i < routeLength; i++) {
      navigation.goBack();
    }
  };

  // useEffect(() => {
  //   dispatch(setLogoOff());
  //   return () => {
  //     dispatch(setLogoOn());
  //   };
  // }, []);

  const ref = useRef<any>(null);

  useEffect(() => {
    if (scrollToValue != 0) ref.current?.scrollTo({ y: scrollToValue, animated: true });
  }, [ref, scrollToValue]);

  return (
    <View style={styles.centeredView}>
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <ScrollView
            keyboardShouldPersistTaps="always"
            keyboardDismissMode="on-drag"
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={true}
            ref={ref}
            contentContainerStyle={
              Platform.OS === 'android' ? { paddingRight: 25, marginRight: -25 } : {}
            }
            style={Platform.OS === 'ios' ? { width: '100%', overflow: 'visible' } : {}}
            stickyHeaderIndices={[0]}
          >
            <View>
              <StickyHeader rightCorner={props.rightCorner} />
            </View>

            {props.children}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default MainModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    height: '100%',
    width: '100%',
    backgroundColor: darkColor,
  },

  modalContent: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    overflow: 'visible',
  },
});
