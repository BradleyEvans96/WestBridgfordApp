import { Fixture, Player, PlayerFixture } from '@joshpav/westbridgfordappapi';
import Constants from 'expo-constants';
import { Dispatch, SetStateAction } from 'react';

export default class Api {
    private baseUrl: string;

    // Will need this code for calling the Azure functions running in the cloud
    private code: string | null;

    constructor() {
        this.baseUrl = Constants.manifest?.extra?.apiEndpoint;
        this.code = null;
    }

    getPlayer = async (
        playerId: string,
        dispatcher: Dispatch<SetStateAction<Player>>
    ): Promise<void> => {
        await this.get(`player/"${playerId}"`, dispatcher);
    };

    getFixtures = async (
        teamId: string,
        dispatcher: Dispatch<SetStateAction<Fixture[]>>
    ): Promise<void> => {
        await this.get(`"${teamId}"/fixtures`, dispatcher);
    };

    getAvailability = async (
        teamId: string,
        playerId: string,
        dispatcher: Dispatch<SetStateAction<PlayerFixture[]>>
    ): Promise<void> => {
        await this.get(`"${teamId}"/fixtures?playerId=${playerId}`, dispatcher);
    };

    getSquad = async (
        teamId: string,
        dispatcher: Dispatch<SetStateAction<Player[]>>
    ): Promise<void> => {
        await this.get(`team/"${teamId}"`, dispatcher);
    };

    /**
     * Generic GET request that can be used for all our GET requests
     * @param path the path to request
     * @param dispatcher A function to update the value from the response data
     */
    private get = async <T>(
        path: string,
        dispatcher: Dispatch<SetStateAction<T>>
    ): Promise<void> => {
        const codeQueryParam = this.code ? `&code=${this.code}` : '';

        const response = await fetch(
            `${this.baseUrl}/${path}${codeQueryParam}`
        );
        dispatcher(await response.json());
    };
}
