import styled from "styled-components"
import { Header } from "../../components/Header"
import { MainContentView } from "./MainContentView"

const MediaDiv = styled.div<{index?:number}>`
border:1px solid black;
height:30px;
    @media (min-width:320px){
        width:100%;
    }
    @media (min-width:768px){
        width:${(props) => props.index==5?'100%':'50%'};
    }
    @media (min-width:1024px){
        width:20%;
    }
`
export const Main = () =>{
    return(
            <div style={{display:"inline-block",width:'90%'}}>
                
                <MediaDiv index={1}/>
                <MediaDiv index= {2}/>
                <MediaDiv index={3}/>
                <MediaDiv index={4}/>
                <MediaDiv index={5}/>
            </div>
            // <div style={{
            //     border: '1px solid black',
            //     display:'flex',
            //     flex:1,
            //     width:'100%',
            //     height:'100vh',
            //     flexDirection:'column',
            //     padding:30
            //     }}>
            //         <Header/>
            //         <MainContentView/>
                    
            // </div>
    )

}