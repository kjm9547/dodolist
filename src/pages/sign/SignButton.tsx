import { colors } from "../../color/colors"

export const SignButton = ({title,onPressClick}:any) => {
    return(
        <div style={{
            
            textAlign:"center"
        }}>
            <button 
                style={{
                    width:150,
                    height:45,
                    backgroundColor:colors.BUTTON_SIGNUP,
                    borderRadius:20,
                    color:'white',
                    fontSize:16,
                    fontWeight:'bold',
                    borderWidth:0,
                    marginTop:15
                    }}
             onClick={onPressClick}>
                {title}
            </button>
        </div>
        
    )
}