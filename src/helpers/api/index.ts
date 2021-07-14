import { Fixture, Player, PlayerFixture } from '@joshpav/westbridgfordappapi';
import Constants from 'expo-constants';
import { Dispatch, SetStateAction } from 'react';

export default class Api {
    private baseUrl: string;

    // Authentication code required for calling functions in the cloud
    private code: string | undefined;

    constructor() {
        this.baseUrl = Constants.manifest?.extra?.apiEndpoint;
        this.code = process.env.API_AUTH_CODE;
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
        await this.get(`"${teamId}"/fixtures`, dispatcher, { playerId });
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
        dispatcher: Dispatch<SetStateAction<T>>,
        queryParameters: Record<string, string> = {}
    ): Promise<void> => {
        const response = await fetch(
            `${this.baseUrl}/${path}${this.getQueryParamString(
                queryParameters
            )}`
        );
        dispatcher(await response.json());
    };

    private getQueryParamString(params: Record<string, string>): string {
        const queryString = Object.entries(
            Object.assign(params, this.getDefaultQueryParams())
        )
            .map((param) => `${param[0]}=${param[1]}`)
            .join('&');

        return queryString ? `?${queryString}` : '';
    }

    private getDefaultQueryParams() {
        return this.code ? { code: this.code } : {};
    }
}
