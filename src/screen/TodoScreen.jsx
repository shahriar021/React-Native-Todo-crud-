import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { IconButton } from "react-native-paper";
import FallBack from "../components/FallBack";

const todoInfo = [
  {
    id: 1,
    task: "setup environment",
  },
  {
    id: 2,
    task: "run react native app",
  },
];

const TodoScreen = () => {
  const [data, setData] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editedTodo,setEditedTodo]=useState(null)

  const handleTodo=()=>{
    if(data===""){
      alert("add something...")
      return;
    }
    setTodoList([...todoList,{id:Date.now().toString(),task:data}])
    setData("")
  }

  const handleDelete=(id)=>{
    const updatedTodoList = todoList.filter((todo)=>todo.id!=id)

    setTodoList(updatedTodoList)
    
  }


  const handleEdited=(todo)=>{
    setEditedTodo(todo)
    setData(todo.task)
  }

  const handleUpdateTodo=()=>{
    const updatedTodo=todoList.map((item)=>{
      if(item.id===editedTodo.id){
        return {...item,task:data}
      }
      return item;
    })

    setTodoList(updatedTodo)
    setEditedTodo(null)
    setData("")
  }

  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "#e3de49",
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 50,
          padding: 10,
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <Text style={{ fontWeight: "bold", fontStyle: "italic", fontSize: 20,padding:5 }}>
          {item.task}
        </Text>
        <IconButton icon="pencil" iconColor="green" onPress={()=>handleEdited(item)}/>
        <IconButton icon="trash-can" iconColor="red" onPress={()=>handleDelete(item.id)}/>
      </View>
    );
  };

  return (
    <View style={{ margin: 10 }}>
      <Text
        style={{ padding: 10, textAlign: "center", justifyContent: "center" }}
      >
        Todo App
      </Text>
      <TextInput
        style={{ borderWidth: 3, padding: 10, borderColor: "#987456" }}
        placeholder="add to your task....."
        value={data}
        onChangeText={(userData) => setData(userData)}
      />
      
      {editedTodo ?<TouchableOpacity
        style={{
          backgroundColor: "#000",
          color: "#654562",
          marginTop: 10,
          borderRadius: 50,
        }}
        onPress={() => handleUpdateTodo()}
      >
        <Text
          style={{
            color: "white",
            borderRadius: 6,
            paddingHorizontal: 12,
            paddingVertical: 12,
            textAlign: "center",
            fontStyle: "italic",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          update
        </Text>
      </TouchableOpacity>:<TouchableOpacity
        style={{
          backgroundColor: "#000",
          color: "#654562",
          marginTop: 10,
          borderRadius: 50,
        }}
        onPress={() => handleTodo()}
      >
        <Text
          style={{
            color: "white",
            borderRadius: 6,
            paddingHorizontal: 12,
            paddingVertical: 12,
            textAlign: "center",
            fontStyle: "italic",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          add here
        </Text>
      </TouchableOpacity>}

      <FlatList data={todoList} renderItem={renderTodos} />

      {todoList.length <= 0 && <FallBack/>} 
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
