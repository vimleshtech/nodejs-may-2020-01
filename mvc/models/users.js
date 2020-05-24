
class User{

    constructor(fname,lname,email,pwd){
        this.fname =fname;
        this.email =email;
        this.lname =lname;
        this.pwd=this.pwd;
    }

    getName(){
        return this.fname+' '+this.lname;
    }
    
    getEmail(){
        return this.email;
    }
    
    getPwd(){
        return this.pwd;
    }


}
module.exports = User;