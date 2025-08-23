import { View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
export default function Login (){

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    return(
        <View>
        
        <CustomInput title = "Correo Electronico"
        value={email}
        type="email"
        onChange={setemail}/>
        <CustomInput title = "Contraseñas"
        value={password} 
        type="password"
        onChange={setpassword}/>
        <CustomButton title="Iniciar Sesion"
        onPress={()=>{}}/>
        <CustomButton title= "Registrarme" 
        onPress ={()=>{}}variant={'secondary'}/>
       
        <CustomButton title= "Cambiar contraseña" 
        onPress ={()=>{}}variant={'tertiary'}/>
        
        </View>
    );
}