import { colors } from "../../color/colors"

export const SignTitle = ({title}:any) => {
    return(
        <div style={{
            flex:0.2,
            alignContent:"center",
            textAlign:"center",
            backgroundColor:colors.BUTTON_SIGNUP,
            borderTopLeftRadius:25,
            borderTopRightRadius:25,
            }}>
            <h2 style={{color:"white"}}>{title}</h2>
        </div>
    )
}