import { AvailabilityStatus } from '../components/molecules/FixtureCard';

const PlayerExample = [
    {
        playerName: 'Bradley Evans',
        availability: AvailabilityStatus.available,
        playedGame: true,
        numberScored: 1,
        numberAssisted: 2,
        matchID: 1
    },
    {
        playerName: 'Bradley Evans',
        availability: AvailabilityStatus.unavailable,
        playedGame: false,
        numberScored: 0,
        numberAssisted: 0,
        matchID: 2
    }
];

export default PlayerExample;
