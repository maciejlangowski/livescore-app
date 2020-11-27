import React from "react";
import TeamCard from './TeamCard';
import styles from './styles.module.css';
import Auth from './Auth';
import PageWrapper from './Pagewrapper'
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import firebase from 'firebase';

class MyTeams extends React.Component {
        state = {
            favouriteList: [],
            editId: null,
            isLoading: true
        }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.getFavourites();
            }
        })
    }
    
    getFavourites = () => {
        const currentUser = firebase.auth().currentUser

        fetch(`https://livescore-app-8a845.firebaseio.com/${currentUser.uid}.json`)
            .then(response => response.json())
            .then(favourites => {
                const arrayFavourites = favourites
                    ? Object
                        .keys(favourites)
                        .map(key => {
                            return {
                                id: key,
                                ...favourites[key]
                            }
                        })
                    : []
        
                this.setState( {
                    favouriteList: arrayFavourites,
                    isLoading: false
                })
            })
    }

    render() {
        return (  
            <Auth>
                <div className={styles.signInContainer}>
                    <div className = {styles.headerDiv}>
                        <h1>FAVOURITE TEAMS</h1>
                    </div>
                </div>
                       
                {
                    this.state.isLoading 
                    ? <PageWrapper><CircularProgress size='150px' /> </PageWrapper>
                    : <div>
                        <div className={styles.favouriteTeamList}>
                        {
                            this.state.favouriteList
                                .map(team => team.id === this.state.editId
                                    ? ""
                                    : (
                                        
                                        <TeamCard
                                            className={styles.teamCard}
                                            key={team.id}
                                            title={team.name}
                                            onDelete={this.getFavourites}
                                            {...team}
                                        />
                                    )
                                )         
                        } 
                        </div>
                        {
                            this.state.favouriteList.length === 0 
                            ? <PageWrapper>
                                <Paper className={styles.paper}>
                                    <h1>
                                        It looks like you don't have any favourite teams. <br/>
                                        If you want, you can add them by clicking the heart <br/>
                                        next to your team. Try it now!
                                    </h1>
                                </Paper>
                                
                            </PageWrapper>
                            
                            : <h2></h2>
                        }
                    </div>
                       
                }
                
            </Auth>
        )
    }  
}

export default MyTeams;