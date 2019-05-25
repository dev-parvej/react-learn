import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

class Post extends React.Component{
    render(){
        let classes = this.props.classes;
        let post = this.props.post;
        return(
            <List className={classes.root} component={ this.props.component } to={ this.props.to }>
                <ListItem alignItems="flex-start">
                <ListItemText
                    primary={ post.title }
                    secondary={
                    <React.Fragment>
                        <Typography component="span" className={classes.inline} color="textPrimary">
                        Akash
                        </Typography>
                        &nbsp;{ post.description.substr(0, 30) }
                    </React.Fragment>
                    }
                />
                </ListItem>
            </List>
        );
    }
}

export default Post;