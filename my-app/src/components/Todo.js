import  React, {useState, useEffect} from 'react';

import axios from 'axios';

const  Todo = props=>{
    const [todoName, setTodoName] = useState("");// [state, setStateFunc]

    const [todoList, setTodoList] = useState([]);

    useEffect(()=>{
       axios.get("https://test-37764.firebaseio.com/todos.json")
           .then(result =>{
               console.log(result);
               const todoData = result.data;
               const todos = [];
               for ( const key in todoData){
                   todos.push({id: key, name: todoData[key].name})
               }
               setTodoList(todos);
           })
    }, []);

    /*const mousemoveHandler = event =>{
        console.log(event.clientX, event.clientY);
    };
    useEffect(()=>{
        document.addEventListener('mousemove', mousemoveHandler);
        return () =>{
            document.removeEventListener('mousemove', mousemoveHandler);
        };
    },[]);*/
    const  inputChangeHandler =(event)=>{
        //console.log(event.target.value);
        setTodoName(event.target.value);
    };
    const todoAddHandler = () => {
        setTodoList([...todoList, todoName]);//(todoList.concat(todoName));

        axios.post('https://test-37764.firebaseio.com/todos.json', {name: todoName})
            .then(res=>console.log(res))
            .catch(err => console.log(err));
    };


    //console.log(todoName);
    return <div>
        <input
            onChange={inputChangeHandler}
            value={todoName}
            type='text'
            placeholder="Todo"/>
        <button onClick={todoAddHandler}>Add</button>
        <ul>
            {todoList.map(todo => (<li key={todo.id}>{todo.name}</li>))}
        </ul>
    </div>
};
export  default  Todo;