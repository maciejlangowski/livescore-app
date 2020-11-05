import React from 'react';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import PageWrapper from './Pagewrapper';
import HeartIcon from './HeartIcon';
import AuthIcons from './AuthIcons';
import styles from './styles.module.css';
import { leagueID } from './StandingsIcon';

class Standings extends React.Component {
    state = {
        standings: [],
        isLoading: true
    }

    fetchData = () => {
        const id = leagueID;
        fetch(`https://rapidapi.p.rapidapi.com/v2/leagueTable/${id}`, { 
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
                
                const standingsData = formattedData[0].standings[0]
                console.log(standingsData)

                this.setState({
                    standings: standingsData,
                    isLoading: false
                })
        })
    }

    componentDidMount() {
        this.fetchData()
    }

    // leagues = [
    //     {name:'Premier League', id: 524},
    //     {name:'Ligue 1', id:1},
    //     {name:'Primera Division', id:1},
    //     {name:'Bundesliga', id:1},
    //     {name:'Ekstraklasa', id:1},
    //     {name:'Serie A', id:1},
    //     {name:'UEFA Champions League', id:1},
    //     {name:'UEFA Europa League', id:1},
    // ]

    render() {
        return (
            <div className = {styles.livescoreTable}>
                <div className = {styles.headerDiv}>
                    <h1>STANDINGS</h1>
                </div>
                {
                    this.state.isLoading
                    ? <PageWrapper><CircularProgress size='350px' /> </PageWrapper>
                    : <Paper elevation={10} className={styles.paperStandings}>
                        <div className = {styles.standingsTableTop}>
                            <div className = {styles.standingsLeagueName}>{this.state.standings[0].group}</div>
                        </div>
                        <Table padding='checkbox' size='small'>
                            <TableHead>
                                <TableRow>
                                    <TableCell><div className={styles.standingsCell}>#</div></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell><div className={styles.standingsCell}>GP</div></TableCell>
                                    <TableCell><div className={styles.standingsCell}>W</div></TableCell>
                                    <TableCell><div className={styles.standingsCell}>D</div></TableCell>
                                    <TableCell><div className={styles.standingsCell}>L</div></TableCell>
                                    <TableCell><div className={styles.standingsCell}>Goals</div></TableCell>
                                    <TableCell><div className={styles.standingsCell}>Pts</div></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.standings.map((team) => {
                                        return (
                                            <TableRow>
                                                <TableCell>{team.rank}</TableCell>
                                                <TableCell>
                                                    <img src = {team.logo} alt = {team.teamName} className = {styles.teamLogo}/>
                                                </TableCell>
                                                <TableCell><div className={styles.standingsCell}>{team.teamName}</div></TableCell>
                                                <TableCell><div className={styles.standingsCell}>{team.all.matchsPlayed}</div></TableCell>
                                                <TableCell><div className={styles.standingsCell}>{team.all.win}</div></TableCell>
                                                <TableCell><div className={styles.standingsCell}>{team.all.draw}</div></TableCell>
                                                <TableCell><div className={styles.standingsCell}>{team.all.lose}</div></TableCell>
                                                <TableCell><div className={styles.standingsCell}>{team.all.goalsFor} : {team.all.goalsAgainst}</div></TableCell>
                                                <TableCell><div className={styles.standingsCell}>{team.points}</div></TableCell>
                                                <TableCell>
                                                    <AuthIcons>
                                                        <HeartIcon 
                                                            team = {team.teamName}
                                                            logo = {team.logo}
                                                        />
                                                    </AuthIcons>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </Paper>
                }
            </div>
        )
    }
}

export default Standings;