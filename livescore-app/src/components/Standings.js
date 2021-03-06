import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PageWrapper from './Pagewrapper';
import HeartIcon from './HeartIcon';
import AuthIcons from './AuthIcons';
import styles from './styles.module.css';
import { leagueID } from './StandingsIcon';

// class Standings extends React.Component {
//     state = {
//         standings: [],
//         isLoading: true,
//         id: leagueID
//     }

//     fetchData = () => {
//         fetch(`https://rapidapi.p.rapidapi.com/v2/leagueTable/${this.state.id}`, { 
// 	        "method": "GET",
// 	        "headers": {
//                 "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//                 "x-rapidapi-key": "9dc5870a2bmsh0321b9ac9194ae8p194d54jsn157016b7cf80"
// 	        }
//         })
//             .then(response => response.json())
//             .then(data => {
//                 const formattedData = Object.keys(data)
//                     .map(key => {
//                         return {
//                             id: key,
//                             ...data[key]
//                         }
//                     })

//                 const standingsData = formattedData[0].standings

//                 this.setState({
//                     standings: standingsData,
//                     isLoading: false,
//                     id: leagueID
//                 })
//         })
//     }

//     componentDidMount() {
//         this.fetchData()
//     }

//     handleOnClick = () => {
//         window.history.back();
//     }

//     render() {
//         return (
//             <div className = {styles.livescoreTable}>
//                 <div className = {styles.headerDiv}>
//                     <h1>STANDINGS</h1>
//                 </div>
//                 {
//                     this.state.isLoading
//                     ? <PageWrapper><CircularProgress size='150px' /> </PageWrapper>
//                     : <Paper elevation={10} className={styles.paperStandings}>
//                     <div className = {styles.standingsTableTop}>
//                         <Button onClick = {this.handleOnClick} variant='contained'>
//                             <ArrowBackIcon fontSize='small'/>
//                         </Button>

//                         <div className = {styles.standingsLeagueName}>{this.state.standings[0][0].group}</div>
//                     </div>
//                             <div className={styles.standingsRow}>
//                                 <div className={styles.standingsCell}>#</div>
//                                 <div className={styles.standingsCellTeamName}></div>
//                                 <div className={styles.standingsCell}></div>
//                                 <div className={styles.standingsCell}>GP</div>
//                                 <div className={styles.standingsCellToHide}>W</div>
//                                 <div className={styles.standingsCellToHide}>D</div>
//                                 <div className={styles.standingsCellToHide}>L</div>
//                                 <div className={styles.standingsCell}>Goals</div>
//                                 <div className={styles.standingsCell}>Pts</div>
//                                 <div className={styles.standingsCell}></div>

//                             </div>
//                             {
//                                 this.state.standings.map((groups) => {
//                                     return( 
//                                         groups.map((team) => {
//                                             return(
//                                                 <div className={styles.standingsRow}>
//                                                     <div className={styles.standingsCell}>{team.rank}.</div>
//                                                     <div className={styles.standingsCell}>
//                                                         <img src = {team.logo} alt = {team.teamName} className = {styles.teamLogoStandings}/>  
//                                                     </div>
//                                                     <div className={styles.standingsCellTeamName}>{team.teamName}</div>
//                                                     <div className={styles.standingsCell}>{team.all.matchsPlayed}</div>
//                                                     <div className={styles.standingsCellToHide}>{team.all.win}</div>
//                                                     <div className={styles.standingsCellToHide}>{team.all.draw}</div>
//                                                     <div className={styles.standingsCellToHide}>{team.all.lose}</div>
//                                                     <div className={styles.standingsCell}>{team.all.goalsFor} : {team.all.goalsAgainst}</div>
//                                                     <div className={styles.standingsCell}>{team.points}</div>
//                                                     <AuthIcons>
//                                                         <HeartIcon 
//                                                             team = {team.teamName}
//                                                             logo = {team.logo}
//                                                             id = {team.team_id}
//                                                         />
//                                                     </AuthIcons>
//                                                 </div>
//                                             )
//                                         })
//                                     )
//                                 })
//                             }
//                 </Paper>
//                 }
//             </div>
//         )
//     }
// }

// export default Standings;


class Standings extends React.Component {
    state = {
        standings: [],
        isLoading: true,
        id: leagueID
    }

    fetchData = () => {
        fetch(`https://rapidapi.p.rapidapi.com/v2/leagueTable/${this.state.id}`, { 
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

                const standingsData = formattedData[0].standings

                this.setState({
                    standings: standingsData,
                    isLoading: false,
                    id: leagueID
                })
        })
    }

    componentDidMount() {
        this.fetchData()
    }

