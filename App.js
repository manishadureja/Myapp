//Imports
import React, { useState } from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import ToDoList from "./ToDoList";
import Counter from "./counter";
import ColorFlipper from "./ColorFlipper";
import Accordion from "./Accordion";
import OpenModal from "./OpenModal";



//This component will invoke other components.
const App = () => {
  return (
  <ToDoList/>
  //<Counter/>,
  //<ColorFlipper/>,
  //<Accordion/>,
  //<OpenModal/>
  

  );
}

export default App; 
