import { Fixture, Team } from '@joshpav/westbridgfordappapi';
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Card from '@components/atoms/Card';
import { DefaultClubLogo } from '@components/atoms/images';

export type Props = {
    fixtureDetails: Fixture;
};

function getClubLogo(_: Team): JSX.Element {
    return <DefaultClubLogo size={30} />;
}

function isHome(home: Team, teamID: string) {
    return home.teamId === teamID;
}

export default function FixtureCard({ fixtureDetails }: Props) {
    const teamID = '1';
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
