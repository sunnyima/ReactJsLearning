import React, {useState, useContext} from 'react';

import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';
import AuthContext from './auth-context';

const  App  = props =>{

    const [page, setPage] = useState("auth");
    const [authState, setAuthState] = useState(false);
    const  switchPage =(pageName) =>{
        setPage(pageName);
    }

    const login = ()=>{
        setAuthState(true);
    }

    return(
        <div>
            <AuthContext.Provider value ={{ status: authState,  login : login}}>
                <Header
                    onLoadTodos ={switchPage.bind(null, 'todos')}
                    onLoadAuth = {switchPage.bind(null, 'auth')}
                />
                <hr/>
                {page === 'auth' ? <Auth/> : <Todo/>}
            </AuthContext.Provider>
        </div>
    );
}

export default App;
