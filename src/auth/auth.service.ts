import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
    test() {
        return 'test';
    }

    signIn() {
        return { msg: 'Signin complete!' };
    }

    signUp() {
        return { msg: 'Signup complete!' };
    }
}
