import { useNavigate } from "react-router-dom"
import { SignInput } from "./SignInput";
import { useState } from "react";
import { SignButton } from "./SignButton";
export const SignUpBody = () => {
    const navigate = useNavigate();
    const onPressClick =() => {
        navigate("/")
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
                title="사용자 이름"
                text={pwText}
                setText={setPwText}/>
            <SignInput
                title="나이"
                text={pwText}
                setText={setPwText}/>
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
                 title ="완료"
                onPressClick={onPressClick}/>
               
            
        </div>
    )
}