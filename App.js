import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItems from "./components/GoalItems";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modelVisible, setmodelVisible] = useState(false);
  const [courseGoals, setcoursegoals] = useState([]);

  function startaddGoalhandler() {
    setmodelVisible(true);
  }

  function endGoalHandler() {
    setmodelVisible(false);
  }

  function addGoalHandler(enteredText) {
    setcoursegoals((currentcourseGoals) => [
      ...currentcourseGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
    endGoalHandler();
  }

  function deleteGoalHandler(id) {
    setcoursegoals((currentcourseGoals) => {
      return currentcourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startaddGoalhandler}
        />
        {modelVisible && (
          <GoalInput
            visible={modelVisible}
            onatGoal={addGoalHandler}
            oncancel={endGoalHandler}
          />
        )}
        <View style={styles.goalscontainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemdata) => {
              return (
                <GoalItems
                  text={itemdata.item.text}
                  id={itemdata.item.id}
                  onDeleteitem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalscontainer: {
    flex: 5,
  },
});
