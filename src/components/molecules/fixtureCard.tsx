import React from 'react';
import Card from '../atoms/Card';

type Match = {
    homeTeam: TeamScore['teamName'];
    awayTeam: TeamScore['teamName'];
    matchDate: Date;
    cancelled: boolean;
};

type Result = {
    homeTeam: TeamScore;
    awayTeam: TeamScore;
};

type TeamScore = {
    teamName: string;
    goals: number;
};

const teamOne: TeamScore = {
    teamName: 'Team 1',
    goals: 0
};

const teamTwo: TeamScore = {
    teamName: 'Team 2',
    goals: 0
};

const gameResult: Result = {
    homeTeam: teamOne,
    awayTeam: teamTwo
};

// const footballMatch: Match = [
//     {
//         homeTeam: teamOne.teamName,
//         awayTeam: teamTwo.teamName,
//         matchDate: 20210606,
//         cancelled: false
//     }
// ];

type PlayerMatchInformation = {
    playerName: string;
    isavailable: boolean;
    playedGame: boolean;
    numberScored: number;
    numberAssisted: number;
};

export default function matchCard() {
    const formattedTitle = 'West Bridgford 4 - 1 Aslockton';
    const mainBody = 'Played: 1, Goals: 0, Assists: 0';
    return <Card Title={formattedTitle} MainBody={mainBody} />;
}
