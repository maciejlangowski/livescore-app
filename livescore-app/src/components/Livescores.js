import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import HeartIcon from './HeartIcon';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles.module.css';

import AuthIcons from './AuthIcons';
import PageWrapper from './Pagewrapper';

class Livescores extends React.Component {
    state = {
        games: [],
        isLoading: true
    }

    fetchData = () => {
        fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/live", { //wszystkie mecze, które są na żywo
	        "method": "GET",
	        "headers": {
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "9dc5870a2bmsh0321b9ac9194ae8p194d54jsn157016b7cf80"
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
                    })
                
                const gameData = formattedData[0].fixtures

                this.setState({
                    games: gameData,
                    isLoading: false
                })
        })
    }

    componentDidMount() {
        this.fetchData();

        // setInterval(() => {
        //     this.fetchData()
        // }, 15000)
    }

    leagues = [
        {name:'Premier League', country:'England', flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿'},
        {name:'Ligue 1', country:'France', flag:'🇫🇷'},
        {name:'Primera Division', country:'Spain', flag:'🇪🇸'},
        {name:'Bundesliga', country:'Germany', flag:'🇩🇪'},
        {name:'Ekstraklasa', country:'Poland', flag:'🇵🇱'},
        {name:'Serie A', country:'Italy', flag:'🇮🇹'},
        {name:'UEFA Champions League', country:'World', flag:'🇪🇺'},
        {name:'UEFA Europa League', country:'World', flag:'🇪🇺'},
    ]

    render() {
        return (
            <div className = {styles.livescoreTable}>
                <div className = {styles.headerDiv}>
                    <h1>Livescores ️⚽️</h1>
                </div>
                {
                    this.state.isLoading
                    ? <PageWrapper><CircularProgress size='350px' /> </PageWrapper>
                    : <Paper elevation={10} className={styles.paper}>
                        <Table padding='checkbox'>
                            {
                                this.leagues.map((league) => {
                                    return(
                                        <TableBody>
                                            <TableRow>
                                                <TableCell><div className = {styles.leagueName}>{league.name}</div></TableCell>
                                                <TableCell><div className = {styles.leagueName}>{league.flag}</div></TableCell>
                                            </TableRow>
                                            {
                                                this.state.games.map(game => game.league.name === league.name && game.league.country === league.country
                                                ? <TableRow>
                                                        <TableCell>
                                                            <AuthIcons>
                                                                <div className={styles.heart}>
                                                                    <HeartIcon 
                                                                        team = {game.homeTeam.team_name}
                                                                        logo = {game.homeTeam.logo}
                                                                    />
                                                                </div>
                                                            </AuthIcons>
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className={styles.hometeamName}>{game.homeTeam.team_name}</div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className = {styles.homeLogo}>
                                                                <img src = {game.homeTeam.logo} alt = {game.homeTeam.team_name} className = {styles.teamLogo}/>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className={styles.score}>
                                                                {game.goalsHomeTeam} : {game.goalsAwayTeam} <br/>
                                                                {game.elapsed}'
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <img src = {game.awayTeam.logo} alt = {game.awayTeam.team_name} className = {styles.teamLogo}/>
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className={styles.awayteamName}>{game.awayTeam.team_name}</div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <AuthIcons>
                                                                <HeartIcon 
                                                                    team = {game.awayTeam.team_name}
                                                                    logo = {game.awayTeam.logo}
                                                                />
                                                            </AuthIcons>
                                                        </TableCell>
                                                    </TableRow>
                                                : ''
                                                )
                                            }
                                        </TableBody>
                                    )
                                })
                            }
                        </Table>
                    </Paper>
                }
            </div>
        )
    }
}

export default Livescores;