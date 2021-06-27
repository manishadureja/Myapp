//Imports
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

//Counter functional component
const Counter = () => {
    //setting the count variable.
    const [count, setCount] = useState(0);

    //Increment function
    const onIncrement = () => {
        setCount(count + 1);
    }

    //Decrement function
    const onDecrement = () => {
        setCount(count - 1);
    }

    //Reset function
    const onReset = () => {
        setCount(0);
    }

    return (
        <View style={{ backgroundColor: "gray", width: '90%', height: '90%', alignItems: 'center', }}>
            <h1>Counter</h1>
            <Text>{count}</Text><br/>
            <View style={{
                margin: 40,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Button onPress={() => { onIncrement(); }} title="Increment" />
                <Button onPress={() => { onReset(); }} title="Reset" />
                <Button onPress={() => { onDecrement(); }} title="Decrement" />
            </View>
        </View>
    );
}

// Counter Component to call the Counter component.

const CounterComponent = () => {
    return (
        <>
            <Counter />
        </>
    );
}

export default CounterComponent;
