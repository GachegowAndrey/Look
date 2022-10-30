﻿document.addEventListener('DOMContentLoaded', () => { // структура документа загружена   
  
  new Chart( // инициализируем плагин
    document.querySelector('.chartEx'), // первым параметром передаем элемент canvas по селектору
    // вторым параметром передаем настройки в виде объекта
    { 
      type: 'bar', // тип графика, в данном случае линейный
      data: { // общие данные графика в виде объекта
        labels: ['1-7 Jule','8-14 Jule', '15-21 Jule', '22-28 Jule',
         '29 July-4 Aug', '5-11 Aug','12-18 Aug',
         '19-25 Aug','26Aug-1Sen','2-8Sen','9-15Sen','16-22Sen',
         '23-29Sen','30Sen-6 Oct','7-13 Oct','14-20 Oct','21-27 Oct'], // метки по оси X
        datasets: [ // набор данных, который будет отрисовываться в виде массива с объектами
          { 
              label: 'Exp', // название для определенного графика в виде строки
              data: [735, 806, 675, 969, 630,407,1107,827,547,457,639,500,438,743,584,376,606],
              // данные в виде массива с числами, количество должно совпадать с количеством меток по оси X
               backgroundColor: [
      'rgba(255, 205, 86)',
      'rgba(5, 100, 200)',
      'rgba(150, 250, 235)',
      'rgba(153, 102, 255)',
      'rgba(255, 159, 64)',
      'rgba(201, 203, 207)',
      'rgba(10, 100, 207)',
      'rgba(255, 99, 132)',
      'rgba(15, 255, 100)',
      'rgba(100, 10, 207)',
      'rgba(30, 90, 5)'
    ],
    borderColor: [
      'rgb(55, 0, 5)'
    ],
    borderWidth: 1.5
          }
        ]
      },
      options: {} // дополнительные опции для графика в виде объекта, если не нужны - передаем пустой объект
    }
  );

});

