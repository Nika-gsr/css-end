

const deadline = '2020-12-31';

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor( (t/(1000*60*60*24)) ),
        seconds = Math.floor( (t/1000) % 60 ),
        minutes = Math.floor( (t/1000/60) % 60 ),
        hours = Math.floor( (t/(1000*60*60) % 24) );

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero(num){
    if (num >= 0 && num < 10) { 
        return '0' + num;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {

    const timer = document.querySelector(selector),
        days = timer.querySelector("#days"),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('.timer', deadline);



// $(document).ready(function(){
//     $('.multi-split').slick({
//         slidesToShow: 4,
//         slidesToScroll: 1,
//       arrows: true,
      
      
//       nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
//       prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      
//       responsive: [
//   {
//     breakpoint: 1024,
//     settings: {
//       slidesToShow: 4,
//       slidesToScroll: 1,    

//     }
//   },
//   {
//     breakpoint: 600,
//     settings: {
//       slidesToShow: 1,
//       slidesToScroll: 1
//     }
//   },
//   {
//     breakpoint: 480,
//     settings: {
//       slidesToShow: 1,
//       slidesToScroll: 1

//     }
//   }

// ]
//     });
//   });
