class Users {
    id;
    name;
    username;
    email;
    password;

    constructor(id, name, username,email, password) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }
    setUsername(username){
        this.username = username;
    }
    getUsername(){
       return this.username;
    }
    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name
    }

    setEmail(email) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    setPassword(password) {
        this.password = password;
    }

    getPassword() {
        return this.password;
    }


}