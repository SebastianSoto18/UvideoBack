export interface AuthTokenResult {
    role: string;
    email: string;
    sub:  string;
    iat:  number;
    exp:  number;
}

export interface IUseToken {
    role: string;
    email: string;
    sub:  string;
    isExpired: boolean;
}