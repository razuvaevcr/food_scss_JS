function timer(id, deadline) {

     function getTimeRemaning(endtime) { //считает остаток времени до конца акции
         const t = Date.parse(endtime) - Date.parse(new Date()),
             days = Math.floor(t / (1000 * 60 * 60 * 24)),
             hours = Math.floor((t / (1000 * 60 * 60)) % 24),
             minutes = Math.floor((t / (1000 * 60)) % 60),
             seconds = Math.floor((t / 1000) % 60);
 
         return {
             'total': t,
             'days': days,
             'hours': hours,
             'minutes': minutes,
             'seconds': seconds
         };
     }
 
     function getZero(num) {
         if (num >= 0 && num < 10) {
             return `0${num}`;
         } else {
             return num;
         }
     }
 
     function setClock(selector, endtime) { // задает значение таймера
         const timer = document.querySelector(selector),
             days = timer.querySelector('#days'),
             hours = timer.querySelector('#hours'),
             minutes = timer.querySelector('#minutes'),
             seconds = timer.querySelector('#seconds'),
             timeInterval = setInterval(updateClock, 1000);
 
         updateClock(); // первый вызов функции чтобы верстка не 'моргала'
 
         function updateClock() { // обновляет значение таймера
             const t = getTimeRemaning(endtime);
 
             days.innerHTML = getZero(t.days);
             hours.innerHTML = getZero(t.hours);
             minutes.innerHTML = getZero(t.minutes);
             seconds.innerHTML = getZero(t.seconds);
 
             if (t.total <= 0) {
                 clearInterval(timeInterval);
             }
         }
     }
 
     setClock(id, deadline);
}

export default timer;