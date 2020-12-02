import React from 'react';

import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles.module.css';

import HeartIcon from './HeartIcon'
import AuthIcons from './AuthIcons';
import PageWrapper from './Pagewrapper';
import StandingsIcon from './StandingsIcon';

class Livescores extends React.Component {
    state = {
        games: [],
        isLoading: true
    }

    fetchData = () => {
    //     fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/live", { //wszystkie mecze, które są na żywo
	//         "method": "GET",
	//         "headers": {
    //             "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    //             "x-rapidapi-key": "9dc5870a2bmsh0321b9ac9194ae8p194d54jsn157016b7cf80"
	//         }
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             const formattedData = Object.keys(data)
    //                 .map(key => {
    //                     return {
    //                         id: key,
    //                         ...data[key]
    //                     }
    //                 })
                
    //             const gameData = formattedData[0].fixtures

                this.setState({
                    // games: gameData,
                    isLoading: false
                })  
        // })
    }

    componentDidMount() {
        this.fetchData();

        // setInterval(() => {
        //     this.fetchData()
        // }, 15000)
    }

    leagues = [
        {name:'Premier League', country:'England', flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', id: 2790},
        {name:'Ligue 1', country:'France', flag:'🇫🇷', id: 2664},
        {name:'Primera Division', country:'Spain', flag:'🇪🇸', id: 2833},
        {name:'Bundesliga 1', country:'Germany', flag:'🇩🇪', id: 2755},
        {name:'Ekstraklasa', country:'Poland', flag:'🇵🇱', id: 2680},
        {name:'I Liga', country:'Poland', flag:'🇵🇱', id: 2742},
        {name:'Serie A', country:'Italy', flag:'🇮🇹', id: 2857},
        {name:'Champions League', country:'World', flag:'🇪🇺', id: 2771},
        {name:'Europa League', country:'World', flag:'🇪🇺', id: 2777},
        {name:'Nations League', country:'World', flag:'🇪🇺', id: 1422},
    ]

    render() {
        return (
            <div className = {styles.livescoreTable}>
                <div className = {styles.headerDiv}>
                    <h1>LIVESCORES</h1>
                </div>
                {
                    this.state.isLoading
                    ? <PageWrapper><CircularProgress size='150px' /> </PageWrapper>
                    : <Paper elevation={10} className={styles.paper}>
                            {
                                this.leagues.map((league) => {
                                    return(
                                        <div>
                                            <div className = {styles.tableTop}>
                                                <div className = {styles.leagueName}>{league.flag} {league.name}</div>
                                                <StandingsIcon leagueId = {league.id}/>
                                            </div>
                                        {
                                            this.state.games.map(game => game.league_id === league.id 
                                            ? <div className = {styles.gameRow}>
                                                <AuthIcons>
                                                        <HeartIcon 
                                                            team = {game.homeTeam.team_name}
                                                            logo = {game.homeTeam.logo}
                                                            id = {game.homeTeam.team_id}
                                                        />
                                                </AuthIcons>
                                                <div className={styles.hometeamName}>{game.homeTeam.team_name}</div>
                                                <div className = {styles.homeLogo}>
                                                    <img src = {game.homeTeam.logo} alt = {game.homeTeam.team_name} className = {styles.teamLogo}/>
                                                </div>
                                                <div className={styles.score}>
                                                    {game.goalsHomeTeam} : {game.goalsAwayTeam} <br/>
                                                     {game.elapsed}'
                                                </div>
                                                <div className = {styles.awayLogo}>
                                                    <img src = {game.awayTeam.logo} alt = {game.awayTeam.team_name} className = {styles.teamLogo}/>
                                                </div>
                                                <div className={styles.awayteamName}>{game.awayTeam.team_name}</div>
                                                <AuthIcons>
                                                    <HeartIcon 
                                                        team = {game.awayTeam.team_name}
                                                        logo = {game.awayTeam.logo}
                                                        id = {game.awayTeam.team_id}
                                                    />
                                                </AuthIcons>
                                            </div>
                                            : ''
                                            )
                                        }
                                        </div>
                                    )
                                })
                            }
                    </Paper>
                }
            </div>
        )
    }
}

export default Livescores;