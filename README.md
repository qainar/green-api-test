// Инструкция по запуску


// START


docker-compose up -d


cd gateway


npm i && npm start


cd m1


npm i && npm start


запрос отправить на http://localhost:3000/calculate 

в body передать  : {
    "number": // какое то число 
}


// STOP


docker-compose down

