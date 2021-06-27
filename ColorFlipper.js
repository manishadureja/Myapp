//Imports
import React, { useState } from "react";
import { Button, View } from "react-native";

//This component will change the background color(any random color) on the click of a button.
const ColourFlipper = () => {
  const [backgroundcolor, setBackgroundcolor] = useState('yellow');

  // This function will get the random number to form RGB which will be set as background color of this component.
  const setBg = ()=> {  
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    setBackgroundcolor("rgb(" + x + "," + y + "," + z + ")");
 }  
 //return the view.
return (
    <View style={{backgroundColor:backgroundcolor, width:'100%', height:'100%', alignItems:'center',}}>
      <h1>
         BackgroundColor:{backgroundcolor}
      </h1>
      <Button onPress={() => {setBg();}} title="Click Me!"/>
    </View>
  );
}

// This will call the ColourFlipper component.
const ColourFlipperComponent = () => {
  return (
    <>
      <ColourFlipper/>
    </>
  );
}

export default ColourFlipperComponent;