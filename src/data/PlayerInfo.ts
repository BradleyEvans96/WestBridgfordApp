import { AvailabilityStatus } from '@joshpav/westbridgfordappapi';

const PlayerExample = [
    {
        playerName: 'Bradley Evans',
        availability: AvailabilityStatus.AVAILABLE,
        playedGame: true,
        numberScored: 1,
        numberAssisted: 2,
        matchID: 1
    },
    {
        playerName: 'Bradley Evans',
        availability: AvailabilityStatus.UNAVAILABLE,
        playedGame: false,
        numberScored: 0,
        numberAssisted: 0,
        matchID: 2
    }
];

export default PlayerExample;
