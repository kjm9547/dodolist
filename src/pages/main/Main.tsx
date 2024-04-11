import styled from "styled-components"
import { Header } from "../../components/Header"
import { MainContentView } from "./MainContentView"


export const Main = () =>{
    return(
            
            <div style={{
                border: '1px solid black',
                display:'flex',
                flex:1,
                width:'100%',
                height:'100vh',
                flexDirection:'column',
                padding:30
                }}>
                    <Header/>
                    <MainContentView/>
                    
            </div>
    )

}