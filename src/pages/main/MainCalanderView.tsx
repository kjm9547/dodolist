import React, { useEffect, useState } from "react"
import { useCalendar } from "../../hooks/useCalendar"
import dayjs from "dayjs"

  
export const MainCalandarView = () => {
    const now = dayjs()
    //day
    const {
        showDayJs,
        getCalendarColumns,
        dayOfWeek
    } = useCalendar()
    const [calendar,setCalendar] = useState(getCalendarColumns(now))
    useEffect(()=>{
        console.log(calendar)
    },[])

    const CalendarDayBox = ({value,index}:any) =>{
        console.log(value)
        return(
<div>
                        test
                        </div>
        )
    }
    
    return(
        <div style={{border:'1px solid black'}}>
            <div style={{
                display:"flex",
                flexDirection:"row"}}>
                {
                    dayOfWeek.map((value,index)=>{
                        return(
                            <div style={{
                                border:'1px solid black'
                            }}>{value}</div>
                        )
                    })
                }
            </div>
            {calendar.map((value:any,index:any)=>{
                return(
                    <CalendarDayBox value={value} index={index}/>
                )
            })}
        </div>
    )
}