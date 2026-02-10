import { scheduleCancel } from "../../services/schedule-cancel"
import { schedulesDay } from "./load"


const periods = document.querySelectorAll(".period")

periods.forEach((period) => {
    //Captura o evento de click na lista
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")) {
            //Obtem a li pai do elemet
            const item = event.target.closest("li")
            //Pega O ID do agendamneto para remover 
            const { id } = item.dataset

            //Confirma que o Id foi selecionado. 
            if  (id) {
                const isConfirm = confirm("Tem certezaa que deseja cancelar esse agendamento?")

                if(isConfirm) {
                    //Faz a requisição pra cancelar (converte id para number)
                    await scheduleCancel({ id })
                    //Regarrega os agendamentos.
                    schedulesDay()
                }
            }
        }
    })
})