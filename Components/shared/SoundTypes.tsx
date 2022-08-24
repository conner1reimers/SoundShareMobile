import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import PressableCategory from '../RecentSounds/PressableCategory'

type Props = {}

const SoundTypes = (props: Props) => {
  const [active, setActive] = useState<string>("all");

  const setall = () => setActive("all");
  const setloop = () => setActive("loop");
  const setshort = () => setActive("short");
  const setvocal = () => setActive("vocal");



  return (
    <View style={styles.soundTypes}>
      <PressableCategory press={setall} active={active==="all"} label="ALL SOUNDS"/>
      <PressableCategory press={setloop} active={active === "loop"} label="SHORT SOUNDS" />
      <PressableCategory press={setshort} active={active === "short"} label="MUSIC LOOPS" />
      <PressableCategory press={setvocal} active={active === "vocal"} label="RAW VOCALS" />
    </View>
  )
}

const styles = StyleSheet.create({
  soundTypes: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
});



export default SoundTypes;