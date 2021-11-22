import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";

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
    const response = await api.post('/create', data)  
}


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
                <Button onPress={() => savePurchase} title="Salvar"/>
            </View>
        </View>

    );
}