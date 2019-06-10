/*1. Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0), callback (значение по умолчанию = null)
и будет в цикле (times раз), вызывать функцию callback. Если функцию не передана, то цикл не должен отрабатывать ни разу.Покажите применение этой функции*/



const loop = (times = 0, callback = null) =>{
    if(times > 0)
    {
        if (typeof callback === "function") {
            for (let i=0; i<times; i++) {
                callback();
            }
        }
        else console.log('callback не функция');
    } else console.log('число повторений равно 0');
};

const addOne = (x = 1)  => console.log(x);

loop(5, addOne);
loop(5);
loop(0, addOne);
loop(5,5);
