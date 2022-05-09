import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, Modal, TouchableWithoutFeedback, TextInput, KeyboardAvoidingView } from 'react-native';
import Styles from './styles';
import DatePicker from 'react-native-date-picker'
import { ColorPicker, Tag } from "react-native-btr";
import moment from 'moment';
import Loading from '../../components/Loading';
import * as TagAction from '../../store/modules/tags/actions'
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import 'moment/locale/pt-br'


export default function NewVisitaDate() {

    
    const carregado = useSelector(state => state.Tags.carregado)
    const agenteId = useSelector(state => state.Auth.user.id)
    const isloading = useSelector(state => state.Tags.isloading)
    const erro = useSelector(state => state.Tags.erro)
    const dispatch = useDispatch()
    const ListaTags = useSelector(state => state.Tags.tags)
    const TagAdicionado = useSelector(state => state.Tags.tagAdicionado)
    


    const [selectedColor, setSelectedColor] = useState("");
  function setColor(color) {
    setSelectedColor(color);
  }

  const [textTag, setTextTag] = useState("");



    useEffect(()=>{
        if(!carregado){
            dispatch(TagAction.TagsCarregarRequest({agenteId}))
        }
        if(erro){
            console.warn("deu erro")
        }
        if(TagAdicionado.id){
            console.log("CaiuAqui")
            addTag(TagAdicionado);
            dispatch(TagAction.removeAdicionado())
            dispatch(TagAction.TagsCarregarRequest({agenteId}))
        }    
    })


    const listaDatasInitial = [{ id: 1, data: new Date(), open: false }]
    const [dates, setDates] = useState(listaDatasInitial)
    const [extraData, setExtraData] = useState('')
    const listaTagsInitial = [
        { id: '1', nome: 'Teste', cor: '#FF2244' },
        { id: '2', nome: 'Teste2', cor: '#22EE99' },
        { id: '3', nome: 'Teste32', cor: '#99FF66' }
    ]

    const [ShowModal, setShowModal] = useState(false)
    const [tags, setTags] = useState(listaTagsInitial)
    const [novaTags, setNovaTags] = useState(false)

    let ultimotap = null;
    const doubletap = (item) => {
        const now = Date.now();
        const DELAY = 300;
        if (ultimotap && (now - ultimotap) < DELAY) {
            excluir(item)
        } else {
            ultimotap = now;
        }
    }

    function excluir(item) {
        const listatags = tags.filter((itemLista) => itemLista.id !== item.id)
        console.log(listatags)
        setTags(listatags)

    }

    function addTag(item) {
        let existe = false
        const newlist = tags.map((itemlista) => {
            if(itemlista.id == item.id){
                existe = true;
            }
            return itemlista
        });
        if(!existe){
            newlist.push(item)
        }
        setTags(newlist)
        setExtraData(new Date())
        setShowModal(!ShowModal)

        if(novaTags == true){
            setNovaTags(!novaTags)
            setTextTag("")
            setColor("")
        }

    }

    function CriatTag(item){
        const NovaTag = {agenteId: agenteId, ...item}
        dispatch(TagAction.TagsAddTagRequest(NovaTag));
    }


    function openModal(item) {
        const newListData = dates.map((itemlista) => {
            if (itemlista.id == item.id) {
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

    function closeModal(item) {
        const newListData = dates.map((itemlista) => {
            if (itemlista.id == item.id) {
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

    function alterDate(item, date) {
        const newListData = dates.map((itemlista) => {
            if (itemlista.id == item.id) {
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

    function adddata() {
        const newlist = dates;
        newlist.push({ id: newlist.length + 1, data: new Date(), open: false })
        setDates(newlist)
        setExtraData(new Date())
    }

    return (
        <SafeAreaView style={Styles.container}>
            <Loading Loading={isloading}/>
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
                    style={{ width: '100%' }}
                    renderItem={({ item }) =>
                        <View>
                            <View style={Styles.areaData}>
                                <Text style={Styles.titulodata}>Data da {item.id}º Visita :</Text>
                                <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
                                    <TouchableOpacity style={Styles.button} onPress={() => openModal(item)}>
                                        <Text style={Styles.data}>{moment(item.data).format('DD/MM/YYYY [as] H:mm')}</Text>
                                    </TouchableOpacity>



                                </View>
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
                                <View style={Styles.tags}>
                                    <FlatList
                                        data={tags}
                                        extraData={tags}
                                        style={{ flexDirection: "row", flexWrap: "wrap" }}
                                        renderItem={({ item }) =>
                                            <TouchableOpacity style={[{ backgroundColor: item.cor }, Styles.tag]} onPress={() => doubletap(item)}>
                                                <Text style={{ color: "#000" }}>{item.nome}</Text>
                                            </TouchableOpacity>
                                        }

                                    />
                                </View>
                                <TouchableOpacity style={Styles.addTag} onPress={() => setShowModal(!ShowModal)} >
                                    <Icon name="add-circle" size={45} style={{ alignSelf: "center" }} />
                                </TouchableOpacity>

                                <Modal
                                    animationType="fade"
                                    transparent={true}
                                    visible={ShowModal}
                                    onRequestClose={() => { setShowModal(!ShowModal) }}
                                >
                                    <TouchableOpacity style={Styles.fundoModal} activeOpacity={1} onPressOut={() => setShowModal(!ShowModal)}>
                                        <TouchableWithoutFeedback>
                                            <View style={Styles.areaModal}>
                                                <View style={Styles.ModalTitulo}>
                                                    <Text style={Styles.Titulo}>Adicionar Tags</Text>
                                                </View>
                                                <View style={Styles.ModalCorpo}>
                                                    <Text style={Styles.textTags}>Tags Existentes</Text>

                                                    <FlatList
                                                        data={ListaTags}
                                                        extraData={ListaTags}
                                                        style={Styles.listaTags}
                                                        renderItem={({ item }) =>
                                                            <TouchableOpacity style={[{ backgroundColor: item.cor }, Styles.tag]} onPress={() => addTag(item)}>
                                                                <Text style={{ color: "#000" }}>{item.nome}</Text>
                                                            </TouchableOpacity>
                                                        }

                                                    />

                                                    <TouchableOpacity style={Styles.btnaddTags} onPress={() => setNovaTags(!novaTags)}>
                                                        <Text style={Styles.txtCheckList}>Criar uma nova Tag</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </TouchableWithoutFeedback>

                                        <TouchableWithoutFeedback>
                                            <View style={novaTags ? Styles.areaModalNovaTag : { display: "none" }}>
                                                <View style={Styles.ModalTitulo}>
                                                    <Text style={Styles.Titulo}>Criar nova Tags Tags</Text>
                                                </View>
                                                <View style={Styles.ModalCorpo}>
                                                    <Text style={Styles.textTags}>Nome da Tag:</Text>
                                                    <TextInput style={Styles.input} onChangeText={setTextTag} />
                                                    <ColorPicker selectedColor={selectedColor} onSelect={setColor} />
                                                    <View style={{marginTop:15}}>
                                                        <TouchableOpacity style={[{ backgroundColor: selectedColor }, Styles.tag]}>
                                                            <Text style={{ color: "#000" }}>{textTag}</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <TouchableOpacity style={Styles.btnaddTags} onPress={() => CriatTag({nome:textTag, cor: selectedColor})}>
                                                        <Text style={Styles.txtCheckList}>Adicionar Tag</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </TouchableWithoutFeedback>

                                    </TouchableOpacity>
                                </Modal>
                            </View>

                            <View style={Styles.AreaBTN}>
                                <TouchableOpacity style={Styles.btnCheckList} onPress={() => console.log(dates)}>
                                    <Text style={Styles.txtCheckList}>Finalizar Visita</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                />
            </View>
        </SafeAreaView>
    );
}