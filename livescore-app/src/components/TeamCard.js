import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './styles.module.css';
import firebase from 'firebase';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

  cardTop: {
    height: '50px'
  },

  delIcon: {
    position: 'relative',
    top: '8px',
    // right: '0px'
  }

}));


const TeamCard = ({team, logo, id, onDelete}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleOnDeleteClick = () => {
    const currentUser = firebase.auth().currentUser

    fetch(`https://livescore-app-8a845.firebaseio.com/${currentUser.uid}/${id}.json`, {
            method: 'DELETE'
    })
    .then(() => {
          onDelete();
        })
  }
  

  return (
    <Card className={classes.root} className={styles.teamCard}>
      <CardHeader
        action={
          <IconButton aria-label="delete from favourites" className={classes.delIcon}>
            <DeleteIcon onClick = {handleOnDeleteClick} />
          </IconButton>
        }
        title={team}
        className={classes.cardTop}
      />

      
      <CardMedia
        className={classes.media}
        style = {{width : '55%', position: 'relative', left: '60px'}}
        image={logo}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            <div className={styles.cardBottomFav}>
              <div className={styles.icons}>
              </div>
            </div>

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
              <IconButton
        
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              > 
                <ExpandMoreIcon />
              </IconButton>
        
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Last five games:  </Typography>
          <Typography paragraph>
              {team}
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}

export default TeamCard;