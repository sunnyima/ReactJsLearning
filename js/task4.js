/*
4*. Написать цикл, который создаёт массив промисов, внутри каждого промиса происходит обращение к ресурсу
(https://jsonplaceholder.typicode.com/users/number), где вместо number подставляется число от 1 до 10, в итоге должно
// получиться 10 промисов. Следует дождаться выполнения загрузки всеми промисами и далее вывести массив загруженных данных.
*/



const promiseArray = [];
let user = {};
for(let i = 0; i < 10; i++){
    promiseArray[i] = new Promise((resolve, reject) =>{
        gerUser(`https://jsonplaceholder.typicode.com/users/${i+1}`)
            .then(response => {
                let user = JSON.parse(response);
                if(Object.is(user, {})){
                    reject('Вернулся пустой результат');
                }
                else{
                    resolve(user);
                }
            });
    });
}


function gerUser(url) {
    console.log(url);
    return new Promise(function(resolve, reject) {
        let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {

            if (this.status == 200) {
                resolve(this.responseText);
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });

}


Promise.all(promiseArray).then(result =>{
    console.log(result);
}).catch(bad => {
    console.log('Данные не всех пользователей были получены');
});
