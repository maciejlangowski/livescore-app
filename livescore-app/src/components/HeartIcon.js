import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import { red, grey } from '@material-ui/core/colors';
import styles from './styles.module.css'
import firebase from 'firebase';

class HeartIcon extends React.Component {
    state = {
        isAdded: false,
        editId: null
    }
    

    onClickHandler = () => {
        const currentUser = firebase.auth().currentUser;

        if(!this.state.isAdded) {
            let databaseRef = firebase.database().ref(currentUser.uid).push();
      
                databaseRef.set({
                  'team': this.props.team,
                  'logo': this.props.logo,
                  'team_id' : this.props.id
                }) 
            
            this.setState({
                isAdded: true
            })
        } 
        // else {
        //         fetch(`https://livescore-app-8a845.firebaseio.com/${currentUser.uid}.json`, {
        //             method: 'DELETE'
        //     }).then(
        //         this.setState({
        //             isAdded: false
        //         })
        //     )} 
    }

    favColor = () => {
        if(this.state.isAdded) {
            return red[500]
        } else {
            return grey[500]
        }   
    }

    render() {
        return (
            <IconButton aria-label="add to favorites" className={styles.favIcon}>
              <FavoriteIcon
                style={{ color: this.favColor() }}
                onClick={this.onClickHandler}
                fontSize='small'
              />
          </IconButton>
        )
    }
}

export default HeartIcon;