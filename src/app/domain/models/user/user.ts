export class User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    created_date: Date;
    image: string;
    active: boolean;
    
    constructor() {
        this.id = 0;
        this.first_name = "";
        this.last_name = "";
        this.email = "";
        this.gender = "";
        this.created_date = new Date();
        this.image = "";
        this.active = false;
    }

}
