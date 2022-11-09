/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React , { useEffect } from 'react';
 import { Text, View ,Button } from 'react-native';
 import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,selectCount} from './src/counterSlice'

  import {fetchRecipes,recipesSelector} from './src/ApiSlice'
  
 
 const ReduxDemo = () => {
  const { recipes, loading, hasErrors } = useSelector(recipesSelector)
    const count = useSelector(selectCount) // getting the counter value
    const dispatch = useDispatch(); // will use dispatch to call actions

    useEffect(() => {
      dispatch(fetchRecipes())
    }, [dispatch])
   
   return (
   
      <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        
      <Text>Counter Value = {count}</Text>
            <Button title="increment" onPress={() => dispatch(increment())}/>
            <Button title="decrement" onPress={() => dispatch(decrement())}/>
   </View>
   )
 }
 export default ReduxDemo;