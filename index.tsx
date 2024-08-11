import React, {useState, useEffect} from "react";

import { ReactNode } from "react";
import { Text, View, Image, Button, ActivityIndicator, ScrollView , Platform, TouchableOpacity, TextInput} from "react-native";

import { setStatusBarHidden, StatusBar } from "expo-status-bar";
import Constants from 'expo-constants';
import { green } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import styles from "./styles/styles";
import { Header } from "react-native/Libraries/NewAppScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App() {

      //Criando os estados da aplicação
    //Estado de leitura ou atualização
    const [estado , setEstado] = useState('leitura');

    //Estados da anotação
    const [anotacao, setAnotacao] = useState('');

  
    useEffect(() =>{
      //Quando inicializar o app leia a key anotacao
      //Cria uma função async que pega o que está dentro do item async 'anotacao'
      //e seta dentro do setAnotacao
      (async () =>{
        try {
          const anotacaoLeitura = await AsyncStorage.getItem('anotacao')
          setAnotacao(anotacaoLeitura)
        } catch (error) {}
      })();
    }, [])

    
    
    
    //Criamos uma função que será responsavel por criar um item async 
    setData = async() =>{
      try {
          //Passamos o nome do item 'anotacao'
          //E oque será guardado dentro do item no caso as anotaçoes
          await AsyncStorage.setItem('anotacao' ,anotacao)
      } catch (error) {}
      alert('Sau anotação foi salva!')
    }
    
    
    function atualizarTexto(){
        setEstado('leitura')
        setData();
    
    }
   

    
    if(estado == 'leitura'){
     return(
     
      <View style={{}}>
         <StatusBar style="light"></StatusBar>
        
        <View style={styles.header}>
            <Text style={{textAlign:'center', color:'white', fontSize:18}}>Aplicativo de anotações</Text>
        </View>
        
        {
        (anotacao !='')?
        <View style={{padding:20}}>
          <Text style={styles.anotacao}>{anotacao}</Text>
        </View>

        :
        <View style={{padding:20}}>
          <Text style={{opacity:0.3}}>Nenhuma anotação encontrada</Text>
        </View>
        }
          <TouchableOpacity style={styles.btnanotacao} onPress={()=> setEstado('atualizando')}>
              {
              (anotacao =='')?
              <Text style={styles.btnanotacaotexto}> + </Text>
              :
              <Text style={{textAlign:'center' , color:'white', fontSize:12, marginTop:16}}> Editar </Text>
              }
          </TouchableOpacity>
        </View>
     );


  }

  else if(estado == 'atualizando'){
        return(
        <View style={{}}>
        <StatusBar style="light"></StatusBar>
        
        <View style={styles.header}>
            <Text style={{textAlign:'center', color:'white', fontSize:18}}>Aplicativo de anotações</Text>
        </View>
        
        <TextInput value={anotacao} multiline={true} numberOfLines={5} onChangeText={(text)=>setAnotacao(text)} style={{height:300, textAlignVertical:'top', padding:15}} autoFocus={true}>

        </TextInput>

        
        <TouchableOpacity style={styles.btnsalvar} onPress={()=> atualizarTexto()} > 
          <Text style={{color:'white', textAlign:'center'
            , fontWeight:'bold'
          }}> Salvar</Text>
        </TouchableOpacity>
        </View>
        );
        
  }


}

