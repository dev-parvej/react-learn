import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
    card: {
        maxWidth: '100%',
        width: '100%'
    },
    media: {
        height: 'auto',
        minHeight: '400px'
    },
};

function about(props) {
    console.log(props);
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://picsum.photos/id/100/2500/1656"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        About page
                    </Typography>
                    <Typography component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

export default withStyles(styles)(about);