import React, { useState } from "react"
import styled from "styled-components"
import { Button } from "../../components/Button"
import backgroudGif from "../../../public/assets/background.gif"
import { colors } from "../../color/colors"
import { useNavigate } from "react-router-dom"
export const LandingView = () => {
    const navigate= useNavigate()
    const onPressSignIn= () => {
        navigate("/signin")
    }
    const onPressSignUp = () => {
        navigate("/signup")
    }
    const Button = ({
        title,
        width,
        height,
        onPressButton,
    }:any) => {
        const [color,setColor] = useState(title=="로그인"?'white':colors.LANDING_SIGNUP_BLACK) 
        const onMouseOverButton = () => {
            if(title == '로그인'){
                setColor(colors.BACKGROUND_LIGHTGRAY)
            }
            else{
                setColor(colors.LANDING_SIGNUP_BLACK_HOVER)
            }
        }
        const onMouseLeaveButton  = () =>{
            if(title == '로그인'){
                setColor('white')
            }
            else{
                setColor(colors.LANDING_SIGNUP_BLACK)
            }
        }
        return(
            <button
                onMouseOver={onMouseOverButton}
                onMouseLeave={onMouseLeaveButton}
                style={{
                    width:width,
                    height:height,
                    border:"0px",
                    borderRadius:width*0.4,
                    backgroundColor:color ,
                    color:title=="로그인"?colors.BUTTON_SIGNUP:"white",
                    fontSize:22,
                    fontWeight:'bold',
                    marginRight:5
                }}
                onClick={onPressButton}
                title={title}>{title}</button>
        )
    }
    return (
        <div style={{
            display: "flex",
            flex: 1,
            border: "1px solid black",
            height: '100vh',
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: colors.LANDING_BACK_COLOR}}>
            <div style={{
                display: 'flex',
                width: '50%',
                height: '45vh',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundImage: 'url(/assets/background.gif)',
                marginBottom: '-2vh'
            }}/>
            <div>
                <h2>두두리스트는 일정 관리 및 공유 플랫폼 입니다.</h2>
            </div>
            <div style={{
                display: 'flex',
                height: '15vh',
                width:"40%",
                flexDirection: 'row',
                alignItems: "center",
                justifyContent:"center",
                
            }}>
                <Button
                    title="로그인"
                    width={180}
                    height={70}
                    onPressButton={onPressSignIn}
                    />
                <Button
                    title="회원가입"
                    width={180}
                    height={70}
                    onPressButton={onPressSignUp}/>
            </div>
        </div>
    )

}