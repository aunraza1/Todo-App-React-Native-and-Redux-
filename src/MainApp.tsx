import React, { useState,useRef } from 'react';
import {add,itemDelete,updateItem} from '../store/action/index'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';




const MainApp = (props) => {
  

  const [todo,setTodo]=useState() 
  const [btnName,setbtnName]=useState("Add")
  const [index,setIndex]=useState()

 


  const edit=(todo, i)=>{
    setIndex(i)
    setbtnName("Update")
    console.log(i,todo)
    setTodo(todo) 

  }

  const addingValue=()=>{
    let res;
    props?.todos?.map((v,i)=>{
     if(todo == v){
      return res= "true"
     }else{
      return res= "false"
     }
    })
    console.log(res);
    
    if(btnName=="Add" && todo!=="" && (res == "false" || res == undefined)  ){
    props.add(todo,(value)=>setTodo(value))
  }else if (btnName=="Update"){
    props.updateItem(todo,index,(value)=>setbtnName(value),(value)=>setTodo(value))
  }
      
   
  }

    return (
      <>
     
      <SafeAreaView >
       
        <TextInput style={styles.input} onChangeText={(text)=>setTodo(text)
        }>{todo}</TextInput>
        <TouchableOpacity onPress={()=>addingValue()} style={styles.button}>
          <Text>{btnName}</Text>
        </TouchableOpacity>
        <ScrollView>
        {props?.todos?.map((todo,i)=>{
          return (
          <>
           
          <View style={styles.textBody}>
          <Text >{todo}</Text><TouchableOpacity onPress={()=> edit(todo,i)
          } style={styles.btn}> 
            <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={()=>props.itemDelete(i)} > 
            <Text>Delete</Text>
            </TouchableOpacity>
            </View>
           
            </>
            )

        })}
         </ScrollView>
        
      </SafeAreaView>
     
      </>
    );
  };

  const styles = StyleSheet.create({
   
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    textBody: {
      padding: 25,
      flexDirection: 'row',
    },
    btn:{
      backgroundColor: "grey",
      width: 70,
      marginLeft: 15,
      alignItems: 'center' 
    },
  });


  const mapStateToProp=(state)=>({

    todos:state.todos
  })
  const mapDispatchToProps=(dispatch)=>({
    add:(data,value)=>dispatch(add(data,value)),
    itemDelete:(i)=>dispatch(itemDelete(i)),
    updateItem:(todo,i,btnName,value)=>dispatch(updateItem(todo,i,btnName,value)),
    

  })
  export default connect(mapStateToProp,mapDispatchToProps)(MainApp)