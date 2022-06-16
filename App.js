import React from 'react';
import {View, Text,TouchableOpacity,Image,TextInput} from 'react-native';

 


import abc from './Style'

export default function App()
{
return(
    <View style={abc.screen}>
  
    <View style={abc.header}>
      
    
    <TouchableOpacity  style={abc.touchable}>
  <Image style={abc.icon}  source={require('./assets/arrow.png')}></Image>
       
       <Image style={abc.img} source={{uri:'https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg'}}></Image>
    <View>
    <Text style={abc.name}>Sebastian Rudigar</Text>
    <Text style={abc.status}>Online</Text>
    </View>
    <Image  style={abc.vicon} source={require('./assets/video-camera.png')}></Image>
    <Image  style={abc.cicon} source={require('./assets/telephone.png')}></Image>
    </TouchableOpacity>

    </View>

    <View style={abc.second}>
<View style={abc.jimmy1}>
        <Text style={abc.jimy}>Hi, Jimmy ! any update today ? </Text>
        <Text style={abc.time}>09:32PM</Text>
       
        </View>
       <View style={abc.allgud}>
       <Text style={abc.allgood}>All good we have some update</Text>
       
       </View>

       <View style={abc.here}>
        <Image style={abc.webimage} source={{uri:"https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-22/1f2a22f0-4436-11eb-9464-2d5d786d4eea.png"}} ></Image>
       <Text style={abc.heretext}>Here's the New landing page design !</Text>
       <Text style={abc.link} >https://www.figma.com/</Text>
       <Text style={abc.time2}>09:34PM</Text>
       
       </View>
       <View>
       <Text style={abc.cool}>Cool! i have some feedback on the "How It Work Section".but overall looks good now</Text>
       <Text style={abc.time}>09:35PM</Text>
       <View style={abc.perfect}>
       <Text style={abc.per}>Perfect Will Check It</Text>
       <Text style={abc.time3}>09:34PM</Text>
       </View>
       </View>

    </View>
    <View style={abc.footer}>
        <TextInput style={abc.txtinput} placeholder='Type Here'></TextInput>
        <Image  style={abc.dicon} source={require('./assets/empty-folder.png')}></Image>
        <Image  style={abc.cricon} source={require('./assets/camera.png')}></Image>
    </View>

    </View>
  
)
}
