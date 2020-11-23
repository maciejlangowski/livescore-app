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
let dateChanged = new Date(dateToday);

class Schedule extends React.Component {
    state = {
        games: [],
        isLoading: true,
        date: dateToday,
        day: 0
    }

    fetchData = () => {

        let day = this.state.date.getDate();
        let month = this.state.date.getMonth()+1;
        let year = this.state.date.getFullYear();

        let date = `${year}-${month}-${day}`;

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
                    // this.setState({
                    //     isLoading: false
                    // })
    }

    componentDidMount() {
        this.fetchData();
    }

    minusOneDay = () => { 
        this.setState({
            day: -1,
            date: dateChanged,
            isLoading: true
        })
        dateChanged.setDate(dateChanged.getDate() + this.state.day);
        console.log(this.state.date)
        this.fetchData();
    }

    plusOneDay = () => {       
        this.setState({
            day: 1,
            date: dateChanged,
            isLoading: true
        })
        dateChanged.setDate(dateChanged.getDate() + this.state.day)
        console.log(this.state.date)
        this.fetchData();
    }

    goToToday = () => {
        this.setState({
            date: dateToday,
            isLoading: true
        })
        dateChanged = new Date()
        this.fetchData();
        console.log(this.state.date)
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
                    <h1>SCHEDULE</h1>
                </div>
                {
                    this.state.isLoading
                    ? <PageWrapper><CircularProgress size='350px' /> </PageWrapper>
                    : <Paper elevation={10} className={styles.paperSchedule}>
                        <div className={styles.dateDiv}>
                            {
                                this.state.date > dateToday 
                                ? <Button variant='contained'>
                                    <ArrowBackIcon fontSize='small' onClick={this.minusOneDay} /> 
                                </Button>
                                : <Button variant='contained' disabled>
                                <ArrowBackIcon fontSize='small'/> 
                            </Button>
                            }
                            
                            <div className={styles.date}>
                                {this.state.date.getDate()}/{this.state.date.getMonth()+1}/{this.state.date.getFullYear()}
                            </div>
                            
                                <Button variant='contained'>
                                    <ArrowForwardIcon fontSize='small' onClick={this.plusOneDay}  /> 
                                </Button>
                        </div>
                        <div className = {styles.todayButton}>
                            <Button variant='contained' onClick={this.goToToday}>Go to today</Button>
                        </div>
                            {
                                this.leagues.map((league) => {
                                    return(
                                        <div>
                                            <div className = {styles.tableTop}>
                                                <div className = {styles.leagueName}>{league.flag} {league.name}</div>
                                                <StandingsIcon leagueId = {league.id}/>
                                            </div>
                                        {
                                            this.state.games.map(game => game.league_id === league.id && game.statusShort === 'NS'
                                            ? <div className = {styles.scheduleRow}>
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
                                                <div className={styles.scheduleTime}>
                                                    {
                                                        game.event_date.slice(11,16) 
                                                    }
                                                    {/* <br/>
                                                    {
                                                        game.venue && game.venue.slice(0,25)
                                                    } */}
                                                </div>
                                                <div className = {styles.awayLogo}>
                                                    <img src = {game.awayTeam.logo} alt = {game.awayTeam.team_name} className = {styles.teamLogo}/>
                                                </div>
                                                <div className={styles.awayteamName}>{game.awayTeam.team_name}</div>
                                                <AuthIcons>
                                                    <HeartIcon 
                                                        team = {game.awayTeam.team_name}
                                                        logo = {game.awayTeam.logo}
                                                        id = {game.homeTeam.team_id}
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

export default Schedule;