document.addEventListener('DOMContentLoaded', () => { // структура документа загружена   
  
  new Chart( // инициализируем плагин
    document.querySelector('.chartTm'), // первым параметром передаем элемент canvas по селектору
    // вторым параметром передаем настройки в виде объекта
    { 
      type: 'bar', // тип графика, в данном случае линейный
      data: { // общие данные графика в виде объекта
        labels: ['1-7 Jule','8-14 Jule', '15-21 Jule',
         '22-28 Jule', '29 July-4 Aug', '5-11 Aug',
         '12-18 Aug','19-25 Aug','26Aug-1Sen','2-8Sen',
         '9-15Sen','16-22Sen','23-29Sen','30Sen-6 Oct',
         '7-13 Oct','14-20 Oct','21-27 Oct'], // метки по оси X
        datasets: [ // набор данных, который будет отрисовываться в виде массива с объектами
          { 
              label: 'Time(minutes)', // название для определенного графика в виде строки
              data: [377, 438, 230, 246, 213,213,356,293,190,188,201,152,128,143,153,106,184],
              // данные в виде массива с числами, количество должно совпадать с количеством меток по оси X
               backgroundColor: [
      'rgba(235, 85, 145, 0.5)',
      'rgba(210, 170, 30, 0.5)',
      'rgba(160, 200, 70, 0.5)',
      'rgba(85, 20, 180, 0.5)',
      'rgba(45, 162, 235, 0.5)',
      'rgba(153, 102, 255, 0.5)',
      'rgba(201, 203, 207, 0.5)',
      'rgba(10, 100, 207, 0.5)',
      'rgba(15, 255, 10, 0.5)',
      'rgba(200, 15, 150, 0.5)',
      'rgba(250, 100, 20, 0.5)'
    ],
    borderColor: [
      'rgb(235, 85, 145)',
      'rgb(210, 170, 30)',
      'rgb(155, 205, 86)',
      'rgb(75, 20, 180)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)',
      'rgba(10, 100, 207)',
      'rgba(15, 255, 10',
      'rgba(200, 15, 150)',
      'rgba(250, 100, 20)'
    ],
    borderWidth: 2
          }
        ]
      },
      options: {} // дополнительные опции для графика в виде объекта, если не нужны - передаем пустой объект
    }
  );

});
document.addEventListener('DOMContentLoaded', () => { // структура документа загружена   
  
  new Chart( // инициализируем плагин
    document.querySelector('.chartWrd'), // первым параметром передаем элемент canvas по селектору
    // вторым параметром передаем настройки в виде объекта
    { 
      type: 'line', // тип графика, в данном случае линейный
      data: { // общие данные графика в виде объекта
        labels: ['1-7 Jule','8-14 Jule', '15-21 Jule',
         '22-28 Jule', '29 July-4 Aug', '5-11 Aug',
         '12-18 Aug','19-25 Aug','26Aug-1Sen','2-8Sen',
         '9-15Sen','16-22Sen','23-29Sen','30Sen-6 Oct',
         '7-13 Oct','14-20 Oct','21-27 Oct'], // метки по оси X
        datasets: [ // набор данных, который будет отрисовываться в виде массива с объектами
          { 
              label: 'Words', // название для определенного графика в виде строки
              data: [363, 373, 112, 3, 26,14,9,19,23,4,1,1,129,136,1,4,5],
              // данные в виде массива с числами, количество должно совпадать с количеством меток по оси X
               backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)',
      'rgba(10, 100, 207, 0.2)',
      'rgba(15, 255, 10, 0.2)',
      'rgba(100, 10, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)',
      'rgb(10, 100, 207)',
      'rgba(15, 255, 10)',
      'rgba(100, 10, 207)'
    ],
    borderWidth: 3
          }
        ]
      },
      options: {} // дополнительные опции для графика в виде объекта, если не нужны - передаем пустой объект
    }
  );

});
document.addEventListener('DOMContentLoaded', () => { // структура документа загружена   
  
  new Chart( // инициализируем плагин
    document.querySelector('.chartPh'), // первым параметром передаем элемент canvas по селектору
    // вторым параметром передаем настройки в виде объекта
    { 
      type: 'line', // тип графика, в данном случае линейный
      data: { // общие данные графика в виде объекта
        labels: ['1-7 Jule','8-14 Jule', '15-21 Jule', 
        '22-28 Jule', '29 July-4 Aug', '5-11 Aug',
        '12-18 Aug','19-25 Aug','26Aug-1Sen','2-8Sen',
        '9-15Sen','16-22Sen','23-29Sen','30Sen-6 Oct',
        '7-13 Oct','14-20 Oct','21-27 Oct'], // метки по оси X
        datasets: [ // набор данных, который будет отрисовываться в виде массива с объектами
          { 
              label: 'Phrase', // название для определенного графика в виде строки
              data: [632, 734, 582, 607, 544,417,848,645,380,329,405,316,278,443,354,266,443],
              // данные в виде массива с числами, количество должно совпадать с количеством меток по оси X
               
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)',
      'rgba(15, 255, 10)',
      'rgba(100, 10, 207)'
    ],
    backgroundColor: 'lightblue',
     fill:true,
    borderWidth: 5

          }
        ]
      },
      options: {} // дополнительные опции для графика в виде объекта, если не нужны - передаем пустой объект
    }
  );

});

document.addEventListener('DOMContentLoaded', () => { // структура документа загружена   
  
  new Chart( // инициализируем плагин
    document.querySelector('.chartLes'), // первым параметром передаем элемент canvas по селектору
    // вторым параметром передаем настройки в виде объекта
    { 
      type: 'line', // тип графика, в данном случае линейный
      data: { // общие данные графика в виде объекта
        labels: ['1-7 Jule','8-14 Jule', '15-21 Jule', 
        '22-28 Jule', '29 July-4 Aug', '5-11 Aug',
        '12-18 Aug','19-25 Aug','26Aug-1Sen','2-8Sen',
        '9-15Sen','16-22Sen','23-29Sen','30Sen-6 Oct',
        '7-13 Oct','14-20 Oct','21-27 Oct'], // метки по оси X
        datasets: [ // набор данных, который будет отрисовываться в виде массива с объектами
          { 
              label: 'Lessons', // название для определенного графика в виде строки
              data: [50, 58, 46, 48, 43,33,67,51,30,26,32,25,28,35,28,21,35],
              // данные в виде массива с числами, количество должно совпадать с количеством меток по оси X
              
            borderColor: [
                'rgb(200, 40, 150)',
                'rgb(255, 159, 64)',
                'rgb(250, 200, 10)',
                'rgb(80, 250, 50)',
                'rgb(20, 195, 215)',
                'rgb(153, 102, 255)',
                'rgb(20, 200, 100)',
      'rgb(10, 100, 207)',
      'rgba(15, 255, 10)',
      'rgba(100, 10, 207)'
                        ],
             backgroundColor: 'lightblue',
             cubicInterpolationMode: 'monotone',// добавили сглаживание углов
             fill: true, // залили линейный график цветом
    borderWidth: 3
          }
        ]
      },
      options: {

      } // дополнительные опции для графика в виде объекта, если не нужны - передаем пустой объект
    }
  );

})


