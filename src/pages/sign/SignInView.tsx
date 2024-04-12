import React from "react"

import { SignTitle } from "./SignTitle";

import { colors } from "../../color/colors";
import { SignInBody } from "./SignInBody";
export const SignInView = () => {
    return(
        <div style={{
            display:"flex",
            border:'1px solid black',
            height: '100vh',
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:colors.LANDING_BACK_COLOR
        }}>
              {/* <div style={{
                display: 'flex',
                width: 300,
                height: '45vh',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundImage: 'url(/assets/background.gif)',
            }}/> */}
            <div style={{
                minWidth:500,
                height:'60vh',
                display:"flex",
                flexDirection:'column',
                backgroundColor:colors.DEFAULT_IOS_BACKGROUND,
                
                borderRadius:35
                }}>
                <SignTitle title = "로그인"/>
                <SignInBody/>
            </div>
        </div>
    )
}