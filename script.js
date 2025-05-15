let startTime = 0,
  elapsedTime = 0,
  timerInterval

const display = document.getElementById("display")
const startStopBtn = document.getElementById("startStop")
const resetBtn = document.getElementById("reset")

function timeToString(time) {
  const diff = time
  const hours = Math.floor(diff / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)
  const ms = diff % 1000

  // pad to 2 digits, ms to 3 digits
  const hStr = hours.toString().padStart(2, "0")
  const mStr = minutes.toString().padStart(2, "0")
  const sStr = seconds.toString().padStart(2, "0")
  const msStr = ms.toString().padStart(3, "0")

  return `${hStr}:${mStr}:${sStr}.${msStr}`
}

function updateDisplay() {
  const now = Date.now()
  const diff = elapsedTime + (now - startTime)
  display.textContent = timeToString(diff)
}

function start() {
  startTime = Date.now()
  timerInterval = setInterval(updateDisplay, 10)
  startStopBtn.textContent = "Pause"
}

function pause() {
  clearInterval(timerInterval)
  elapsedTime += Date.now() - startTime
  startStopBtn.textContent = "Start"
}

function reset() {
  clearInterval(timerInterval)
  elapsedTime = 0
  display.textContent = "00:00:00.000"
  startStopBtn.textContent = "Start"
}

// Event listeners
startStopBtn.addEventListener("click", () => {
  if (timerInterval) {
    pause()
  } else {
    start()
  }
})

resetBtn.addEventListener("click", reset)
