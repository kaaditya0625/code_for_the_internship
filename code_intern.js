function solution(D) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let result = {};
  
  // Initialize the result dictionary with 0 for each day of the week
  for (let day of daysOfWeek) {
    result[day] = 0;
  }
  
  // Convert the input dictionary to a list of [date, value] pairs
  let dateValues = Object.entries(D);
  
  // Sort the list by date
  dateValues.sort();
  
  // Iterate through the list and add each value to the corresponding day of the week
  for (let i = 0; i < dateValues.length; i++) {
    let date = new Date(dateValues[i][0]);
    let dayOfWeek = daysOfWeek[date.getDay()];
    result[dayOfWeek] += dateValues[i][1];
    
    // If the input dictionary doesn't have values for a day, set it as the average of the previous and next day
    if (i > 0 && i < dateValues.length - 1) {
      let prevDate = new Date(dateValues[i - 1][0]);
      let nextDate = new Date(dateValues[i + 1][0]);
      let prevDayOfWeek = daysOfWeek[prevDate.getDay()];
      let nextDayOfWeek = daysOfWeek[nextDate.getDay()];
      
      if (!result[dayOfWeek]) {
        result[dayOfWeek] = Math.round((result[prevDayOfWeek] + result[nextDayOfWeek]) / 2);
      }
    }
  }
  
  return result;
}
