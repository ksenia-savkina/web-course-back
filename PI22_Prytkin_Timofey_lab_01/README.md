## Лабораторная работа №1

Выполнил студент группы **ПИбд-22 Прыткин Тимофей**

## Задания

1. Создать каркас сервера
  - Реализовать запрос `GET /ping`, ответ на запрос
  ```js
  {
    "status": "ok"
  }
  ```
  - Реализовать запрос, определяющий день недели по номеру дня текущего месяца. К примеру если сейчас январь 2021 года, то запрос будет выглядеть как `GET /weekday?day=3`, а ответ:
  ```js
  {
    "weekday" : "Sunday"
  }
  ``` 
  - Реализовать запрос для выполнения простых математических операций:
  ```js
  POST `/calc`
  body:
  {
    "value1" : 2,
    "value2" : 1,
    "operation" : "subtraction", // 'addition' | 'multiplication' | 'division'
  }
  response:
  {
    "status": "ok", // 'error'
    "body": 1 // or error description 
  }
  ```
2. Настроить логирование в файл
    - всех запросов к серверу в следующем формате `{Date and time in UTC} {Ip} {Method} {Url} {Status code}`
    - всех исключений на сервере
    
----------------------------------------------------------------- 
    
Для запуска сервера в терминале нужно ввести команду `node index`.

Запросы к серверу отправлялись через **Postman**.

В качестве логгера был испольтзован пакет логирования **winston**.

[Видео-демонстрация работы сервера]( https://disk.yandex.ru/i/yzwEDdIEe5UVIg).





