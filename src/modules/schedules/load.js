import { hoursLoad } from "../form/hours-load.js";
import { scheaduleFetchDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "./show.js"

//Seleciona o input de data
const dateInput = document.getElementById("date");

export async function schedulesDay() {
    //Obtem a data do input
    const date = dateInput.value;

    const dailySchedules = await scheaduleFetchDay({ date })
    
    schedulesShow({dailySchedules})

    hoursLoad({ date, dailySchedules });

};