import { StyleSheet, View, SafeAreaView, StatusBar, Platform, ImageBackground, ScrollView ,Pressable, Image} from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { spacing } from '../theme/spacing'
import { colors } from '../theme/colors'

const ProductItem = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./../../assets/images/Media.png')} resizeMode="cover" style={[styles.image,{ height:330 }]}>
            <ScrollView >
                <View style={styles.productDescription}>
                  <Text preset='h2'>Boston Lettuce</Text>
                    <View>
                        <View style={{flexDirection:'row',alignItems:'center',marginVertical:spacing[2]}}>
                            <Text preset='h1'>1.10</Text>
                            <Text >€ / piece</Text>
                        </View>
                        <View style={{marginButton: 'spacing[4]'}}>
                            <Text style={{color : colors.primaryColor , }}>~ 150 gr / piece</Text>
                        </View>
                        <View >
                            <Text preset='h4' style={{marginVertical: spacing[4]}}>Spain</Text>
                            <Text style={{lineHeight: 25,color:'#9586A8'}}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center', marginVertical: spacing[4]}}>
                            <View style={{width:78,height:56,borderRadius:8,backgroundColor:'#D9D0E3',justifyContent:'center',alignItems:'center'}}>
                            <Image  source={require('./../../assets/images/Vector.png')} />
                            </View>
                            <Pressable onPress={()=>{
                                navigation.navigate('Home')
                            }} style={styles.orderButton}>
                                <Text preset='h4' style={{textAlign:'center',color: 'white'}}>ADD TO CART</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>

            </ScrollView>
      </ImageBackground>
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        // paddingTop :Platform.OS === "android" ? StatusBar.currentHeight:0,
        
    },
    image:{
        flex:1,
        // justifyContent: 'center',
    },
    productDescription:{
        flex:1,
        borderTopEndRadius: spacing[4],
        borderTopLeftRadius: spacing[4],
        backgroundColor: 'white',
        marginTop: 311,
        padding: spacing[5]
        
    },
    orderButton:{
        flex:1,
        backgroundColor: colors.secondaryColor,
        // width: 250,
        marginLeft: spacing[2],
        height: 56,
        alignContent:'center',
        justifyContent:'center',
        borderRadius: spacing[2],
        marginBottom: spacing[2]
      },
})