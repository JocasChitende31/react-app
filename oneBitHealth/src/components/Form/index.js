import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList,
} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style/";

export default function Form() {

    const [userName, setUserName] = React.useState(null);
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = React.useState(null);
    const [messageImc, setMessageImc] = useState(null);
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([]);

    function imcCalculator() {
        let heightFormat = height.replace(',', '.');
        let weightFormat = weight.replace(',', '.');
        let totalImc = ((weightFormat / (heightFormat * heightFormat)).toFixed(2));
        setImcList((arrayImc) => [...arrayImc, { id: new Date().getTime(), nome: userName, imc: totalImc }]);
        setImc(totalImc);

    }

    function verificationImcInputs() {
        if (imc === null) {
            Vibration.vibrate();
            setErrorMessage('campo obrigatório*');
        }
    }

    function ValidationImc() {
        if (height != null && weight != null) {
            imcCalculator();
            setUserName(null);
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu IMC é igual a:");
            setTextButton("Calcular Novamente");
            setErrorMessage(null);
        } else {
            verificationImcInputs();
            setImc(null)
            setTextButton("Calcular");
            setMessageImc("preencha a altura e o peso");
        }

    }
    return (

        <View style={styles.formContext}>
            {imc === null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setUserName}
                        value={userName}
                        placeholder="Nome, Ex. Jeorgel"
                        keyboardType="name-phone-pad"
                    />
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <Text style={styles.formLabel}>Altura</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Altura, Ex. 1.74"
                        keyboardType="numeric"
                    />
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <Text style={styles.formLabel} >Peso</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="Peso, Ex. 61.57"
                        keyboardType="numeric"
                    ></TextInput>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>

                    <TouchableOpacity
                        style={styles.ButtonCalculator}
                        onPress={() => { ValidationImc() }}>
                        <Text
                            style={styles.textButtonCalculator}
                        >{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
                :
                <View style={styles.exhbitionResultImc}>
                    <ResultImc messageResultImc={messageImc} resultImc={imc} />
                    <TouchableOpacity
                        style={styles.ButtonCalculator}
                        onPress={() => { ValidationImc() }}>
                        <Text
                            style={styles.textButtonCalculator}
                        >{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList
                style={styles.listImc}
                data={imcList.reverse()}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItemList}>
                                Sr/a. <Text style={styles.userName}>{item.nome}</Text>, seu IMC é =
                            </Text>
                            {item.imc}
                        </Text>
                    )
                }}
                keyExtractor={(item) => {
                    item.id
                }}
            />
        </View>
    );
};