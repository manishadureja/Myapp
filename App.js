//Imports
import React, { useState } from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";

//This component will change the background color(any random color) on the click of a button.
const ToDoList = () => {
  const [itemName, setItemName] = useState('');
  const [itemList, setItemList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);

  //add an item to the list or edit the current item.
  const addItem = () => {
    if (itemName === '') {
      alert('Item name can not be empty.');
      return;
    }
    if (editing) {
      itemList.splice(currentIndex, 1, itemName);
      setItemList([...itemList]);
    } else {
      setItemList([...itemList, itemName]);
    }
    setItemName('');
    setEditing(false);
  }
  const editItem = (index, item) => {
    setEditing(true);
    setCurrentIndex(index);
    setItemName(item);

  }

  const deleteItem = (index) => {
      itemList.splice(index, 1);
      alert(itemList);
      setItemList([...itemList]);
  }
  //return the view.
  return (
    <View style={styles.container} >
      <h1>Item List</h1>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter Item" onChangeText={text => setItemName(text)} value={itemName} />
        &nbsp;<Button onPress={addItem} title={editing ? "Edit" : "Add"} />
      </View>


      <View >
        {itemList.map((item, index) => {
          return <View style={styles.inputContainer}><Text key={index} Text={item}>{item}</Text>&nbsp;<Button title='Edit' onPress={() => { editItem(index, item); }} />&nbsp;<Button title='Delete' onPress={() => { deleteItem(index); }} /></View>
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '90%', height: '90%', alignItems: 'center'
  },
  inputContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    width: '90%'
  },
  button: {
    width: '30%',
    alignItems: 'center'
  },

});

export default ToDoList;