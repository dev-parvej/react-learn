import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Post from './Post'

class Posts extends React.Component {
    constructor(props){
        super(props);
        document.title = "Home"
    }
    state = {
        posts: [],
        loading: true
    }

    render(){
        let { classes } = this.props
        let posts = this.state.loading ? 
                <div>Loading...</div> : 
                this.state.posts.map((post) => {
                    return (
                        <Post
                        component={ NavLink }
                        to={ "/posts/"+post.id } 
                        key={post.id}
                        classes={classes} 
                        post={ post } 
                        />
                    )
                });

        return(
            <React.Fragment>
                { posts }
            </React.Fragment>
        );
    }
    componentDidMount(){
        axios.get("http://localhost:1208/").then((result) => {
            this.setState({
                loading: false,
                posts: result.data
            });
        }).catch((err) => {
            console.log(err);
        });
    }
}

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 'auto',
        backgroundColor: theme.palette.background.paper,
        textDecoration: 'none'
    },
    inline: {
        display: 'inline',
    },
});

export default withStyles(styles)(Posts);