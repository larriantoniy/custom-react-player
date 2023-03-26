export function formatTime(milliseconds: number): string {
  const totalSeconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  const fraction = Math.floor(milliseconds % 1000)
    .toString()
    .padStart(3, '0') // добавляем ведущие нули, если число < 100 или < 10
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${fraction}`
}
