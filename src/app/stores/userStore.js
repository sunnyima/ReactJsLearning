import  dispatcher from '../dispatcher';
import  {EventEmitter} from "events";

class UserStore extends  EventEmitter{
    constructor(){
        super();
        this.users = [];
        this.user = null;
        this.getUsers = this.getUsers.bind(this);
        this.handleActions = this.handleActions.bind(this);
        this.change = this.change.bind(this);
    }

    change(){
        this.emit('change');
    }

    getUsers(users) {
        this.users = users;
        this.change();
    }

    getUser(user) {
        this.user = user;
        this.change();
    }

    handleActions(action){
        switch (action.type) {
            case 'GET_USERS' :
                this.getUsers(action.data);
                break;
            case 'GET_USER' :
                this.getUser(action.data);
                break;

        }
    }
}

const store = new UserStore();
dispatcher.register(store.handleActions);
export default store;