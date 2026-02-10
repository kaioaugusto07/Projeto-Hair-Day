import { schedulesDay } from "../schedules/load"

const selectDate = document.getElementById("date")

selectDate.onchange = () => schedulesDay()

