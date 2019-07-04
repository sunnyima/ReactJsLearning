import React, {useContext} from 'react';
import  AuthContext from '../auth-context';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

import MainPage from "../pages/Main";
import PageNotFound from "../pages/PageNotFound";
/*import Users from "../pages/Users";
import User from "../pages/User";
import Posts from "../pages/Posts";
import Post from "../pages/Post";*/
import Comments from "../pages/Comments";
import Comment from "../pages/Comment";



const brand = 'React blog!';

const isActive = (href) => {
    return window.location.pathname === href;
};

const Header = props =>{
    const  auth = useContext(AuthContext);
    return <header>
        <Menu brand={brand}>
            <MenuItem href="/" active={isActive('/')}>
                Главная
            </MenuItem>
            <MenuItem href="/users" active={isActive('/users')}>
                Пользователи
            </MenuItem>
            <MenuItem href="/posts" active={isActive('/posts')}>
                Статьи
            </MenuItem>
            <MenuItem href="/comments" active={isActive('/comments')}>
                Комментарии
            </MenuItem>
        </Menu>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/users" component={Users}/>
                        <Route path="/users/:userId" component={User}/>
                        <Route exact path="/posts" component={Posts}/>
                        <Route path="/posts/:postId" component={Post} />
                        <Route exact path="/comments" component={Comments} />
                        <Route path="/comments/:commentId" component={Comment} />
                        <Route path="*" component={PageNotFound}/>
                    </Switch>
                </div>
            </div>
        </div>
    </header>
};
export default Header;