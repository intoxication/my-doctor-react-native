import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts, colors } from '../../../utils'


const IsMe = ({text, date}) => {
    return (
        <View style={styles.container}>
        <View style={styles.chatContent}>
            <Text style={styles.text}>{text}</Text>
        </View>

        <Text style={styles.date}>{date}</Text>
    </View>
    )
}

export default IsMe

const styles = StyleSheet.create({
    container: {
        marginBottom:5,
        alignItems: 'flex-end',
        paddingRight:16
    },
    chatContent: {
        padding: 12,
        paddingRight: 18,
        backgroundColor: colors.cardLight,
        maxWidth: '70%',
        borderRadius:10,
        borderBottomRightRadius: 0,
    },
    text: {
        fontSize:16, fontFamily: fonts.primary[500],
        color: colors.text.primary,

    },
    date: {
        fontSize:10, fontFamily: fonts.primary[500],
        color: colors.text.secondary, marginTop:2
    }
})
