import React, {Component} from 'react';

export default class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
            post: this.props.item?this.props.item:{},
            posts:this.props.items?this.props.items:[]
        };
        this.addPost = this.addPost.bind(this);
        this.titleRef = React.createRef();
        this.textRef = React.createRef();

        switch (this.props.type) {
            case 'post':
                   this.html = <section>
                        <h2>{this.state.post.title}</h2>
                        <p>{this.state.post.postBody}</p>
                    </section>;
                break;
            case 'button':
                this.html =
                    <div>
                        <label>
                            Ввведите заголовок <input ref={this.titleRef} type="text" placeholder="Заголовок"/>
                        </label>
                        <label>
                            Ввведите текст <textarea ref={this.textRef} placeholder="Текст"></textarea>
                        </label>
                        <button onClick={this.addPost}>Send</button>
                    </div>;
                break;
        }

    }



    addPost(){
        console.log(this.state.posts);
        const titleText= this.titleRef.current.value;
        const postText= this.textRef.current.value;
        const posts = [...this.state.posts, {title:titleText, postBody: postText}];
        this.setState({
            posts
        });
        //this.setState({newPost:true})
    }












  
  
  

    render() {
        return(
                <div>
                    {this.html}
                </div>
        );
    }
}
