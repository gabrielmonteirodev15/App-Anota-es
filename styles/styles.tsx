import React from "react";
import { ReactNode } from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    header:{
        width:'100%',
        padding: 25,
        backgroundColor: '#069'
    },
    anotacao:{
        fontSize:14,

    },
    btnanotacao:{
        position:'absolute',
        right:20,
        bottom:'-400%',
        width:50,
        height:50,
        backgroundColor:'#069',
        borderRadius:25
    },
    btnanotacaotexto:{
        color:'white',
        position:'relative',
        left:'50%',
        marginLeft:-15,
        top:3,
        fontSize:30
    },


    btnsalvar:{
        position:'absolute',
        right:20,
        bottom:'-80%',
        width:100,
        padding:20,
        backgroundColor:'#069',
        borderRadius:25
    },
});


