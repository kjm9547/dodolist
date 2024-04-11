import { useState } from "react"
import { colors } from "../color/colors"

export const Header = () => {
    const [keyWord, setKeyWord] = useState('')
    return (
        <div style={{
            width: '100%',
            flex: 0.1,
            display: 'flex',
            justifyContent: "center",
            flexDirection: "row",}}>
            <div style={{
                width: '30vh',
                display: 'flex',
                flex: 0.2}}>
                {/* logo section */}
                <h2>DoDo List</h2>
            </div>
            <div style={{
                display: 'flex',
                flex: 0.5,
                alignItems:"center"
                }}>
                {/* search section */}
                <div style={{
                    flex: 0.9,
                    height: '7vh',
                    borderRadius: 25,
                    display: "flex"}}>
                    <input style={{
                        flex: 1,
                        borderRadius: 25,
                        border:'0.3px solid black',
                        backgroundColor: colors.BACKGROUND_LIGHTGRAY}}
                        value={keyWord}
                        onChange={(e) => { setKeyWord(e.target.value) }}/>
                </div>
            </div >
            <div style={{
                display: 'flex',
                flex: 0.3,
                alignItems:"center"
                }}>
                {/* icon section */}
                icon
            </div>
        </div>
    )
}