import React, { useState } from "react";
import { Text, TextInput, View, Button, Alert } from "react-native";
import api from '../../services/Api'

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


    } catch (error) {
        Alert.alert('Erro no cadastro. Tente novamente.');
    }}


    return(
        <View>
            <View>
                <Text>Nome da ração</Text>
                <TextInput
                    onChangeText={setName}
                    value={name}
                    placeholder="Nome"
                    keyboardType="default"
                />
                <Text>Quantidade</Text>
                <TextInput
                    onChangeText={setQuantity}
                    value={quantity}
                    placeholder="Kg"
                    keyboardType="numeric"
                />
                <Text>Valor</Text>
                <TextInput
                    onChangeText={setPrice}
                    value={price}
                    placeholder="R$"
                    keyboardType="numeric"
                />
                <Button onPress={() => savePurchase()} title="Salvar"/>
            </View>
        </View>

    );
}