import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import HeartIcon from './HeartIcon';
import Paper from '@material-ui/core/Paper';
import styles from './styles.module.css'

class Livescores extends React.Component {
    state = {
        games: []
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
                    games: gameData
                })
        })
    }

    componentDidMount() {
        this.fetchData();

        setInterval(() =>{
            this.fetchData()
            console.log('updated')
        }, 15000)
    }

    render() {
        return (
            <div className = {styles.livescoreTable}>
                <div className = {styles.headerDiv}>
                    <h1>Livescores </h1>
                </div>
                <Paper elevation={10}>
                    <Table>
                        <TableBody>
                            <TableRow className = {styles.leagueName}>Premier League 󠁧󠁢󠁥󠁮󠁧🏴󠁧󠁢󠁥󠁮󠁧󠁿</TableRow>
                            {
                                this.state.games.map(game => game.league.name === "Premier League" && game.league.country === "England"
                                    ? <TableRow>
                                            <TableCell>
                                                <HeartIcon 
                                                    team = {game.homeTeam.team_name}
                                                />
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
                                                <HeartIcon 
                                                    team = {game.awayTeam.team_name}
                                                />
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
                                                <HeartIcon 
                                                    team = {game.homeTeam.team_name}
                                                />
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
                                                <HeartIcon 
                                                    team = {game.awayTeam.team_name}
                                                />
                                            </TableCell>
                                        </TableRow>
                                        : ''
                                    
                                )
                            }                 
                            <TableRow className = {styles.leagueName}>La Liga 🇪🇸</TableRow>
                            {
                                this.state.games.map(game => game.league.name === "Primera Division" && game.league.country === "Spain"
                                    ? <TableRow>
                                            <TableCell>
                                                <HeartIcon 
                                                    team = {game.homeTeam.team_name}
                                                />
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
                                                <HeartIcon 
                                                    team = {game.awayTeam.team_name}
                                                />
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
                                                <HeartIcon 
                                                    team = {game.homeTeam.team_name}
                                                />
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
                                                <HeartIcon 
                                                    team = {game.awayTeam.team_name}
                                                />
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
                                                <HeartIcon 
                                                    team = {game.homeTeam.team_name}
                                                />
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
                                                <HeartIcon 
                                                    team = {game.awayTeam.team_name}
                                                />
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
                                                <HeartIcon 
                                                    team = {game.homeTeam.team_name}
                                                />
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
                                                <HeartIcon 
                                                    team = {game.awayTeam.team_name}
                                                />
                                            </TableCell>
                                        </TableRow>
                                        : ''
                                    
                                )
                            }                 
                        </TableBody>
                    </Table>
                </Paper>
                
                        
            </div>
            
        )
    }
}

export default Livescores;