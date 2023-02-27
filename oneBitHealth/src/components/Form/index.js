import React, { useState } from "react";
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    Vibration
} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style/";

export default function Form() {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = React.useState(null);
    const [messageImc, setMessageImc] = useState('preencha a altura e o peso');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');
    const [errorMessage, setErrorMessage] = useState(null);

    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2));
    }

    function verificationImcInputs(){
        if(imc===null){
            Vibration.vibrate();
            setErrorMessage('campo obrigatório*');
        }
    }

    function ValidationImc() {
        if (height != null && weight != null) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu IMC é igual :");
            setTextButton("Calcular Novamente");
            setErrorMessage(null);
            return
        }else{
        verificationImcInputs();
        setImc(null)
        setTextButton("Calcular");
        setMessageImc("preencha a altura e o peso");
        }
        
    }
    return (
        <View style={styles.formContext} >
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Altura, Ex. 1.74"
                    keyboardType="numbers-and-punctuation"
                />
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <Text style={styles.formLabel} >Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Peso, Ex. 61.57"
                    keyboardType="numbers-and-punctuation"
                ></TextInput>
                <Text style={styles.errorMessage}>{errorMessage}</Text>

                <TouchableOpacity
                    style={styles.ButtonCalculator}
                    onPress={() => { ValidationImc() }}>
                    <Text
                        style={styles.textButtonCalculator}
                    >{textButton}</Text>
                </TouchableOpacity>

            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
};