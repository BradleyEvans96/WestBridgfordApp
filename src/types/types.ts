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
