import axios from "axios";

export class AuthService {

    login(path,body){
        axios.post(path,body);
    }
    signup(path,body){
        axios.post(path,body);
    }
}

export default new AuthService();