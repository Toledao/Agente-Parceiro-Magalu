import React, {useState} from 'react';
import { View, Text, TouchableOpacity,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import ScrollParceiros from '../../components/ScrollParceiros';
import Styles from './styles';
import {Picker} from '@react-native-picker/picker'
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import 'moment/locale/pt-br'

export default function NewVisitaDate() {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState();

 return (
   <SafeAreaView style={Styles.container}>
       <View style={Styles.areaCliente}>
        <Text style={Styles.txtareaCliente}>CNPJ</Text>
        <Text style={Styles.txtresultParceiro}>02.546.870/0001-70</Text>
        <Text style={Styles.txtareaCliente}>Parceiro</Text>
        <Text style={Styles.txtresultParceiro}>José Farofa</Text>
       </View>
       <View style={Styles.areaDetalhes}>
           <View style={Styles.areaData}>
               <Text style={Styles.titulodata}>Data da Visita:</Text>
                <TouchableOpacity style={Styles.button} onPress={() => setOpen(true)}>
                    <Text style={Styles.data}>{moment(date).format('DD/MM/YYYY [as] H:mm')}</Text>
                </TouchableOpacity>
            </View>
            <DatePicker modal
                        title='Selecione uma Data'
                        open={open}     
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                         onCancel={() => {
                            setOpen(false)
                        }} 
                        date={date} 
                        minuteInterval={10} 
                        locale={'pt-br'} 
                        is24hourSource={'device'} />
            <View style={Styles.areaPicker}>
                <Text style={Styles.titulodata}>Selecione o Intevalo da visita:</Text>
                <View style={Styles.PickerCard}>
                    <Picker
                        style={Styles.PickerIntervalo}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                    }>
                        <Picker.Item label="Mensalmente" value="Mensalmente" />
                        <Picker.Item label="5 Semanas" value="5 Semanas" />
                    </Picker>
                </View>
            </View>

            <View style={Styles.areaTags}>
                <Text>Tags</Text>
            </View>

            <View style={Styles.AreaBTN}>
               <TouchableOpacity style={Styles.btnCheckList}>
               <Text style={Styles.txtCheckList}>Finalizar Visita</Text>
               </TouchableOpacity>
          </View>
                
       </View>
   </SafeAreaView>
  );
}