    handleOnClick = () => {
        window.history.back();
    }

    render() {
        return (
            <div className = {styles.livescoreTable}>
                <div className = {styles.headerDiv}>
                    <h1>STANDINGS</h1>
                </div>
                {
                    this.state.isLoading
                    ? <PageWrapper><CircularProgress size='150px' /> </PageWrapper>
                    : <Paper elevation={10} className={styles.paperStandings}>
                    <div className = {styles.standingsTableTop}>
                        <Button onClick = {this.handleOnClick} variant='contained'>
                            <ArrowBackIcon fontSize='small'/>
                        </Button>

                        <div className = {styles.standingsLeagueName}>{this.state.standings[0][0].group}</div>
                    </div>
                            <div className={styles.standingsRow}>
                                <div className={styles.standingsCell}>#</div>
                                <div className={styles.standingsCellTeamName}></div>
                                <div className={styles.standingsCell}></div>
                                <div className={styles.standingsCell}>GP</div>
                                <div className={styles.standingsCellToHide}>W</div>
                                <div className={styles.standingsCellToHide}>D</div>
                                <div className={styles.standingsCellToHide}>L</div>
                                <div className={styles.standingsCell}>Goals</div>
                                <div className={styles.standingsCell}>Pts</div>
                                <div className={styles.standingsCell}></div>

                            </div>
                            {   
                                this.state.standings.length === 1 
                                ? (
                                    this.state.standings[0].map((team) => {
                                        return(
                                            <div className={styles.standingsRow}>
                                                <div className={styles.standingsCell}>{team.rank}.</div>
                                                <div className={styles.standingsCell}>
                                                    <img src = {team.logo} alt = {team.teamName} className = {styles.teamLogoStandings}/>  
                                                </div>
                                                <div className={styles.standingsCellTeamName}>{team.teamName}</div>
                                                <div className={styles.standingsCell}>{team.all.matchsPlayed}</div>
                                                <div className={styles.standingsCellToHide}>{team.all.win}</div>
                                                <div className={styles.standingsCellToHide}>{team.all.draw}</div>
                                                <div className={styles.standingsCellToHide}>{team.all.lose}</div>
                                                <div className={styles.standingsCell}>{team.all.goalsFor} : {team.all.goalsAgainst}</div>
                                                <div className={styles.standingsCell}>{team.points}</div>
                                                <AuthIcons>
                                                    <HeartIcon 
                                                        team = {team.teamName}
                                                        logo = {team.logo}
                                                        id = {team.team_id}
                                                    />
                                                </AuthIcons>
                                            </div>
                                        )
                                     })
                                )
                                : (
                                    this.state.standings.map((groups) => {
                                        return( 
                                            <div className={styles.standingsRow}>
                                            <div className={styles.standingsCell}>#</div>
                                            <div className={styles.standingsCellTeamName}></div>
                                            <div className={styles.standingsCell}></div>
                                            <div className={styles.standingsCell}>GP</div>
                                            <div className={styles.standingsCellToHide}>W</div>
                                            <div className={styles.standingsCellToHide}>D</div>
                                            <div className={styles.standingsCellToHide}>L</div>
                                            <div className={styles.standingsCell}>Goals</div>
                                            <div className={styles.standingsCell}>Pts</div>
                                            <div className={styles.standingsCell}></div>
            
                                            </div>,
                                            groups.map((team) => {
                                                return(
                                                    <div className={styles.standingsRow}>
                                                        <div className={styles.standingsCell}>{team.rank}.</div>
                                                        <div className={styles.standingsCell}>
                                                            <img src = {team.logo} alt = {team.teamName} className = {styles.teamLogoStandings}/>  
                                                        </div>
                                                        <div className={styles.standingsCellTeamName}>{team.teamName}</div>
                                                        <div className={styles.standingsCell}>{team.all.matchsPlayed}</div>
                                                        <div className={styles.standingsCellToHide}>{team.all.win}</div>
                                                        <div className={styles.standingsCellToHide}>{team.all.draw}</div>
                                                        <div className={styles.standingsCellToHide}>{team.all.lose}</div>
                                                        <div className={styles.standingsCell}>{team.all.goalsFor} : {team.all.goalsAgainst}</div>
                                                        <div className={styles.standingsCell}>{team.points}</div>
                                                        <AuthIcons>
                                                            <HeartIcon 
                                                                team = {team.teamName}
                                                                logo = {team.logo}
                                                                id = {team.team_id}
                                                            />
                                                        </AuthIcons>
                                                    </div>
                                                )
                                            })
                                        )
                                    })
                                )
                            }
                </Paper>
                }
            </div>
        )
    }
}

export default Standings;