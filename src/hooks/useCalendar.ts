import dayjs from 'dayjs'

export const useCalendar = () =>{
   const dayOfWeek = ['일','월','화','수','목','금','토']
   const showDayJs = () =>{
    const now = dayjs()
    console.log(now)
    console.log(
        "1. set minute - hh",
        dayjs(now).format("YYYY.MM.DD hh:mm:ss a A"),
        dayjs(now).get('month')
    )
    console.log(
        dayjs(now).startOf('month').startOf('day').format('dd')
    )
   }
   const getCalendarColumns = (now:any) => {
    //now는 페이지에서 함수 호출시 현재 시간을 만들어 전달
    const start = dayjs(now).startOf('month')
    const end = dayjs(now).endOf('month')
    const endDate = dayjs(end).get('date') // 마지막 날의 값을 받아옴 31 30 29 28 얘네가 배열의 크기 결정

    //console.log(start,end,endDate)

    const columns = [];
    for(let i =0; i< endDate; i++){
        const date = dayjs(start).add(i,"day");
        columns.push(date)
    }
    //console.log("columns data  == ",columns)

    return columns
   }
    return{
        showDayJs,
        getCalendarColumns,
        dayOfWeek
    }
}