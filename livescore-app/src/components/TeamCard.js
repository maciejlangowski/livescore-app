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
    top: '10px',
    // right: '0px'
  }

}));

let gamesArray ;
let games;

const TeamCard = ({team, logo, id, onDelete, team_id}) => {
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


    fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/team/${team_id}/last/5?timezone=Europe%2FWarsaw`, {
	    "method": "GET",
	    "headers": {
		      "x-rapidapi-key": "de72cb93f1msh79eed2358f04a0ap1d0820jsndaca24b70bf1",
		      "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
	      }
    })
      .then(response => response.json())
      .then(data => {
          const formattedData = Object.keys(data)
              .map(key => {
                  return {
                      id: key,
                      ...data[key]
                  }
              });
            
              gamesArray = formattedData[0].fixtures
              
              games = gamesArray.map((game) => {
                return (
                  <div className={styles.lastFive}>
                      <div className={styles.eventDate}>{game.event_date.slice(5,10)}</div>
                      <img src = {game.homeTeam.logo} alt = {game.homeTeam.team_name} className = {styles.teamLogo}/>
                      vs.
                      <img src = {game.awayTeam.logo} alt = {game.awayTeam.team_name} className = {styles.teamLogo}/>
                      {game.goalsHomeTeam}:{game.goalsAwayTeam}
                  </div>
                )
              })
            })
  
  

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
        style = {{width : '56%', margin: 'auto'}}
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
              {games}
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}

export default TeamCard;