import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
                console.log(this.state.games)

        })
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div>
                <h1>Livescores</h1>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Heart 1</TableCell>
                            <TableCell>Logo 1</TableCell>
                            <TableCell>Team 1</TableCell>
                            <TableCell>Score</TableCell>
                            <TableCell>Team 2</TableCell>
                            <TableCell>Logo 2</TableCell>
                            <TableCell>Heart 2</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                            <TableCell>
                                {
                                    this.state.games.map(game => {
                                        return(
                                            <div>{game.homeTeam.team_name}</div>
                                        )
                                    })
                                }
                            </TableCell>
                            <TableCell>
                                {
                                    this.state.games.map(game => {
                                        return(
                                            <img src = {game.homeTeam.logo} />
                                        )
                                    })
                                }
                            </TableCell>
                            <TableCell>Team 1</TableCell>
                            <TableCell>Score</TableCell>
                            <TableCell>Team 2</TableCell>
                            <TableCell>Logo 2</TableCell>
                            <TableCell>Heart 2</TableCell>
                        </TableRow>
                        
                    </TableBody>
                </Table>
            </div>
            
        )
    }
}

export default Livescores;