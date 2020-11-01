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

        // setInterval(() =>{
        //     this.fetchData()
        // }, 15000)
    }

    render() {
        return (
            <div className = {styles.livescoreTable}>
                <div className = {styles.headerDiv}>
                    <h1>⚽️ Livescores ️⚽️</h1>
                </div>
                {
                    this.state.isLoading
                    ? <PageWrapper><CircularProgress size='350px' /> </PageWrapper>
                    : <Paper elevation={10} className={styles.paper}>
                            <Table>
                                <TableBody>
                                    <TableRow className = {styles.leagueName}>Premier League 󠁧󠁢󠁥󠁮󠁧🏴󠁧󠁢󠁥󠁮󠁧󠁿</TableRow>
                                    {
                                        this.state.games.map(game => game.league.name === "Premier League" && game.league.country === "England"
                                            ? <TableRow>
                                                    <TableCell>
                                                        <AuthIcons>
                                                            <HeartIcon 
                                                                team = {game.homeTeam.team_name}
                                                                logo = {game.homeTeam.logo}
                                                            />
                                                        </AuthIcons>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.teamName}>{game.homeTeam.team_name}</div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <img src = {game.homeTeam.logo} alt = "" className = {styles.teamLogo}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.score}>
                                                            {game.goalsHomeTeam} : {game.goalsAwayTeam} <br/>
                                                            {game.elapsed}'
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <img src = {game.awayTeam.logo} className = {styles.teamLogo}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.teamName}>{game.awayTeam.team_name}</div>
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
                                
                                    <TableRow className = {styles.leagueName}>League 1 🇫🇷</TableRow>
                                    {
                                        this.state.games.map(game => game.league.name === "Ligue 1" && game.league.country === "France"
                                            ? <TableRow>
                                                    <TableCell>
                                                        <AuthIcons>
                                                            <HeartIcon 
                                                                team = {game.homeTeam.team_name}
                                                                logo = {game.homeTeam.logo}
                                                            />
                                                        </AuthIcons>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.teamName}>{game.homeTeam.team_name}</div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <img src = {game.homeTeam.logo} alt = "" className = {styles.teamLogo}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.score}>
                                                            {game.goalsHomeTeam} : {game.goalsAwayTeam} <br/>
                                                            {game.elapsed}'
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <img src = {game.awayTeam.logo} className = {styles.teamLogo}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.teamName}>{game.awayTeam.team_name}</div>
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
                                    <TableRow className = {styles.leagueName}>Primera Division 🇪🇸</TableRow>
                                    {
                                        this.state.games.map(game => game.league.name === "Primera Division" && game.league.country === "Spain"
                                            ? <TableRow>
                                                    <TableCell>
                                                        <AuthIcons>
                                                            <HeartIcon 
                                                                team = {game.homeTeam.team_name}
                                                                logo = {game.homeTeam.logo}
                                                            />
                                                        </AuthIcons>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.teamName}>{game.homeTeam.team_name}</div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <img src = {game.homeTeam.logo} alt = "" className = {styles.teamLogo}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.score}>
                                                            {game.goalsHomeTeam} : {game.goalsAwayTeam} <br/>
                                                            {game.elapsed}'
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <img src = {game.awayTeam.logo} className = {styles.teamLogo}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.teamName}>{game.awayTeam.team_name}</div>
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
                                                
                                    <TableRow className = {styles.leagueName}>Bundesliga 🇩🇪</TableRow>
                                    {
                                        this.state.games.map(game => game.league.name === "Bundesliga" && game.league.country === "Germany"
                                            ? <TableRow>
                                                    <TableCell>
                                                        <AuthIcons>
                                                            <HeartIcon 
                                                                team = {game.homeTeam.team_name}
                                                                logo = {game.homeTeam.logo}
                                                            />
                                                        </AuthIcons>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.teamName}>{game.homeTeam.team_name}</div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <img src = {game.homeTeam.logo} alt = "" className = {styles.teamLogo}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.score}>
                                                            {game.goalsHomeTeam} : {game.goalsAwayTeam} <br/>
                                                            {game.elapsed}'
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <img src = {game.awayTeam.logo} className = {styles.teamLogo}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.teamName}>{game.awayTeam.team_name}</div>
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
                                                
                                    <TableRow className = {styles.leagueName}>Ekstraklasa 🇵🇱</TableRow>
                                    {
                                        this.state.games.map(game => game.league.name === "Ekstraklasa" && game.league.country === "Poland"
                                            ? <TableRow>
                                                    <TableCell>
                                                        <AuthIcons>
                                                            <HeartIcon 
                                                                team = {game.homeTeam.team_name}
                                                                logo = {game.homeTeam.logo}
                                                            />
                                                        </AuthIcons>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.teamName}>{game.homeTeam.team_name}</div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <img src = {game.homeTeam.logo} alt = "" className = {styles.teamLogo}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.score}>
                                                            {game.goalsHomeTeam} : {game.goalsAwayTeam} <br/>
                                                            {game.elapsed}'
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <img src = {game.awayTeam.logo} className = {styles.teamLogo}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.teamName}>{game.awayTeam.team_name}</div>
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
                                    
                                <TableRow className = {styles.leagueName}>Serie A 🇮🇹</TableRow>
                                            
                                    {
                                        this.state.games.map(game => game.league.name === "Serie A" && game.league.country === "Italy"
                                            ? <TableRow>
                                                    <TableCell>
                                                        <AuthIcons>
                                                            <HeartIcon 
                                                                team = {game.homeTeam.team_name}
                                                                logo = {game.homeTeam.logo}
                                                            />
                                                        </AuthIcons>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.teamName}>{game.homeTeam.team_name}</div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <img src = {game.homeTeam.logo} alt = "" className = {styles.teamLogo}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.score}>
                                                            {game.goalsHomeTeam} : {game.goalsAwayTeam} <br/>
                                                            {game.elapsed}'
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <img src = {game.awayTeam.logo} className = {styles.teamLogo}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.teamName}>{game.awayTeam.team_name}</div>
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

                                    <TableRow className = {styles.leagueName}>UEFA Champions League 󠁧󠁢󠁥󠁮󠁧󠁧󠁢󠁥󠁮󠁧🇪🇺</TableRow>
                                    {
                                        this.state.games.map(game => game.league.name === "UEFA Champions League"
                                            ? <TableRow>
                                                    <TableCell>
                                                        <AuthIcons>
                                                            <HeartIcon 
                                                                team = {game.homeTeam.team_name}
                                                                logo = {game.homeTeam.logo}
                                                            />
                                                        </AuthIcons>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.teamName}>{game.homeTeam.team_name}</div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <img src = {game.homeTeam.logo} alt = "" className = {styles.teamLogo}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.score}>
                                                            {game.goalsHomeTeam} : {game.goalsAwayTeam} <br/>
                                                            {game.elapsed}'
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <img src = {game.awayTeam.logo} className = {styles.teamLogo}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.teamName}>{game.awayTeam.team_name}</div>
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
                                
                                    <TableRow className = {styles.leagueName}>UEFA Europa League 󠁧󠁢󠁥󠁮󠁧󠁧󠁢󠁥󠁮󠁧🇪🇺</TableRow>
                                    {
                                        this.state.games.map(game => game.league.name === "UEFA Europa League"
                                            ? <TableRow>
                                                    <TableCell>
                                                        <AuthIcons>
                                                            <HeartIcon 
                                                                team = {game.homeTeam.team_name}
                                                                logo = {game.homeTeam.logo}
                                                            />
                                                        </AuthIcons>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.teamName}>{game.homeTeam.team_name}</div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <img src = {game.homeTeam.logo} alt = "" className = {styles.teamLogo}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.score}>
                                                            {game.goalsHomeTeam} : {game.goalsAwayTeam} <br/>
                                                            {game.elapsed}'
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <img src = {game.awayTeam.logo} className = {styles.teamLogo}/>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className={styles.teamName}>{game.awayTeam.team_name}</div>
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
                            </Table>
                        </Paper>
                }
            </div>
        )
    }
}

export default Livescores;