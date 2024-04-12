import { useNavigate } from "react-router-dom"
import { SignInput } from "./SignInput";
import { useState } from "react";
import { SignButton } from "./SignButton";
export const SignInBody = () => {
    const navigate = useNavigate();
    const onPressClick =() => {
        navigate("/main")
    }
    const [idText,setIdText] = useState('')
    const [pwText,setPwText] = useState('')
    return(
        <div style={{
            flex:0.8,
            alignContent:"center",
            alignItems:"center",
            
            }}>
           
            <SignInput 
                title="id"
                text={idText}
                setText={setIdText}
                />
            <SignInput
                title="pw"
                text={pwText}
                setText={setPwText}/>
             <SignButton 
                 title ="로그인"
                onPressClick={onPressClick}/>
               
            
        </div>
    )
}