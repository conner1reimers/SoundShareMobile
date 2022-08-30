import MainModal from '../MainModal';
import ModalHeader from './AuthHeader';
import { useRoute } from '@react-navigation/native';
import AuthForm from './AuthForm';
import AuthLoginNav from './AuthLoginNav';
import { View, Text } from 'react-native';

type Props = {};

const AuthLogin = (props: Props) => {
  const route = useRoute<any>();
  const navType = route?.name === 'Signup' ? 'Login' : 'Signup';

  return (
    <MainModal rightCorner={<AuthLoginNav type={navType} />}>
      <View style={{ flex: 1, minHeight: 15 }} />
      <ModalHeader />
      <AuthForm type={route?.name} />
    </MainModal>
  );
};

export default AuthLogin;
