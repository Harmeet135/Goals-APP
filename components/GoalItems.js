import { StyleSheet, Text, Pressable, View } from 'react-native';


function GoalItems(props) {
    return (
        <View style={styles.goalsvalue}>
            <Pressable android_ripple={{ color: '#dddddd' }} onPress={props.onDeleteitem.bind(this, props.id)}>
                <Text style={styles.goalstext} >{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItems



const styles = StyleSheet.create({
    goalsvalue: {
        backgroundColor: "#6539ff",
        width: '95%',
        marginTop: 15,
        marginLeft: 8,
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 7,

    },
    goalstext: {
        color: 'white'
    },
})