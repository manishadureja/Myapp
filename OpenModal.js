//Imports
import React, { useState } from "react";
import { Button, Image, View } from "react-native";

//This component is used to open a modal.
const OpenModal = (props) => {
  // This function will open the modal on click of a button.
  const [imgOpacity, setImgOpacity] = useState(0);
  const openModalProject = () => {
    if (imgOpacity === 0) {
      setImgOpacity(1);
    } else {
      setImgOpacity(0);
    }

  }


  //return the view.
  return (
    <View style={{ backgroundColor: 'gray', width: '100%', height: '100%', alignItems: 'center', }}>
      <h1>
        Modal Project
      </h1>
      <Button onPress={() => { openModalProject(); }} title="Click Me!" />
      <Image
        style={{ width: '50%', height: '50%', opacity: imgOpacity }}
        source={{ uri: props.modalName }}
      />

    </View>
  );
}

// This will call the OpenModal component.
const OpenModalComponent = () => {
  return (
    <>
      <OpenModal modalName="https://css-tricks.com/wp-content/uploads/2016/07/centered.jpg" />
    </>
  );
}

export default OpenModalComponent;