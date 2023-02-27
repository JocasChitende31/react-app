import React,  { useState }from "react";
import { View, Text , TextInput, Button} from "react-native";
import ResultImc from "./ResultImc";

export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = React.useState(null);
    const [messageImc, setMessageImc] = useState('preencha a altura e o peso!');
    const [imc, setImc]= useState(null);
    const [textButton, setTextButton] = useState('Calcular');

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2));
    }
    
    function ValidationImc(){
        if(height!=null && weight!= null){
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu IMC é igual :");
            setTextButton("Calcular Novamente");
            return
        }  
            setImc(null)
            setTextButton("Calcular");
            setMessageImc("preencha a altura e o peso!");
    }

    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                onChangeText={setHeight}
                value={height}
                placeholder="Altura, Ex. 1.87"
                keyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder="Peso, Ex. 50.5767"
                keyboardType="numeric"
                ></TextInput>

                <Button 
                onPress={()=>ValidationImc()}
                title={textButton}
                />
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}