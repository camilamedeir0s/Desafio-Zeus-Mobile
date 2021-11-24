import React, { useState, useEffect } from "react";
import { Text, TextInput, View, Button, Alert, TouchableOpacity } from "react-native";
import api from '../../services/Api';
import styles from './style';

export default function Form(){

const [name, setName] = useState('');
const [quantity, setQuantity] = useState('');
const [price, setPrice] = useState('');

async function savePurchase(){
    const data = {
        name,
        quantity,
        price,
    }
    try {
        const response = await api.post('create', data);
        Alert.alert('Cadastro realizado');
        setName('');
        setQuantity('');
        setPrice('');

    } catch (error) {
        Alert.alert('Erro no cadastro. Tente novamente.');
    }}


    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Nome da ração</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Ex: Comida do Zeus"
                    keyboardType="default"
                />
                <Text style={styles.formLabel}>Quantidade</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setQuantity}
                    value={quantity}
                    placeholder="Ex: 2kg"
                    keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Valor</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPrice}
                    value={price}
                    placeholder="Ex: R$50"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.buttonSave}
                    onPress={() =>{
                        savePurchase()
                    }}
                > 
                    <Text style={styles.textButtonSave}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}