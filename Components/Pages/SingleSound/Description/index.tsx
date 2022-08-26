import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store/reducers'
import { textPrimary, textSecondary } from '../../../../util/style/variables'
import BasicText from '../../../shared/Text/BasicText'
import { FC, useState } from 'react'



// type Props = {}

const Description: FC = () => {
  const [descLength, setDescLength] = useState<number>(3);
  const description = useSelector((state: RootState) => state.singleSound.sound.description);
  const lines = description.split(/\r\n|\r|\n/).length;

  const descriptionIsOpen = descLength > 5;


  const toggleDescription = () => {
    if(!descriptionIsOpen) setDescLength(lines);
    else setDescLength(3);
  }



  return (
      <View style={styles.desc}>

        <View style={styles.descContainer}>

          <View style={styles.descriptionTextContainer}>
              <BasicText otherProps={{ellipsizeMode:'tail', numberOfLines: descLength}}>
                  <Text style={styles.descriptionText}>
                    {description ? description 
                    : "The user did not give a description..."}
                  </Text>
              </BasicText>
          </View>
            
            <View style={styles.otherContainer}>
                <View style={styles.bottomBorder}/>
                
                {lines > 5 && (
                  <Pressable 
                    onPress={toggleDescription} 
                    style={styles.pressableContainer}>

                      <View style={styles.buttonBackground}/>

                  
                      <BasicText otherProps={{numberOfLines:1}}>
                        <Text style={styles.seeMoreText}>
                            {descriptionIsOpen ? "SEE LESS" : "SEE MORE"}
                        </Text>
                      </BasicText>

                    </Pressable>
                  )}

            </View>
        </View>

      </View>
  )
}

const styles = StyleSheet.create({
  desc: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: 'flex-start',
  },

  descContainer: {
    width: "90%",
    justifyContent: "center"
  },

  descriptionTextContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: 'flex-start',
  },

  descriptionText: {
    fontSize: 18,
    
  },

  otherContainer: {
    marginTop: 5,

  },

  pressableContainer: {
    maxWidth: 70,
    opacity: .7,
    marginLeft: 7
  },

  seeMoreText: {
    color: textPrimary,
    fontWeight: "600",
    fontSize: 11,
  },

  buttonBackground: {
    position: "absolute",
    backgroundColor: "#f1f1fc1e",
    height: "100%",
    width: "120%",
    opacity: .61,
    zIndex: -1,
    maxWidth: 60,
    borderRadius: 3,
    left: 0,
    top: 0,
    transform: [{translateX: -3}, {scale: 1.2}],
    
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "#4596b363",
    shadowOpacity: 0.5,
    shadowRadius: .84,
    elevation: 4,
  },

  bottomBorder: {
    position: "absolute",
    height: "100%",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: textSecondary,
    borderTopStartRadius: 4,
    borderTopEndRadius:10,
    opacity: .2,
    top: 5
  }

});



export default Description