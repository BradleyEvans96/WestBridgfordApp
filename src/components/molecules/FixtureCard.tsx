import { Address, Fixture, Team } from '@joshpav/westbridgfordappapi';
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Card from '@components/atoms/Card';
import { DefaultClubLogo } from '@components/atoms/images';
import dayjs from 'dayjs';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export type Props = {
    fixtureDetails: Fixture;
};

function getClubLogo(_: Team): JSX.Element {
    return <DefaultClubLogo size={30} />;
}

function isHome(home: Team, teamID: string) {
    return home.teamId === teamID;
}

function getGeoCordinates(location: Address) {
    const fullAddress = `${location.line1}, ${location.line2}, ${location.line3}, ${location.city}, ${location.county}, ${location.postcode}`;
    return Location.geocodeAsync(fullAddress);
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
                    <Text style={styles.fixtureText}>{opponent.teamName}</Text>
                    <Text style={styles.fixtureText}>
                        {isHomeGame ? 'H' : 'A'}
                    </Text>
                </View>
            }
            body={
                <View style={styles.fixtureBody}>
                    <View style={styles.fixtureLine}>
                        <Text style={styles.fixtureType}>
                            {'Type'.toUpperCase()}{' '}
                        </Text>
                        <View style={styles.fixtureDetails}>
                            <Text>{fixtureDetails.location.line1} |</Text>
                            <Text>
                                {dayjs(fixtureDetails.date).format(
                                    ' DD MMM YYYY | hh:mm A'
                                )}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <MapView style={styles.map} />
                    </View>
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
    },
    fixtureText: {
        fontFamily: 'Helvetica',
        fontSize: 20,
        fontWeight: 'bold'
    },
    fixtureBody: {
        alignItems: 'stretch',
        padding: 10
    },
    fixtureDetails: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#f5f5f5'
    },
    fixtureType: {
        fontWeight: 'bold',
        fontSize: 16
    },
    fixtureLine: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 10
    },
    map: {
        width: '100%',
        height: 200,
        borderRadius: 6
    }
});
