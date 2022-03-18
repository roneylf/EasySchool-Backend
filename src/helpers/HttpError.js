class HttpError{
    constructor(status = 400,message){
        this.status = status;
        this.message = message;
    }
}

export {  HttpError  }