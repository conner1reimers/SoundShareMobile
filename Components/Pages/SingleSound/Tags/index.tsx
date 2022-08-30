import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store/reducers';
import { textSecondary } from '../../../../util/style/variables';
import BasicText from '../../../shared/Text/BasicText';

type Props = {};

const SSTags: FC = (props: Props) => {
  const tags = useSelector((state: RootState) => state.singleSound.sound.tags);

  return (
    <View style={styles.container}>
      <View style={styles.tagContainer}>
        {tags ? (
          <>
            <BasicText>
              <Text style={{ color: textSecondary }}>Tags:</Text>
            </BasicText>

            {tags.map((name: string) => (
              <View key={name} style={styles.tagItemContainer}>
                <BasicText>
                  <Text style={styles.tagItem}>{name}</Text>
                </BasicText>
              </View>
            ))}
          </>
        ) : (
          <BasicText other>No tags...</BasicText>
        )}
      </View>
    </View>
  );
};

export default SSTags;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  tagContainer: {
    width: '90%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  tagItemContainer: {
    marginLeft: 4,
  },
  tagItem: {},
});
