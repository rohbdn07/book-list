import BaseError, { HttpStatusCode } from "./customError";

//APIError to handle api errors and it extend the BaseError
export class APIError extends BaseError {
    constructor(
        name: string,
        httpCode = HttpStatusCode.NOT_FOUND,
        message = "NOT FOUND"
    ) {
        super(name, httpCode, message);
    }
    serializeErrors() {
        return [
            {
                name: this.name,
                httpCode: this.httpCode,
                message: this.message,
            },
        ];
    }
}
