import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import Card from '../Components/Card'
import newAPI from '../apis/api'

const GetDataScreen = () => {
    const [device, setDevice] = useState([]);

    useEffect(() => {
        getDataFromAPI()
    }, [])

    function getDataFromAPI() {
        newAPI.get('gets')
            .then(async function (response) {
                setDevice(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    if (!device) {
        return null
    }
    return (
      
        <View style={{flex:1}}>
        <Text></Text> 
            <FlatList data={device}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return <Card item = {item}/>
                }}
            />
           
        </View>
    )
}

export default GetDataScreen