export function getMondayOfCurrentWeek() {
  const today = new Date()
  const day = today.getDay() // 0 (Sunday) to 6 (Saturday)
  const diff = day >= 1 ? day - 1 : 6 // Calculate days to subtract to get to Monday
  const monday = new Date(today)
  monday.setDate(today.getDate() - diff)

  return monday
}

export function getWeekBooleanArray(A: string[]) {
  // Convert strings to Date objects for comparison
  const monday = getMondayOfCurrentWeek()
  const result = Array(7).fill(false)

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(monday)
    currentDate.setDate(monday.getDate() + i)

    if (A.includes(currentDate.toISOString().slice(0, 10)))
      result[i] = true
  }

  return result
}
