import { MainCalandarView } from "./MainCalanderView"

export const MainContentView = () => {
    return(
        <div style={{
            flex:0.9,
            border:'1px solid black',
            boxSizing:"content-box",
            padding:40,
            display:"flex",
            flexDirection:"row",
        }}>
            <div style={{
                display:"flex",
                flex:0.7,border:'1px solid black'}}>
            
            <MainCalandarView/>
            </div>
            <div style={{ display:"flex",flex:0.3,border:'1px solid black'}}>
            
            </div>
           
        </div>
    )
}