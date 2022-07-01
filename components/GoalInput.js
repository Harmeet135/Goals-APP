import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";
import { useState } from "react";


function GoalInput(props) {
    const [enteredText, setenteredText] = useState("");

    function goalInputHandler(enteredText) {
        setenteredText(enteredText);

    }



    function addGoalHandler() {
        props.onatGoal(enteredText);
        setenteredText('');
    }


    return (

        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputcontainer}>
                <Image style={styles.image} source={require('../assets/goal.png')} />
                <TextInput
                    style={styles.inputtext}
                    placeholder="Your couse goal"
                    onChangeText={goalInputHandler}
                    value={enteredText}
                />
                <View style={styles.buttoncontainer}>
                    <View style={styles.button}>
                        <Button title="Close " onPress={props.oncancel} color='#f31282' />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color='#5e0acc' />
                    </View>

                </View>

            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputcontainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: '#311b6b'
    },

    inputtext: {
        width: "100%",
        borderColor: "#e4d0ff",
        borderWidth: 1,
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        padding: 16,
    },

    image: {
        width: 100,
        height: 100,
        margin: 20,
    },

    buttoncontainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,

    }
})