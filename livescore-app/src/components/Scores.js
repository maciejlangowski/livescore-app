import React from 'react';

import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button'
import styles from './styles.module.css';

import HeartIcon from './HeartIcon'
import AuthIcons from './AuthIcons';
import PageWrapper from './Pagewrapper';
import StandingsIcon from './StandingsIcon';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

let dateToday = new Date();

class Scores extends React.Component {
    state = {
        games: [],
        isLoading: true,
        year: dateToday.getFullYear(),
        month: dateToday.getMonth()+1,
        day: dateToday.getDate(),
    }

    fetchData = () => {
        let date = `${this.state.year}-${this.state.month}-${this.state.day}`

        fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/${date}?timezone=Europe%2FWarsaw`, {
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

    }

    minusOneDay = () => { 
        this.setState({
            day: this.state.day -1,
            isLoading: true
        })

        console.log(this.state.day)
        this.fetchData();
    }

    plusOneDay = () => {       
        this.setState({
            day: this.state.day +1,
            isLoading: true
        })
  
        console.log(this.state.day)
        this.fetchData();
    }

    leagues = [
        {name:'Premier League', country:'England', flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', id: 2790},
        {name:'Ligue 1', country:'France', flag:'🇫🇷', id: 2664},
        {name:'Primera Division', country:'Spain', flag:'🇪🇸', id: 2833},
        {name:'Bundesliga 1', country:'Germany', flag:'🇩🇪', id: 2755},
        {name:'Ekstraklasa', country:'Poland', flag:'🇵🇱', id: 2680},
        {name:'I Liga', country:'Poland', flag:'🇵🇱', id: 2742},
        {name:'Serie A', country:'Italy', flag:'🇮🇹', id: 2857},
        {name:'UEFA Champions League', country:'World', flag:'🇪🇺', id: 2771},
        {name:'UEFA Europa League', country:'World', flag:'🇪🇺', id: 2777},
    ]

    render() {
        return (
            <div className = {styles.livescoreTable}>
                <div className = {styles.headerDiv}>
                    <h1>SCORES</h1>
                </div>
                {
                    this.state.isLoading
                    ? <PageWrapper><CircularProgress size='350px' /> </PageWrapper>
                    : <Paper elevation={10} className={styles.paper}>
                        <div className={styles.dateDiv}>
                            <Button>
                                <ArrowBackIcon fontSize='large' onClick={this.minusOneDay} /> 
                            </Button>
                            <div className={styles.date}>
                                {this.state.day}/{this.state.month}/{this.state.year}
                            </div>

                            <Button>
                                <ArrowForwardIcon fontSize='large' onClick={this.plusOneDay}  /> 
                            </Button>

                        </div>
                            {
                                this.leagues.map((league) => {
                                    return(
                                        <div>
                                            <div className = {styles.tableTop}>
                                                <div className = {styles.leagueName}>{league.flag} {league.country} - {league.name}</div>
                                                <StandingsIcon leagueId = {league.id}/>
                                            </div>
                                        {
                                            this.state.games.map(game => game.league.name === league.name && game.league.country === league.country && game.statusShort === 'FT'
                                            ? <div className = {styles.scoreRow}>
                                                <AuthIcons>
                                                        <HeartIcon 
                                                            team = {game.homeTeam.team_name}
                                                            logo = {game.homeTeam.logo}
                                                        />
                                                </AuthIcons>
                                                <div className={styles.hometeamName}>{game.homeTeam.team_name}</div>
                                                <div className = {styles.homeLogo}>
                                                    <img src = {game.homeTeam.logo} alt = {game.homeTeam.team_name} className = {styles.teamLogo}/>
                                                </div>
                                                <div className={styles.score}>
                                                    {game.goalsHomeTeam} : {game.goalsAwayTeam} <br/>
                                                </div>
                                                <div className = {styles.awayLogo}>
                                                    <img src = {game.awayTeam.logo} alt = {game.awayTeam.team_name} className = {styles.teamLogo}/>
                                                </div>
                                                <div className={styles.awayteamName}>{game.awayTeam.team_name}</div>
                                                <AuthIcons>
                                                    <HeartIcon 
                                                        team = {game.awayTeam.team_name}
                                                        logo = {game.awayTeam.logo}
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

export default Scores;