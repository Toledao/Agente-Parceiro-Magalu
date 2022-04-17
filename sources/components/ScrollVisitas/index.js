import React from 'react';
import {ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import RoteiroVisitas from '../RoteiroVisitas';
import Card from './Card'

export default function ScrollVisitas() {
    return (
    <ScrollView>
        <RoteiroVisitas/>
        <Card nome="Nome Parceiro" horario="16:00" bairro="Jardim Bla" />
        <Card nome="Nome Parceiro" horario="16:00" bairro="Jardim Bla" />
        <Card nome="Nome Parceiro" horario="16:00" bairro="Jardim Bla" />
        <Card nome="Nome Parceiro" horario="16:00" bairro="Jardim Bla" />
    </ScrollView>
  );
}
