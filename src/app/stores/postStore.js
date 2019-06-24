import  dispatcher from '../dispatcher';
import  {EventEmitter} from "events";

class  PostStore extends  EventEmitter{
    constructor(){
        super();
        this.posts = [];
        this.getPosts = this.getPosts.bind(this);
        this.addPost = this.addPost.bind(this);
        this.handleActions = this.handleActions.bind(this);
        this.change = this.change.bind(this);
    }

    change(){
        this.emit('change');
    }

    addPost(post){
        this.posts =[post, ...this.posts];
        this.change();
    }

    getPosts(posts) {
        this.posts = posts;
        this.change();
    }

    handleActions(action){
        switch (action.type) {
            case 'ADD_POST':
                this.addPost(action.data);
                break;
            case 'GET_POSTS' :
                this.getPosts(action.data);
                break;

        }
    }
}

const store = new PostStore();
dispatcher.register(store.handleActions);
export default store;