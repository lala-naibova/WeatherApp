import * as React from 'react';
import { Appbar, Title } from 'react-native-paper';
import {StyleSheet} from 'react-native'

export default  Header =(props)=> {
  // (
  //   <LinearGradient
  //     colors={['#a13388', '#10356c']}
  //     style={{ flex: 1 }}
  //     start={{x: 0, y: 0}}
  //     end={{x: 1, y: 0}}
  //   />
  // )
    return (
      <Appbar.Header style={styles.root}>
          <Title style={styles.text}>{props.title}</Title>
      </Appbar.Header>
    );
  }
const styles= StyleSheet.create({
  root:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color:'white'
  }
})