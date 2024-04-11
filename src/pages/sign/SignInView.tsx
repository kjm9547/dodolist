import React from "react"
import { useNavigate } from "react-router-dom"
export const SignView = () => {
    const navigate = useNavigate();
    const onPressClick =() => {
        navigate("/main")
    }
    return(
        <div style={{

        }}>
            seqweqwqw
            <button onClick={onPressClick}>
                로그인
            </button>
        </div>
    )
}