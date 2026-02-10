import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedules-new"
import { schedulesDay } from "../schedules/load";

const form = document.querySelector('form');
const clientName = document.getElementById("client")
const selectDate = document.getElementById('date');

//Date atual para o input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD');
//Selecionando a data atual
selectDate.value = inputToday;

//Selecionando a data minima
selectDate.min = inputToday;

form.onsubmit = async(event) => {
    event.preventDefault();

    try {
    //recuperando o nome do cliente
    const name = clientName.value.trim()

    if(!name) {
        return alert("Informe o nome do cliente.")
    }

    const hourSelected = document.querySelector(".hour-selected")
    
    if(!hourSelected) {
        return alert("Selecione a hora.")
    }

    //Recupera apenas a hora
    const [hour] = hourSelected.innerText.split(":")

    //Insere a data naa hora
    const when = dayjs(selectDate.value).add(hour, "hour")
    
    //Gera um ID
    const id = new Date().getTime()

    await scheduleNew({
        id,
        name,
        when,
    })

    await schedulesDay()
    clientName.value = ""

    } catch(error) {
        alert("Não foi realizar o agendamento.")
    }
}