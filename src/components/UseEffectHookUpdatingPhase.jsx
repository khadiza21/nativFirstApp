import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectHookUpdatingPhase = () => {
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(20);

    // useEffect(()=> {
    //     console.log('counter value updated')
    // },[counter, score])
    // useEffect(()=> {
    //     console.log('counter value updated')
    // },[counter])
    // useEffect(()=> {
    //     console.log('Score value updated.')
    // },[score])
 

    return (
        <View>
            <Text style={{ fontSize: 30, marginBottom: 10 }}>UseEffect Hook</Text>
            <Text style={{ fontSize: 30, marginBottom: 10 }}>Counter: {counter} </Text>
            <Text style={{ fontSize: 30, marginBottom: 10 }}>Score: {score} </Text>
            <Button title="Counter" onPress={() => setCounter(counter+1)} />
            <Button title="Score" onPress={() => setScore(score+10)} />
                <InfoDetails  counter={counter} points={score} />
        </View>
    )
}


const InfoDetails = ({counter, points})=>{
    useEffect(()=> {
        console.log('child component')
    },[])
    return(
        <View>
           <Text  style={{ fontSize: 30, marginBottom: 10 }}>Info Details</Text> 
           <Text  style={{ fontSize: 30, marginBottom: 10 }}>Info Details {counter}</Text> 
           <Text  style={{ fontSize: 30, marginBottom: 10 }}>Info Details {points}</Text> 
        </View>
    )
}

export default UseEffectHookUpdatingPhase