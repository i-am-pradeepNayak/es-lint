class ZeroCreditError extends Error {

    constructor (message) {

        super(message);
        this.name = "ZeroCreditError";
    }

}

class TrialUsageOver extends Error {

    constructor (message) {

        super(message);
        this.name = "TrialUsageOver";
    }

}

class MissingAPIKeyError extends Error {

    constructor (message) {

        super(message);
        this.name = "MissingAPIKeyError";
    }

}

class InvalidAPIKeyError extends Error {

    constructor (message) {

        super(message);
        this.name = "InvalidAPIKeyError";
    }

}

class InvalidUserGroupError extends Error {

    constructor (message) {

        super(message);
        this.name = "InvalidUserGroupError";
    }

}

class ServiceError extends Error {

    constructor (message) {

        super(message);
        this.name = "ServiceError";
    }

}

class RequestError extends Error {

    constructor (message) {

        super(message);
        this.name = "RequestError";
    }

}

class DataParseError extends Error {

    constructor (message) {

        super(message);
        this.name = "DataParseError";
    }

}

class InvalidRequestError extends Error {

    constructor (message) {

        super(message);
        this.name = "InvalidRequestError";
    }

}

class LessCreditError extends Error {

    constructor (message) {

        super(message);
        this.name = "LessCreditError";
    }

}

class BadRequestError extends Error {

    constructor (message) {

        super(message);
        this.name = "BadRequestError";
    }

}

class UnAuthorizedError extends Error {

    constructor (message) {

        super(message);
        this.name = "UnAuthorizedError";
    }

}

class FileUploadError extends Error {

    constructor (message) {

        super(message);
        this.name = "FileUploadError";
    }

}

class NotAdminError extends Error {

    constructor (message) {

        super(message);
        this.name = "NotAdminError";
    }

}

module.exports = {
    ZeroCreditError,
    LessCreditError,
    InvalidUserGroupError,
    ServiceError,
    RequestError,
    MissingAPIKeyError,
    InvalidAPIKeyError,
    DataParseError,
    InvalidRequestError,
    BadRequestError,
    UnAuthorizedError,
    TrialUsageOver,
    FileUploadError,
    NotAdminError,
};
