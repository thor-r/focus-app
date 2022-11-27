import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Countdown } from '../components/Countdown'


export const Timer = ({ focusSubject }) => (
  <View style={styles.container}>
    <View style={styles.countdown}>
    <Countdown isPaused onProgress={() => {}} onEnd={() => {}} />
    </View>
  </View>
)


const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  countdown: {

  }
})