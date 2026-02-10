import { apiConfig } from "./api-config"
import dayjs from "dayjs"

export async function scheaduleFetchDay({date}) {
    try {
        //Faz a requisição
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        //Converte para json
        const data = await response.json()

        //Filtra os agendamentos pelo dia selecionado
        const dailySchedules = data.filter((schedule) => 
            dayjs(date).isSame(schedule.when, "day")
    )

        return dailySchedules
    } catch (error) {   
        alert("Não foi possivel buscar os agendamentos dos dias selecionados")
    }
}   