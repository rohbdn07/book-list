import BaseError, { HttpStatusCode } from "./customError";

/** ValidationError to handle validation error type and it extends the BaseError */
export class ValidationError extends BaseError {
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
