export class User {
    id :number;
    firstname: string;
    lastname: string;
    phone: number;
    email: string;
    passwrd: string;
    token?: string;
    constructor(     
     firstname?: string,
     lastname?: string,
     phone?: number,
     email?: string,
     passwrd?: string,
    ){}
}

