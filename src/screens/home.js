import { StyleSheet, View,SafeAreaView,StatusBar,Platform,Image , ScrollView, Pressable} from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import Text from '../components/text/text'
import { spacing } from '../theme/spacing'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Image  source={require('./../../assets/images/LOGO.png')} />
      </View>
        <ScrollView style={styles.splash}>
          <View style={styles.splashBody}>
            <View style={styles.boxStyle}>
              <Image style={{width: 104,height:104}}  source={require('./../../assets/images/box.png')} />

              <Text preset='h1' style={{textAlign:'center'}}>Non-Contact Deliveries</Text>
            </View>

            <View style={{marginVertical: spacing[5]}}>
              <Text style={{color:'#9586A8', lineHeight:25,textAlign:'center'}}>When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.</Text>
            </View>

            <View>
              <Pressable 
               onPress={()=>{
                 navigation.navigate('Item')
               }}
              style={styles.orderButton}>
                <Text preset='h4' style={{textAlign:'center',color: 'white'}}>ORDER NOW</Text>
              </Pressable>
              
              <Pressable onPress={()=>{
                // navigation.navigate('Item')
                navigation.goBack();
              }} style={styles.dismissButton}>
                <Text preset='h4' style={{textAlign: 'center', color:'#9586A8'}}>DISMISS</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        // position:'absolute',
        paddingTop :Platform.OS === "android" ? StatusBar.currentHeight:0,
        backgroundColor: colors.primaryColor,
        // height: 312,
        // borderBottomLeftRadius: ' 4px 2px',
        // borderBottomEndRadius:spacing[5],
      
    },
    splash:{
      backgroundColor: 'white',
      borderTopRightRadius: spacing[5],
      borderTopLeftRadius: spacing[5],
      marginTop: 150
    },
    splashBody:{
      padding: spacing[5]
    },
    boxStyle:{
      alignItems:'center'
    },
    orderButton:{
      backgroundColor: colors.secondaryColor,
      height: 56,
      alignContent:'center',
      justifyContent:'center',
      borderRadius: spacing[2],
      marginBottom: spacing[2]
    },
    dismissButton:{
      // backgroundColor: colors.secondaryColor,
      height: 56,
      alignContent:'center',
      justifyContent:'center',
      borderRadius: spacing[2]
    }
})