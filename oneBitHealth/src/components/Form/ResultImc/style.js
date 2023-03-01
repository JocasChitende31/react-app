import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc:{
        flex: 1,
        marginTop: 20,
        paddingTop: 15,
        borderRadius: 50,
        alignItems: 'center',
        width: '100%',
    },
    numberImc:{
        fontSize:50,
        color: '#ff0043',
        fontWeight: 'bold',
    },
    information:{
        fontSize:18,
        color: '#ff0043',
        fontWeight: 'bold'
    },
    boxShareButton:{
        width: '100%',
        alignItems: 'center',
    },
    shared:{
        backgroundColor: '#1817f2',
        borderRadius: 50,
        padding: 5,
        marginTop: 10,
        marginRight: 10

    },
    sharedText:{
        color: 'white',
        paddingHorizontal: 30
    }
});

export default styles;