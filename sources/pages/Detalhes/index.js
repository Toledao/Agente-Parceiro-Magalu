import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './styles';


export default function Detalhes() {
 return (
   <View style={Styles.container}>
       <View style={Styles.areaCliente}>
        <Text style={Styles.txtareaCliente}>CNPJ</Text>
        <Text style={Styles.txtresultParceiro}>02.546.870/0001-70</Text>
        <Text style={Styles.txtareaCliente}>Parceiro</Text>
        <Text style={Styles.txtresultParceiro}>José Farofa</Text>
       </View>
       <View style={Styles.areaDetalhes}>
           <View style={Styles.areaResponsavel}>
                <Text>Responsável do estabelecimento</Text>
                <Text style={Styles.txtresultResp}>Mariano ou Jovelina</Text>
           </View>
           <View style={Styles.areaEndereco}>
                <Text style={Styles.txtInputs}>Logradouro</Text>
                    <Text style={Styles.txtresultLogradouro}>Rua José das Quintas</Text>
                <View style={Styles.areanumBairro}>
                    <View>
                        <Text style={Styles.txtInputs}>Número</Text>
                            <Text style={Styles.txtresultados}>1502</Text>
                    </View>
                    <View style={Styles.areaBairro}>
                        <Text style={Styles.txtInputs}>Bairro</Text>
                            <Text style={Styles.txtresultados}>Vila Nova Prudente</Text>
                    </View>
                </View>
                <View style={Styles.areaReferencia}>
                    <Text style={Styles.txtInputs}>Referência</Text>
                        <Text style={Styles.txtresultados}>Próximo ao Hipermercado Super Muffato</Text>
                </View>
                <View style={Styles.areaCidadeUF}>
                    <View>
                        <Text style={Styles.txtInputs}>Cidade</Text>
                            <Text style={Styles.txtresultados}>São José do Vale do Rio Preto</Text>
                    </View>
                    <View style={Styles.areaUF}>
                        <Text style={Styles.txtInputs}>UF</Text>
                            <Text style={Styles.txtresultados}>SP</Text>
                    </View>
                </View>
                <View style={Styles.areaCEP}>
                    <Text style={Styles.txtInputs}>CEP</Text>
                        <Text style={Styles.txtresultados}>19280-000</Text>
                </View>
           </View>
        <TouchableOpacity style={Styles.btnCheckList}>
            <Text style={Styles.txtCheckList}>Iniciar CheckList</Text>
        </TouchableOpacity>
       </View>
   </View>
  );
}