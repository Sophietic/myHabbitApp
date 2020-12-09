import moment from 'moment';

export const currentRunStreakCalc = (userFromDB, setRunStreak) => {
    let oneRunStreak = 0;
    const currentTime = moment().unix()
  
    for(let i = 0; i < userFromDB.data.myHabits.length; i++) {
      if (userFromDB.data[i+1] !== undefined) { 
        // oneRunStreak = 1;
        const prevUpdated = Date.parse(userFromDB.data[i].myHabits.updatedAt)
        const currentUpdated = Date.parse(userFromDB.data[i+1].myHabits.updatedAt)
  
        if (prevUpdated !== Date.parse(userFromDB.data[i].myHabits.createdAt)) {
          if(currentTime - prevUpdated < 86400) { //defines current run streak: within the day
              if(currentUpdated - prevUpdated < 86400 && userFromDB.myHabits.data[i].completed === true) {
                //for every session completed in a 24hr window, add 1 to the runStreak. 
                oneRunStreak++;
              } else {
                //else break the run streak, push it to array, and start again at 1.
                // longestRunStreakArray.push(oneRunStreak);
                oneRunStreak = 0;
              }
          }  
        }
  
      } else {
        if(userFromDB.data[i].myHabits.completed === true ) {
          oneRunStreak++;
        }
        // longestRunStreakArray.push(oneRunStreak);
        oneRunStreak = 0;
        console.log(oneRunStreak)
      }
  
    }
  
    const highestRunStreak = Math.max.apply(null, longestRunStreakArray);
    setRunStreak(highestRunStreak);
  }