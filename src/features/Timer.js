import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = () => {

  }


  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={setProgress}  //set state is eqivalent of a function that takes the value and sets the value
          onEnd={() => {}}
        />

        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>

      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar 
          progress={progress}
          color={colors.progressBar} 
          style={{height: spacing.sm}}/>
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  task: {
    color: colors.white,
    textAlign: "center",
  },
});
