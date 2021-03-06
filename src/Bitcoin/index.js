import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import api from '../services/api';

class Bitcoin extends Component{
constructor(){
    super();

    //Criar um state
    this.state = {
        vbitcoin: 0
    }

    this.consultaPrecoBitcoin = this.consultaPrecoBitcoin.bind(this);

    }

async componentDidMount(){
    const response = await api.get('ticker'); 

    let valor = response.data.BRL['buy'];

    this.setState({
        bitcoin : valor
    });
    }

async AtualizaValor() {
    const response = await api.get('ticker'); 

    let valor = response.data.BRL['buy'];

    this.setState({
        bitcoin : valor
    });

    alert("O valor foi atualizado!");
}

    render(){
        return(
            <View>

                <Image
                    source={require('../../assets/bitcoin.png')}
                    style={{width:450, height:169}}
                    resizeMode='center'
                />

                <Text style={styles.textoBitcoin}>{this.state.vbitcoin}</Text>

                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>Atualizar</Text>
                </TouchableOpacity>

            </View>

        );

    }
}  // Fecha a classe Bitcoin

export default Bitcoin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textoBitcoin:{
        fontSize:32,
        color: '#363636',
    },

    botao:{
        backgroundColor: '#FFA500',
        marginTop:50,
        width:300,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:10
    },

    textoBotao:{
        fontSize:32,
        color:'#fff'
    },


});

