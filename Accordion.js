//Imports
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import data from './data';
import {View } from "react-native";


//This component will open the child component on the click of a button.
const AccordionJS = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={{ backgroundColor: 'gray',padding:'20', width: '50%', height: '50%', alignItems: 'center' }}>
      <br/>
      <div onClick={() => setExpanded(!expanded)} style={{alignItems: 'end', backgroundColor:'white'}}>
        {title}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        <br/>
        {expanded && <p>{info}</p>}
      </div>
      <br/>
    </View>
  );
}

// This will  call the AccordionJS component.
const AccordionJSComponent = () => {
  const [questions, setQuestions] = useState(data)

  return (
     <div style={{alignItems:'center'}}>
        <h3 >General Questions</h3>
        <div>
          {questions.map((question) => (
            <AccordionJS key={question.id} {...question} />
          ))}
        </div>
      </div>
  );
}

export default AccordionJSComponent;
