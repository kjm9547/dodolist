import { colors } from "../../color/colors"

type props = {
    title:string,
    text:string,
    setText:React.Dispatch<React.SetStateAction<string>>
}
export const SignInput = ({
    title,
    text,
    setText
}:props) => {
    const onChangeText = (e:any) => {
        setText(e.target.value)
    }
    return(
        <div style={{
            height:'6vh',
            
            alignContent:"center",
            color:colors.BUTTON_SIGNUP,
            fontWeight:"bold",
            display:"flex",
            flexDirection:'row',
            alignItems:"center",
            justifyContent:"center",
            }}>
                <div style={{flex:0.3}}>{title}</div>
            
            <input
                style={{
                    height:35,
                    width:200,
                    borderRadius:15,
                    border:`0.4px solid ${colors.BACKGROUND_LIGHTGRAY}`,
                    marginLeft:10
                }}
                value={text} 
                onChange={(e)=>{onChangeText(e)}}></input>
        </div>
    )
}