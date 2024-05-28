import * as C from "./stile";
import React, { useState } from 'react';
import { obterNomeMesAtual, formatCurrentMonth} from "../../helpers/getmounth";
import  {ResumeItem } from "../resumeItem/index";

type props={
    currentMonth: string;
   onMonthChange: (newMonth: string) => void;
   receita: number;
   despesa: number;

}
export const InfoArea =({onMonthChange, currentMonth,receita,despesa}:props)=>{
    const [currentDate, setCurrentDate] = useState(new Date());

const prevMes = ()=> {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth( currentDate.getMonth() - 1 );
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);

}
const nextMes = ()=> {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) + 1, 1);
    currentDate.setMonth( currentDate.getMonth() - 1 );
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);

}

    return(
        <C.Container>
        <C.MonthArea>
            <C.MonthArrow onClick={prevMes} >⬅️</C.MonthArrow>
            <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
          
            <C.MonthArrow onClick={nextMes}>➡️</C.MonthArrow>
        </C.MonthArea>
        <C.ResumeArea>
           
        <ResumeItem title="Receitas" value={receita} />
                <ResumeItem title="Despesas" value={despesa} />
                <ResumeItem
                    title="Balanço"
                    value={receita- despesa}
                    color={(receita- despesa) < 0 ? 'red': 'green'}

                />

        </C.ResumeArea>
    </C.Container>
    )
}