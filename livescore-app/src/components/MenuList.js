import React from 'react';
import MenuItems from './MenuItems'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import AlarmIcon from '@material-ui/icons/Alarm';
import ListAltIcon from '@material-ui/icons/ListAlt';

const entries = [
    {
        name: 'Home',
        icon: HomeIcon,
        url: "/"
    },
    {
        name: 'Livescores',
        icon: AlarmIcon,
        url: "/livescores"
    },
    {
        name: 'Scores',
        icon: SportsSoccerIcon,
        url: "/scores"
    },
    {
        name: 'Standings',
        icon: ListAltIcon,
        url: "/standings"
    },

    {
        name: 'My Teams',
        icon: FavoriteBorderOutlinedIcon,
        url: "/myteams"
    }
]

export default function MenuList() {
    return (
        <React.Fragment>
            <Divider />
            <List>
                {entries.map((item) => (
                    <MenuItems key={item.url} item={item} />
                ))}
            </List>
        </React.Fragment>
    )
}