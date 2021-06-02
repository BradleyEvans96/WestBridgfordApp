import { Fixture } from '../components/molecules/FixtureCard';

const FixturesExample = [
    {
        matchID: 1,
        homeTeam: {
            id: 1,
            teamName: 'West Bridgford AFC Reserves',
            teamIcon: undefined
        },
        awayTeam: {
            id: 2,
            teamName: 'Aslockton & Orston Reserves',
            teamIcon: undefined
        },
        matchDate: '24/09/2021',
        cancelled: false
    },
    {
        matchID: 2,
        homeTeam: {
            id: 3,
            teamName: 'Bingham Town Reserves',
            teamIcon: ''
        },
        awayTeam: {
            id: 1,
            teamName: 'West Bridgford AFC Reserves',
            teamIcon: ''
        },
        matchDate: '24/05/2022',
        cancelled: true
    },
    {
        matchID: 3,
        homeTeam: {
            id: 1,
            teamName: 'West Bridgford AFC Reserves',
            teamIcon: undefined
        },
        awayTeam: {
            id: 4,
            teamName: 'No Stamina FC',
            teamIcon: undefined
        },
        matchDate: '24/09/2021',
        cancelled: false
    },
    {
        matchID: 4,
        homeTeam: {
            id: 1,
            teamName: 'West Bridgford AFC Reserves',
            teamIcon: undefined
        },
        awayTeam: {
            id: 5,
            teamName: 'Pythian',
            teamIcon: undefined
        },
        matchDate: '24/09/2021',
        cancelled: false
    },
    {
        matchID: 5,
        homeTeam: {
            id: 1,
            teamName: 'West Bridgford AFC Reserves',
            teamIcon: undefined
        },
        awayTeam: {
            id: 6,
            teamName: 'East Leake Robins',
            teamIcon: undefined
        },
        matchDate: '24/09/2021',
        cancelled: false
    },
    {
        matchID: 6,
        homeTeam: {
            id: 1,
            teamName: 'West Bridgford AFC Reserves',
            teamIcon: undefined
        },
        awayTeam: {
            id: 7,
            teamName: 'Ruddington Village Reserves',
            teamIcon: undefined
        },
        matchDate: '24/09/2021',
        cancelled: false
    }
] as Fixture[];

export default FixturesExample;
