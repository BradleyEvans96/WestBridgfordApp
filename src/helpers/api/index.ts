import { Fixture } from '@joshpav/westbridgfordappapi';
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

    /**
     * @param {string} teamId The id of the team to fetch fixtures for
     * @param {Dispatch<SetStateAction<Fixture[]>>} fixtureDispatcher A function to update the fixtures with the API response.
     */
    getFixtures = async (
        teamId: string,
        fixtureDispatcher: Dispatch<SetStateAction<Fixture[]>>
    ): Promise<void> => {
        await this.get(`"${teamId}"/fixtures`, fixtureDispatcher);
    };

    /**
     * Generic GET request that can be used for all our GET requests
     * @param path the path to request
     * @param dispatcher A function to update the a value with the response data
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
