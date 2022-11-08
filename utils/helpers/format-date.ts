//YYYY-MM-DD only
// export const formatDate = (date: Date) => {
//     var d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear();

//     if (month.length < 2) 
//         month = '0' + month;
//     if (day.length < 2) 
//         day = '0' + day;

//     return [year, month, day].join('-');
// }

function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }
  
export function formatDate(date : Date) {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }