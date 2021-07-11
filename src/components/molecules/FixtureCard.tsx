import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
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

export type Opponent = Team & {
    isGameHome?: boolean;
};

export type Match = {
    matchID: number;
    homeTeam: string;
    awayTeam: string;
    matchDate: string;
    cancelled: boolean;
};

export type PlayerMatchInformation = {
    playerName: string;
    availability: AvailabilityStatus;
    playedGame: boolean;
    numberScored: number;
    numberAssisted: number;
    matchID: number;
};

function getClubLogo(_: Team): JSX.Element {
    // if (teamIcon === undefined) {
    //     return 'generic logo';
    // }
    return <DefaultClubLogo size={30} />;
}

function isHome(home: Team, teamID: number) {
    return home.id === teamID;
}

export default function FixtureCard({ fixtureDetails }: Props) {
    const teamID = 1;
    const isHomeGame = isHome(fixtureDetails.homeTeam, teamID);
    const opponent = isHomeGame
        ? fixtureDetails.awayTeam
        : fixtureDetails.homeTeam;
    return (
        <Card
            header={
                <View style={styles.fixtureTitle}>
                    {getClubLogo(opponent)}
                    <Text>{opponent.teamName}</Text>
                    <Text>{isHomeGame ? '(H)' : '(A)'}</Text>
                </View>
            }
        />
    );
}

const styles = StyleSheet.create({
    fixtureTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between'
    }
});
