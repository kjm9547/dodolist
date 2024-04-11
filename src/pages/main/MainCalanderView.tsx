import React, { useEffect, useState } from "react"
import { useCalendar } from "../../hooks/useCalendar"
import dayjs from "dayjs"

  
export const MainCalandarView = () => {
    const now = dayjs()
    //day
    const {
        showDayJs,
        getCalendarColumns,
        dayOfWeek,
        getDay,
        getYear,
        getMonth,
    } = useCalendar()
    const [calendar,setCalendar] = useState(getCalendarColumns(now))
    useEffect(()=>{
        // console.log(calendar)
    },[])
    const onPressDayBox = () => {
        
    }
    const CalendarDayBox = ({value,index}:any) =>{
        // console.log(value)
        if(value == null) {
            return(
                <div style={{
                    width:'150px',
                    border:'1px solid black',
                    height:'125px',
                }}/>
            )
        }
        else{
        return(
                <div style={{
                    width:'150px',
                    border:'1px solid black',
                    height:'125px',
                }}>{getDay(value)}</div>
        )
    }
    }
    
    return(
        <div style={{
            //border:'1px solid black',
            }}>
            <div style={{
                alignItems:"center",
                justifyContent:"center",
                display:'flex'}}>
            <h2 style={{width:'auto'}}>{getYear(now)}년 {getMonth(now)}월</h2>
            </div>
            
            <div style={{
                display:"flex",
                flexDirection:"row",
                }}>
                {
                    dayOfWeek.map((value,index)=>{
                        return(
                            <div 
                            key={index}
                            style={{
                                border:'1px solid black',
                                width:150,
                                height:'6vh'
                            }}>{value}</div>
                        )
                    })
                }
            </div>
            <div style={{
                display: 'grid',
                width:'0%',
                gridTemplateColumns: 'repeat(7, 1fr)',
                }}>
            {calendar.map((value:any,index:any)=>{
                return(
                    <CalendarDayBox value={value} index={index} key={index}/>
                )
            })}
            </div>
            
        </div>
    )
}