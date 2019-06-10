/*
3. Необходимо написать иерархию классов вида:
        Human -> Employee -> Developer
        Human -> Employee -> Manager
Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков), а также методы по удалению/добавлению разработчиков.
    Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера (имеется ввиду возможность назначить другого менеджера).
У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата)
У класса Employee должны присутствовать параметры: salary (число), department (строка)
В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.
    В классе Employee должен быть реализовать такой же метод (displayInfo), который вызывает базовый метод и дополняет его
параметрами из экземпляра Employee
Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать: super.displayInfo(),
    это вызовет метод disaplyInfo класс Human и вернет строку с параметрами Human'a.
*/

class Human{
    constructor(name = '', age = 0, dateOfBirth = ''){
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayInfo(){
        return JSON.stringify(this);
    }

}

class Employee extends Human{
    constructor(name, age, dateOfBirth, salary = 0, department = ''){
        super(name, age, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }
    displayInfo(){
        const human = JSON.parse(super.displayInfo());
        return JSON.stringify(Object.assign(human, this));
    }
}

class Developer extends Employee{
    constructor(name, age, dateOfBirth, salary, department){
       super(name, age, dateOfBirth, salary, department);
       this.manager = '';
    }
    addManager(manager){
        this.manager = manager.name;
    }
}

class Manager extends Employee{
    constructor(name, age, dateOfBirth, salary, department){
        super(name, age, dateOfBirth, salary, department);
        this.developers = [];
    }
    addDeveloper(developer){
        this.developers.push(developer.name);
        developer.addManager(this);
        developer.department = this.department;
    }

    deleteDeveloper(developer){
        this.developers.splice(this.developers.indexOf(developer.name),1);
    }
}
//managers
const managerIrina = new Manager('Irina', 30, '24.05', 50000, 'dep1');
console.log(managerIrina.displayInfo());

const managerAlex = new Manager('Alex', 35, '01.03', 55000, 'dep2');
console.log(managerAlex.displayInfo());

//developers
const developerNikolay = new Developer('Nikolay', 27, '01.03', 70000);
console.log(developerNikolay.displayInfo());

const developerRita = new Developer('Rita', 28, '01.03', 72000);
console.log(developerRita.displayInfo());

const developerSergey = new Developer('Sergey', 29, '01.03', 71000);
console.log(developerSergey.displayInfo());

const developerAndrey = new Developer('Andrey', 25, '01.03', 90000);
console.log(developerAndrey.displayInfo());

// staff relations
//manager 1
managerIrina.addDeveloper(developerNikolay);
managerIrina.addDeveloper(developerAndrey);
managerIrina.addDeveloper(developerSergey);
console.log(managerIrina.displayInfo());

//manager 2
managerAlex.addDeveloper(developerRita);
console.log(managerAlex.displayInfo());

//developers
console.log(developerNikolay.displayInfo());
console.log(developerRita.displayInfo());
console.log(developerSergey.displayInfo());
console.log(developerAndrey.displayInfo());

// change manager
managerIrina.deleteDeveloper(developerAndrey);
managerAlex.addDeveloper(developerAndrey);

//managers
console.log(managerIrina.displayInfo());
console.log(managerAlex.displayInfo());

//developers
console.log(developerNikolay.displayInfo());
console.log(developerRita.displayInfo());
console.log(developerSergey.displayInfo());
console.log(developerAndrey.displayInfo());