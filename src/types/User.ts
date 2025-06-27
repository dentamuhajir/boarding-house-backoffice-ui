export interface User {
    id: number;
    name: string;
    email: string;
    // username: string;
    phoneNumber: string;
    profilePicture: string;
}

export interface EndUser  {
    name: string
    email: string
    password: string
    username: string
    profilePicture: string
    phoneNumber: string
    dateOfBirth: string
    gender: string
    occupation: string
}