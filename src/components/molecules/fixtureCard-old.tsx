import React from 'react';
import { Text, View } from 'react-native';
import Card from '../atoms/Card';
import { DefaultClubLogo } from '../atoms/images';

export enum AvailabilityStatus {
    available = 'Available',
    unavailable = 'Unavailable',
    unanswered = 'Unanswered'
}

export type Props = {
    fixtureDetails: Fixture;
};

export type Fixture = {
    matchID: number;
    homeTeam: Team;
    awayTeam: Team;
    matchDate: string;
    cancelled: boolean;
};

export type Team = {
    id: number;
    teamName: string;
    teamIcon: string;
};

export type Match = {
    matchID: number;
    homeTeam: string;
    awayTeam: string;
    matchDate: string;
    cancelled: boolean;
};

// export type Result = Match & {
//     homeGoals: number;
//     awayGoals: number;
// };

// export type TeamScore = {
//     teamName: string;
//     goals: number;
// };

export type PlayerMatchInformation = {
    playerName: string;
    availability: AvailabilityStatus;
    playedGame: boolean;
    numberScored: number;
    numberAssisted: number;
    matchID: number;
};

// function getPlayedGameInfo(Info: PlayerMatchInformation) {
//     if (Info.playedGame) {
//         return `Played: 1   Goals: ${Info.numberScored}   Assists: ${Info.numberAssisted}`;
//     }

//     return `Played: 0   Goals: 0   Assists: 0`;
// }
/*  */
function getClubLogo({ teamIcon }: Team): JSX.Element {
    // if (teamIcon === undefined) {
    //     return 'generic logo';
    // }
    return <DefaultClubLogo size={30} />;
}

// function fixtureTitle({ fixtureDetails }: Props): JSX.Element {
//     return (
//         <View>
//             <Text>{fixtureDetails.homeTeam}</Text>
//             {getClubLogo(fixtureDetails.homeTeam)}
//             <Text>-</Text>
//             {getClubLogo(fixtureDetails.awayTeam)}
//             <Text>{fixtureDetails.awayTeam}</Text>
//         </View>
//     );
// }

export default function fixtureCard({ fixtureDetails }: Props) {
    // const formattedTitle = `${MatchDetails.homeTeam} -${MatchDetails.awayTeam}`;
    // const mainBody = setMainBody(MatchDetails.matchDate, PlayerInfo);
    return (
        <Card
            header={
                <View>
                    <Text>{fixtureDetails.homeTeam}</Text>
                    {getClubLogo(fixtureDetails.homeTeam)}
                    <Text>-</Text>
                    {getClubLogo(fixtureDetails.awayTeam)}
                    <Text>{fixtureDetails.awayTeam}</Text>
                </View>
            }
        />
    );
}

// {
/* <Text style={styles.headText}>{Title}</Text> */
// }
// headText: {
//     fontSize: 18,
//     fontWeight: 'bold'
// },
