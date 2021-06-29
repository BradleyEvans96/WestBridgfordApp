import React from 'react';
import Card from '../atoms/Card';

enum AvailabilityStatus {
    available = 'Available',
    unavailable = 'Unavailable',
    unanswered = 'Unanswered'
}

export type Props = {
    MatchDetails: Match;
    PlayerInfo: PlayerMatchInformation;
};

export type Match = {
    homeTeam: TeamScore;
    awayTeam: TeamScore;
    matchDate: Date;
    cancelled: boolean;
};

export type TeamScore = {
    teamName: string;
    goals: number;
};

export type PlayerMatchInformation = {
    playerName: string;
    availability: AvailabilityStatus;
    playedGame: boolean;
    numberScored: number;
    numberAssisted: number;
};

function matchInFuture(FixtureDate: Date) {
    // With Date object we can compare dates them using the >, <, <= or >=.
    // The ==, !=, ===, and !== operators require to use date.getTime(),
    // so we need to create a new instance of Date with 'new Date()'
    const d1 = new Date();
    const d2 = new Date(FixtureDate);

    // Check if the first is greater than second
    if (d1 < d2) return true;

    return false;
}

function getPlayedGameInfo(Info: PlayerMatchInformation) {
    if (Info.playedGame) {
        return `Played: 1   Goals: ${Info.numberScored}   Assists: ${Info.numberAssisted}`;
    }

    return `Played: 0   Goals: 0   Assists: 0`;
}

function setMainBody(matchDate: Date, PlayerInfo: PlayerMatchInformation) {
    if (matchInFuture(matchDate)) {
        return `Status: ${PlayerInfo.availability}`;
    }
    return getPlayedGameInfo(PlayerInfo);
}

export default function matchCard({ MatchDetails, PlayerInfo }: Props) {
    const formattedTitle = `${MatchDetails.homeTeam.teamName} ${MatchDetails.homeTeam.goals}-${MatchDetails.awayTeam.goals} ${MatchDetails.awayTeam.teamName}`;
    const mainBody = setMainBody(MatchDetails.matchDate, PlayerInfo);
    return <Card Title={formattedTitle} MainBody={mainBody} />;
}
