Веб-чат, в котором пользователи могут обмениваться информацией.

Стек: React, Redux Toolkit, TypeScript, Express, Socket.io, MaterialUI, jsonwebtoken, Postgres.

Для запуска приложения необходимо будучи в папках /client и /server выполнить команду npm run dev.

Для создания бд: npx sequelize db:create.

Необходимо так же создать файл .env по аналогии с .env.example.

## Функционал

### Регистрация/авторизация

* Форма регистрации
* Форма авторизации
* Кнопка выхода
* Регистрация/авторизация реализованы на JWT-токенах 

### Чат

* Поле с выводом сообщений
* Поле для ввода текста и кнопка отправить
* Чат реализован на websocket с помощью библиотеки socket.io

## Бизнес ценность

### Взаимодействие между сотрудниками внутри подразделения

* Оперативная коммуникация. В чате можно оповестить всех участников о срочном событии или быстро узнать мнение по какому-то вопросу.
* Социализация. Благодаря чату сотрудники чувствуют себя частью команды и ощущают участие в рабочем процессе. Обсуждение общих вопросов, непосредственно с работой не связанных, улучшает эмоциональный микроклимат в коллективе.
* Безопасность данных. Доступ к чату есть только у сотрудников компании, поэтому случайные люди не прочитают переписку, а уволившийся коллега не заберёт с собой отчётность или клиентскую базу. 

### Взаимодействие между сотрудниками и клиентами

* Оперативная помощь. В чате клиент может задать вопрос и получить срочный ответ.
* Обратная связь. Клиенты могут оставлять обратную связь в режиме реального времени, обсуждать продукцию. Сотрудники могут видеть обсуждения и учитывать мнение пользователей при модернизации/разработке нового продукта.

### Варианты развития

* Добовление оповещений.
* Добавление комнат в чат.
* Добавления возможности ответа на конкретное сообщение.
* Добавление возможности ставить рекакции на сообщение (если чат будет использоваться для неформального общения сотрудников между собой)
  
