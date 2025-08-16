import { View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

export default function Login () {

    return(
        <View>

            <CustomInput title="Correo Electronico" value="hola" type="email" onChange={()=>{}}  />
            <CustomInput title="contraseña" value="1234565" type="password" onChange={()=>{}}  />

            <CustomButton title="Iniciar Sesion"onPress={()=>{}} />
            
            <CustomButton title="Registrarme" onPress={()=>{}} variant="secondary"/>
            
            <CustomButton title="Olvide mi contraseña" onPress={()=>{}} variant="tertiary"/>
        </View>
    );
}