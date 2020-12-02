import React from 'react';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

let leagueID;

class StandingsIcon extends React.Component {
    state = {
        id: this.props.leagueId
    }

    handleOnClick = () => {
        leagueID = this.props.leagueId

        this.setState ({
            id: leagueID
        })
    }

    render() {
        return (
            <Button onClick = {this.handleOnClick} variant="contained">
                <Link to={`standings/${this.state.id}`} className={styles.link}>
                    <div className={styles.standingsButton}>
                        <FormatListNumberedIcon fontSize='small'/> 
                        <div className={styles.standingsLogoText}>
                            Standings
                        </div>
                    </div>
                </Link>
            </Button>
        ) 
    }
}

export default StandingsIcon;
export { leagueID }
