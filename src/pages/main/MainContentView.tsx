
export const MainContentView = () => {
    return(
        <div style={{
            flex:0.9,
            border:'1px solid black',
            boxSizing:"content-box",
            padding:40,
            display:"flex",
            flexDirection:"row"
        }}>
            <div style={{flex:0.7,border:'1px solid black'}}>
            <h2>메인 페이지입니다.</h2>
            </div>
            <div style={{flex:0.3,border:'1px solid black'}}>

            </div>
           
        </div>
    )
}