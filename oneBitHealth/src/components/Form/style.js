import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,
    },
    form: {
        width: '100%',
        marginTop: 20
    },
    formLabel: {
        color: '#000000',
        fontSize: 18,
        paddingLeft: 30,
        marginBottom: -10
    },
    input: {
        width: '90%',
        height: 40,
        borderRadius: 50,
        borderWidth: 1,
        backgroundColor: '#e0e5e5',
        borderColor: '#e0e5e5',
        margin: 20,
        paddingLeft: 10,

    },
    ButtonCalculator: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#ff0043',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 18,
        marginTop: 10
    },
    textButtonCalculator: {
        fontSize: 20,
        color: '#ffffff',
    },
    errorMessage: {
        fontSize: 12,
        color: 'red',
        fontWeight: '300',
        paddingLeft: 30,
        marginTop: -20,
        marginBottom: 8
    }

});


export default styles;