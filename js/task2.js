/*2. Написать функцию calculateArea, которая будет принимать параметры, для вычисления площади (можете выбрать какую то
конкретную фигуру, а можете, основываясь на переданных параметрах, выполнять требуемый алгоритм вычисления площади
для переданной в параметрах фигуры) и возвращать объект вида: { area, figure, input }, где area - вычисленная площадь,
figure - название фигуры, для которой вычислялась площадь, input - входные параметры, по которым было произведено вычисление.*/


const calculateArea = (x = 0, y = 0) =>{
    const result ={
        area : 0,
        figure : '',
        input :[x,y]
    };

    if( x > 0)
    {
        if( y > 0){
            result.area = x*y;
            result.figure = 'прямоугольник';
        }
        else{
            result.area = Math.PI*(x*x);
            result.figure = 'круг';
        }

        return result;
    }
    return 'Первый параметр должен быть больше 0';
};

console.log( calculateArea(2,3));
console.log( calculateArea(5));
console.log( calculateArea(0));