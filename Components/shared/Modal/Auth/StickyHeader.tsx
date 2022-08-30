import { Animated, Image, Modal, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Close from '../../../../assets/images/close.svg';
import { textPrimary } from '../../../../util/style/variables';
import { setLogoOff, setLogoOn } from '../../../../redux/store/actions/uiActions';
import BasicText from '../../Text/BasicText';
import Animation from '../../../Lottie/Lottie';
import { useNavigation, useNavigationState, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native-gesture-handler';
import { AuthStackParamList } from '../../../../types/types';
import { BlurView } from 'expo-blur';

type Props = {
  rightCorner: any;
};

const StickyHeader = (props: Props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const routeLength = useNavigationState((state) => state.routes.length);
  const scrollToValue = useSelector((state: any) => state.auth.scroll);

  const close = () => {
    for (let i = 0; i < routeLength; i++) {
      navigation.goBack();
    }
  };

  useEffect(() => {
    dispatch(setLogoOff());
    return () => {
      dispatch(setLogoOn());
    };
  }, []);

  return (
    <BlurView style={styles.closeContainer} intensity={10} tint="dark">
      <View style={styles.contentContainer}>
        <View style={styles.press2CloseContainer}>
          <Pressable style={styles.close} onPress={close}>
            <Close fill={textPrimary} fillOpacity={0.7} height={15} width={15} />
          </Pressable>
        </View>

        <View style={styles.modalLogoFullContainer}>
          <View style={styles.modalLogoContainer}>
            <View style={styles.logoTextContainer}>
              <BasicText font="RobotoBlack">
                <Text style={{ fontSize: Platform.OS === 'ios' ? 24 : 18 }}>SoundShare</Text>
              </BasicText>
            </View>

            <View style={styles.logoContainer}>
              <View style={styles.logo}>
                <Animation modal />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.optionalRightCorner}>{props.rightCorner}</View>
      </View>
    </BlurView>
  );
};

export default StickyHeader;

const styles = StyleSheet.create({
  closeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    flex: 1,
    paddingHorizontal: 24,
    position: 'relative',
    borderBottomWidth: 0.3,
    borderBottomColor: '#cdd6d923',
    maxHeight: 120,
  },

  contentContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 50 : 20,
  },

  press2CloseContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },

  close: {
    backgroundColor: '#2b3535bd',
    padding: Platform.OS === 'ios' ? 3 : 3,
    borderRadius: 8,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  modalLogoFullContainer: {
    flex: 4,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalLogoContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  optionalRightCorner: {
    flex: 1,
  },

  logoTextContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxWidth: 50,
    right: '30%',
    top: -4,
  },

  logo: {
    maxWidth: 50,
    left: 10,
  },

  modalContent: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 24,
    overflow: 'visible',
  },
});
