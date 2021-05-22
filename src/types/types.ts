// Seems very hard to get the proper type of navigation.
// Defining like this means all instances are using the same type incase we refactor later.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Navigation = any;
export class User {
    constructor(
        private firstName: string,
        private lastName: string,
        private roles: Role[],
        private profileImagePath?: string
    ) {}

    getFullName = (): string => `${this.firstName} ${this.lastName}`;

    isManager = (): boolean => this.roles.includes(Role.MANAGER);

    getAllRoles = (): string => this.roles.join(', ');
}

export enum Role {
    PLAYER = 'Player',
    MANAGER = 'Manager'
}
