import { useEffect, useState } from "react";
import { generate } from "shortid";
import { asyncStorage } from "react-native";


const useColors = () => {
    const [colors, setColors] = useState([]);
    const loadColors =async () =>{
        const colorData = await asyncStorage.getItem("@ColorsListStore:Colors");
        if (colorData) {
          const colors = JSON.parse(colorData;  
            setColors(colors);
        }


    };
   useEffect
    const addColor = color => {
      const newColor = { id: generate(), color };
      setColors([newColor, ...colors]);
    };
    return { colors, addColor };
  };