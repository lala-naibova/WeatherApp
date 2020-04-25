import React from 'react';
import { StyleSheet } from 'react-native'
import { Card, Title } from 'react-native-paper';

const MyCard = (props) => {
    return (
            <Card style={styles.root} onPress={props.onPress}>
                <Title>{props.name}</Title>
            </Card>
    );
}

const styles= StyleSheet.create({
    root:{
        marginVertical:5,
        marginHorizontal:10,
        padding:12
    }
})

export default MyCard;
