import React, {useState} from 'react';
import { View, Text, TouchableOpacity,SafeAreaView, FlatList, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import ScrollParceiros from '../../components/ScrollParceiros';
import Styles from './styles';
import {Picker} from '@react-native-picker/picker'
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import 'moment/locale/pt-br'


export default function NewVisitaDate() {
    const listaDatasInitial = [{id:1, data: new Date(), open: false}]
    const [dates, setDates] = useState(listaDatasInitial)
    const [extraData, setExtraData] = useState(new Date())
    

    
    function openModal(item){
        const newListData = dates.map((itemlista) =>
        {
            if (itemlista.id == item.id){
                const updatedItem = {
                    ...itemlista,
                    open: true
                }
                return updatedItem
            }
            return itemlista
        })
        setDates(newListData)
    }

    function closeModal(item){
        const newListData = dates.map((itemlista) =>
        {
            if (itemlista.id == item.id){
                const updatedItem = {
                    ...itemlista,
                    open: false
                }
                return updatedItem
            }
            return itemlista
        })
        setDates(newListData)
    }

    function alterDate(item, date){
        const newListData = dates.map((itemlista) =>
        {
            if (itemlista.id == item.id){
                const updatedItem = {
                    ...itemlista,
                    data: date,
                    open: false
                }
                return updatedItem
            }
            return itemlista
        })

        setDates(newListData)
    }

    function adddata(){
        const newlist = dates;
        newlist.push({id: newlist.length + 1, data: new Date(), open: false })
        setDates(newlist)
        setExtraData(new Date())
    }

 return (
   <SafeAreaView style={Styles.container}>
       <View style={Styles.areaCliente}>
        <Text style={Styles.txtareaCliente}>CNPJ</Text>
        <Text style={Styles.txtresultParceiro}>02.546.870/0001-70</Text>
        <Text style={Styles.txtareaCliente}>Parceiro</Text>
        <Text style={Styles.txtresultParceiro}>José Farofa</Text>
       </View>
       <View style={Styles.areaDetalhes}>
            <FlatList
            data={dates}
            extraData={dates}
            style={{width: '100%'}} 
            renderItem={({item}) =>
                <View style={{ alignItems: 'center'}}>
                    <View style={Styles.areaData}>
                        <Text style={Styles.titulodata}>Data da {item.id}º Visita :</Text>
                        <TouchableOpacity style={Styles.button} onPress={() => openModal(item)}>
                            <Text style={Styles.data}>{moment(item.data).format('DD/MM/YYYY [as] H:mm')}</Text>
                        </TouchableOpacity>
                    </View>
                    <DatePicker modal
                                title='Selecione uma Data'
                                open={item.open}     
                                onConfirm={(date) => {
                                    alterDate(item, date)
                                }}
                                onCancel={() => {
                                    closeModal(item)
                                }} 
                                date={item.data} 
                                minuteInterval={10} 
                                locale={'pt-br'} 
                                is24hourSource={'device'} />
                </View>
        
            }
            ListFooterComponent={
            <View style={Styles.footer}>  
                <TouchableOpacity style={Styles.button} onPress={() => adddata()}>
                    <Text style={Styles.texto}>Adicionar nova data</Text>
                </TouchableOpacity>
                

                <View style={Styles.areaTags}>
                    <Text>Tags</Text>
                </View>
                
                <View style={Styles.AreaBTN}>
                <TouchableOpacity style={Styles.btnCheckList} onPress={() => console.log(dates)}>
                    <Text style={Styles.txtCheckList}>Finalizar Visita</Text>
                </TouchableOpacity>
                </View>
            </View>


            }
            />
           
           
           
           
           
           {/* <View>
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
                        is24hourSource={'device'} /> */}
            {/* <View style={Styles.areaPicker}>
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
            </View> */}
       </View>
   </SafeAreaView>
  );
}