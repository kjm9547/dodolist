export const Button = ({
    title,
    width,
    height,
    onPressButton}:any) => {
    return(
        <button 
            style={{
                width:width,
                height:height,
                borderRadius:width*0.4
            }}
            onClick={onPressButton}
            title={title}>{title}</button>
    )
}