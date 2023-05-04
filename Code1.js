// 
const D={'2020-01-01':4,'2020-01-02':4,'2020-01-03':6,'2020-01-04':8,'2020-01-05':2,'2020-01-06':-6,'2020-01-07':2,'2020-01-08':-2}
  
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  // Initialize cumulative values and counts for each day of the week
  const stats = {};
  for (const dayOfWeek of daysOfWeek) {
    stats[dayOfWeek] = { sum: 0, count: 0 };
  }
  
  // Iterate through each date and add its value to the corresponding day of the week
  for (const dateString in D) {
    const value = D[dateString];
    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getDay()];
    stats[dayOfWeek].sum += value;
    stats[dayOfWeek].count += 1;
  }
  
  // Compute mean for missing days of the week
  for (let i = 0; i < daysOfWeek.length; i++) {
    const dayOfWeek = daysOfWeek[i];
    if (stats[dayOfWeek].count === 0) {
      const prevDayOfWeek = daysOfWeek[(i + 6) % 7];
      const nextDayOfWeek = daysOfWeek[(i + 1) % 7];
      stats[dayOfWeek].sum = (stats[prevDayOfWeek].sum + stats[nextDayOfWeek].sum) / 2;
      stats[dayOfWeek].count = 1;
    }
  }
  
  // Create output dictionary with mean values for missing days of the week
  const output = {};
  for (const dayOfWeek of daysOfWeek) {
    output[dayOfWeek] = stats[dayOfWeek].sum / stats[dayOfWeek].count;
  }
  
  console.log(output);
