import React, { useState } from "react";
import { StyleSheet, ImageBackground, View, Icon, Text, Image,TouchableOpacity, TextInput,Alert } from 'react-native';
import Colors from '../../constants/colors';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; //<Ionicons name="eye-outline" size={24} color="Colors.primary" />
import { useForm,Controller } from 'react-hook-form';

//const initialStateUser = { username: '', password: '' };

export default function LoginScreen() {
const [hidePassword, setHidePassword] = useState(true);
const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      userName: '',
      password: ''
    }
  });

const onSubmit = data =>{
Alert.alert(
      "Error Massage",
      "Wrong password or login!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
      ],
       {
          cancelable: true,
       }
    );
    console.log(data);
}


  return (
    <View style={styles.container}>
       <View style={styles.containerMain}>
            <Image style={styles.imageLogo} source={require("../../assets/images/logo.jpg")}/>
            <Text style={styles.textLogo}>ZibdyHealth</Text>
            <View style={styles.inputContainer}>
               <Text style={styles.inputTitle}>User Name</Text>
               <Controller control={control} rules={{ required: true, minLength: 2}}
                   render={({ field: { onChange, onBlur, value } }) => (
                   <View style={{flexDirection: 'row',alignItems: "center"}}>
                    <AntDesign name="user" size={20} color="black" style={styles.iconLeft} />
                     <TextInput
                       style={styles.input}
                       onBlur={onBlur}
                       onChangeText={onChange}
                       value={value}
                       placeholder="Enter User Name"
                     />
                     </View>
                   )}
                   name="userName"
               />
               <View style={{height:18}}>
                   {errors.userName && errors.userName.type==='required' && <Text style={styles.textError}>User Name is required!</Text>}
                   {errors.userName && errors.userName.type==='minLength' && <Text style={styles.textError}>User Name must have more than 1 character!</Text>}
               </View>
            </View>
            <View style={styles.inputContainer}>
               <Text style={styles.inputTitle}>Password</Text>
               <Controller control={control} rules={{required: true,  minLength: 6}}
                       render={({ field: { onChange, onBlur, value } }) => (
                         <View style= {{flexDirection: 'row',alignItems: "center"}}>
                             <MaterialIcons name="lock" size={20} color="black" style={styles.iconLeft} />
                             <TextInput
                               style={styles.input}
                               placeholder="Enter Password"
                               secureTextEntry={hidePassword ? true : false}
                               onBlur={onBlur}
                               onChangeText={onChange}
                               value={value}
                           />
                            <Ionicons name={hidePassword ? 'eye-off-outline' : 'eye-outline'} size={26} color={hidePassword ? "gray" : '#1890ff'} style={styles.iconRight} onPress={() => setHidePassword(!hidePassword)} />
                         </View>
                       )}
                       name="password"
                     />
                     <View style={{height:18}}>
                         {errors.password && errors.password.type === "required" && <Text style={styles.textError}>Password is required!</Text>}
                         {errors.password && errors.password.type === "minLength" && <Text style={styles.textError}>Password must have more than 5 characters!</Text>}
                     </View>
            </View>
            <TouchableOpacity  activeOpacity={0.5} style={styles.btn} onPress={handleSubmit(onSubmit)}>
                   <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.forgotContainer}>
                <Text style={{...styles.btnTextBlue, color:"black",}}>Forgot </Text>
                <TouchableOpacity  activeOpacity={0.5} >
                    <Text style={styles.btnTextBlue}>Password </Text>
                </TouchableOpacity>
                <Text style={{...styles.btnTextBlue, color:"black"}}>or </Text>
                <TouchableOpacity  activeOpacity={0.5} >
                     <Text style={styles.btnTextBlue}>Username</Text>
                </TouchableOpacity>
                <Text style={{...styles.btnTextBlue, color:"black"}}>?</Text>
            </View>
            <Text style={styles.textNotMember}>Not a Member? </Text>
            <TouchableOpacity  activeOpacity={0.5} style={styles.btnSignup}>
                <Text style={styles.btnSignupText}>Signup</Text>
            </TouchableOpacity>
       </View>
       <View style={styles.containerBottom}>
           <TouchableOpacity  activeOpacity={0.5} style={styles.btnBottom}>
               <Text style={styles.linkBottom}>Scan Med Barcode</Text>
           </TouchableOpacity>
           <TouchableOpacity  activeOpacity={0.5} style={styles.btnBottom}>
               <Text style={styles.linkBottom}>Tutorial</Text>
           </TouchableOpacity>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGreen,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  containerMain:{
   flexGrow: 1,
   //flex:1,
   alignItems: "center",
   justifyContent: "center",
   width:'90%',
   marginTop:50,
  },
  containerBottom:{
    flexDirection: 'row',
    justifyContent: "space-between",
    width: '90%',
  },
  inputContainer: {
    width: '100%',
  },
  inputTitle:{
    fontSize: 20,
    marginBottom: 3
  },
  iconLeft: {
    padding: 10,
    marginRight:-40,
    zIndex: 99,
  },
  iconRight:{
    //padding: 10,
    marginLeft:-40,
    zIndex: 99,
  },
  input: {
     width: "100%",
     borderWidth: 1,
     height: 40,
     borderRadius: 10,
     borderColor: "#DCDCDC",
     paddingHorizontal: 40,
     backgroundColor: "white",
  },
  imageLogo: {
    width: 110,
    height: 110,
  },
  textLogo: {
    color: Colors.logo,
    fontFamily: "OpenSansBold",
    fontSize: 30,
  },
  btnContainer:{
    alignItems: "center",
    width:'100%',
  },
  btn: {
    backgroundColor: Colors.primary,
    borderRadius: 30,
    width: "100%",
    padding: 8,
    alignItems: "center",
    marginTop: 20,
  },
  btnText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  btnTextBlue: {
    color: Colors.primary,
    fontSize: 16,
  },
  linkBottom:{
    color: "#B2725C",
    fontSize: 16,
  },
  forgotContainer:{
   flexDirection: 'row',
   marginTop:5,
  },
  btnSignup:{
    backgroundColor: Colors.primary,
    borderRadius: 30,
    padding: 8,
    alignItems: "center",
    marginTop:5
  },
  btnSignupText:{
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal:10,
  },
  textNotMember:{
    color:'black',
    fontSize:20,
    marginTop:15
  },
  btnBottom:{
    paddingVertical:15,
  },
  textError:{
    color: 'red',

  },
});
