import { colors } from "../../color/colors"
import { MainCalandarView } from "./MainCalanderView"

export const MainContentView = () => {
    return(
        <div style={{
            flex:0.9,

            boxSizing:"content-box",
            padding:40,
            display:"flex",
            flexDirection:"row",
            backgroundColor:colors.BACKGROUND_LIGHTGRAY
        }}>
            <div style={{
                display:"flex",
                flexDirection:"column",
                flex:0.7,
                backgroundColor:'white',
                }}>
            <MainCalandarView/>
            </div>
            <div style={{ display:"flex",flex:0.3,backgroundColor:colors.ITEM_ARROW_GRAY}}>
            
            </div>
           
        </div>
    )
}