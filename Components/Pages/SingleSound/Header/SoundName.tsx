import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { textPrimary, textSecondary } from '../../../../util/style/variables';
import BasicText from '../../../shared/Text/BasicText';
import { FC } from 'react';

// type Props = {}

const SoundNmae: FC = () => {
  const name = useSelector((state: any) => state.singleSound.sound.name);
  const username = useSelector((state: any) => state.singleSound.sound.username);

  return (
    <View style={styles.nameContainer}>
      <BasicText>
        <Text style={styles.name}>{name}</Text>
      </BasicText>

      <BasicText>
        <Text style={styles.username}>Uploaded by: {username}</Text>
      </BasicText>
    </View>
  );
};

export default SoundNmae;

const styles = StyleSheet.create({
  nameContainer: {
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 2,
  },

  name: {
    fontSize: 24,
    // fontFamily: font1,
    color: textPrimary,
    fontWeight: '500',
  },

  username: {
    fontSize: 14,
    color: textSecondary,
    fontWeight: '400',
  },
});
