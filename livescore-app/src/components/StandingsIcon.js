import React from 'react';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom';

let leagueID;

class StandingsIcon extends React.Component {
    state = {
        redirect: false
    }

    handleOnClick = () => {
        leagueID = this.props.leagueId
        console.log(leagueID)

        this.setState ({
            redirect: true
        })
    }

    render() {
        if(this.state.redirect) {
           return <Redirect to='/standings' />
        }

        return (
            <Button onClick = {this.handleOnClick} variant="default">
                <div style={{fontWeight:'700', display: 'flex', alignItems:'center'}}>
                    {/* ☰ Standings  */} 
                    <FormatListNumberedIcon /> Standings
                </div>
            </Button>
        ) 
    }
}

export default StandingsIcon;
export { leagueID }
