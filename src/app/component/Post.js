import React, {Component} from 'react';

export class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
            post: this.props.item?this.props.item:{}
        };
    }

    render() {
        return(
                <div>
                    <section className="Post">
                        <h2 className="PostTitle">{this.state.post.title}</h2>
                        <p className="PostText">{this.state.post.postBody}</p>
                    </section>
                </div>
        );
    }
}

export class AddPost extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts:this.props.items?this.props.items:[]
        };
        this.titleRef = React.createRef();
        this.textRef = React.createRef();
        this.addPost = this.addPost.bind(this);
    }


    addPost(){
        const titleText= this.titleRef.current.value;
        const postText= this.textRef.current.value;
        if(titleText !=='' && postText !== '') {

            const posts = [...this.state.posts, {title: postText, postBody: titleText}];
            this.setState({
                posts
            });
            this.titleRef.current.value = '';
            this.textRef.current.value = '';
            this.props.onAddPost(posts);
        }
    }

    render(){
        return(
            <div className="AddPost">
                <h2>Добавьте новый пост:</h2>
                <label>
                    Ввведите заголовок <input className="AddPostTitle" ref={this.titleRef} type="text" placeholder="Заголовок"/>
                </label>
                <label>
                    Ввведите текст <textarea className="AddPostText" ref={this.textRef} placeholder="Текст"></textarea>
                </label>
                <button className="AddPostButton"  onClick={this.addPost}>Send</button>
            </div>
        );
    }
}


//module.exports ={Post :Post, AddPost: AddPost};