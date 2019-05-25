import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './image'

class Home extends React.Component {
    sendToRoute = (id) => {
        this.props.history.push({
            pathname: '/image/'+id
        });
    }
    render() {
        return (
            <div className={this.props.root}>
                <GridList cols={3}>
                    {tileData().map(tile => (
                        <GridListTile
                         key={tile.id}
                         height={tile.height} 
                         onClick={() => this.sendToRoute(tile.id)}
                         >
                            <img src={tile.download_url} alt={tile.author} height={tile.height} width={tile.width} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    }
});

export default withStyles(styles)(Home);