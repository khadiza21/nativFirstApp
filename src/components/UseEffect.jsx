import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log('API Calling');
  },[])
  return (
    <View>
      <Text style={{fontSize:30}}>UseEffect</Text>
      <Text>Count: {count}</Text>
      <Button title="Counter" onPress={()=>setCount(count+1)} />
    </View>
  )
}

export default UseEffect