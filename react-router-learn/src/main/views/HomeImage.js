import React from 'react'
import image from './image'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const homeImage =  (props) => {
    const { classes, match } = props;
    let getImage = image(match.params.id);
    return (
        <React.Fragment>
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={getImage.download_url}
                    title={ getImage.author }
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        { getImage.author }
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
        </React.Fragment>
    )
}

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


export default withStyles(styles)(homeImage);