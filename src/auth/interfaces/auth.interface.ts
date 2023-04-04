export interface AuthTokenResult {
    role: string;
    sub:  string;
    iat:  number;
    exp:  number;
}

export interface IUseToken {
    role: string;
    sub:  string;
    isExpired: boolean;
}