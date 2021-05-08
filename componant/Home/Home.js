import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Card } from 'react-native-elements'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { Image } from 'react-native-elements/dist/image/Image'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const Home = () => {
    return (
        <View style={{ backgroundColor: "#fff", height: '100%', display: 'flex', flexDirection: "row", justifyContent: 'center' }}>
            <View style={styles.productView}>
                <Text style={styles.foodName}>Food Name</Text>
                <Image
                    style={{ height: 300, borderRadius: 15 }}
                    source={require('../../assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg')}
                />
                <Text style={styles.descriptionTitle}>Food Description</Text>
                <Text style={styles.description}>of the printing and typesetting industry. Lorem
                    Ipsum has been the</Text>
                <View style={styles.ratingAndQuantity}>
                    <Text>250 gm | 25 cal</Text>
                    <View style={styles.rating}>
                        <Icon name="star" color='#FFC107'></Icon>
                        <Icon name="star" color='#FFC107'></Icon>
                        <Icon name="star" color='#FFC107'></Icon>
                        <Icon name="star" color='#FFC107'></Icon>
                        <Icon name="star" color='#FFC107'></Icon>
                        <Text>4.5</Text>
                    </View>
                </View>
                <View style={styles.ratingAndQuantity}>
                    <View style={styles.quantity}>
                        <TouchableOpacity style={styles.inDeBtn}>
                            <Text style={{ color: 'blue' }}>+</Text>
                        </TouchableOpacity>
                        <TextInput
                            style={styles.input}
                            defaultValue={0}
                            placeholder=""
                            keyboardType="numeric"
                        />
                        <TouchableOpacity style={styles.inDeBtn}>
                            <Text style={{ color: 'blue' }}>-</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rating}>
                        <Text>$50.00</Text>
                    </View>
                </View>
                <Button
                    title="Add To Cart"
                    color="green"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View >
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    productView: {
        width: "95%",
        margin: "0px auto"
    },
    foodName: {
        fontSize: 30,
        marginVertical: 10
    },
    rating: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    ratingAndQuantity: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10
    },
    description: {
        fontSize: 20,
        marginVertical: 10
    },
    descriptionTitle: {
        fontSize: 25,
        marginBottom: 5
    },
    inDeBtn: {
        border: "1px solid blue",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    input: {
        width: 30,
        textAlign: 'center'
    },
    quantity: {
        display: 'flex',
        flexDirection: "row"
    }
})
