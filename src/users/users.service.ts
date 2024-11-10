import { Injectable } from '@nestjs/common';

export type User = {
    userId: number,
    username: string,
    password: string
}

const users: User[] = [
    {
        userId:1,
        username: 'alice',
        password: 'pwd'
    },
    {
        userId:2,
        username: 'rabbit',
        password: 'clock    '
    }
]

@Injectable()
export class UsersService {
    async findUserByName(username: string): Promise<User | undefined> {
        return users.find((user) => user.username === username)
    }
}
