
const planchaBase = 40
const flexionesBase = 16
const diaInicio = new Date("2022/12/19")
const divId = "exercise"

const getDailyExercise = () => {
  const diaFin = new Date("2023/01/06")

  const numDias = Math.ceil((diaFin - diaInicio + 1) / (1000 * 60 * 60 * 24))

  if (numDias <= 16) {
    return `Te toca ${numDias} flexiones`
  }

  const diffDias = numDias - 16

  if (numDias % 2 == 0) {
    const numFlexionesAdd = Math.trunc(diffDias / 2)
    return `Te toca ${flexionesBase + numFlexionesAdd} flexiones`
  } else {
    const segPlanchaAdd = Math.trunc((diffDias - 1) / 2) * 5
    return `Te toca ${planchaBase + segPlanchaAdd} segundos de plancha`
  }
}

const updateDiv = () => {
  const divNode = document.getElementById(divId)
  divNode.innerText = getDailyExercise()
}

window.onload = () => {
  updateDiv()
}

