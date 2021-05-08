import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from 'react-native-elements'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { TextInput } from 'react-native-gesture-handler'

const TopBer = () => {
    return (
        <Header
            containerStyle={{
                backgroundColor: '#fff',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}
            leftComponent={{ icon: 'arrow-back', color: 'blue' }}
            centerComponent={
                <View style={styles.SearchBar}>
                    <Icon overflow="visible" name="search" />
                    <TextInput
                        style={styles.input}
                        placeholder="Type here"
                        keyboardType="text"
                    />
                </View>}
        />
    )
}

export default TopBer

const styles = StyleSheet.create({
    SearchBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eeeef0',
        paddingLeft: 5,
        borderRadius: 15,
        width: '100%'
    },
    input: {
        width: '100%',
        height: 10,
        backgroundColor: '#eeeef0',
        color: 'black',
        paddingVertical: 20,
        borderRadius: 15,
        paddingLeft: 10,
        fontSize: 20
    }
})
