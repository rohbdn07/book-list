import Logger from "../library/logger";

export enum HttpStatusCode {
    OK = 200,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    INTERNAL_SERVER = 500,
}

abstract class BaseError extends Error {
    public name: string;
    public httpCode: HttpStatusCode;
    public message: string;

    constructor(name: string, httpCode: HttpStatusCode, message: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);

        this.name = name;
        this.httpCode = httpCode;
        this.message = message;

        Error.captureStackTrace(this);
    }
    abstract serializeErrors(): {
        message: string;
        httpCode: HttpStatusCode;
        name: string;
    }[];
}

export default BaseError;
