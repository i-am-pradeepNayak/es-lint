const {
    ZeroCreditError,
    MissingAPIKeyError,
    InvalidUserGroupError,
    ServiceError,
    RequestError,
    InvalidAPIKeyError,
    DataParseError,
    InvalidRequestError,
    LessCreditError,
    BadRequestError,
    UnAuthorizedError,
    TrialUsageOver,
    FileUploadError
} = require("./Errors");

const errorHandler = (e) => {
    switch (e.constructor) {
    case ZeroCreditError:
        return { status: 403, errorType: "ZeroCreditError", showErrToUser: true };

    case TrialUsageOver:
        return { status: 403, errorType: "TrialUsageOver", showErrToUser: true };

    case LessCreditError:
        return { status: 403, errorType: "LessCreditError", showErrToUser: true };

    case MissingAPIKeyError:
        return {
            status: 403,
            errorType: "MissingAPIKeyError",
            showErrToUser: true
        };

    case InvalidAPIKeyError:
        return {
            status: 403,
            errorType: "InvalidAPIKeyError",
            showErrToUser: true
        };

    case InvalidUserGroupError:
        return {
            status: 403,
            errorType: "InvalidUserGroupError",
            showErrToUser: false
        };

    case RequestError:
        return { status: 403, errorType: "RequestError", showErrToUser: true };

    case InvalidRequestError:
        return {
            status: 403,
            errorType: "InvalidRequestError",
            showErrToUser: true
        };

    case ServiceError:
        return { status: 503, errorType: "ServiceError", showErrToUser: false };

    case DataParseError:
        return { status: 503, errorType: "DataParseError", showErrToUser: false };

    case BadRequestError:
        return { status: 400, errorType: "BadRequestError", showErrToUser: true };

    case UnAuthorizedError:
        return {
            status: 401,
            errorType: "UnAuthorizedError",
            showErrToUser: false
        };

    case FileUploadError:
        return { status: 403, errorType: "FileUploadError", showErrToUser: true };

    default:
        return { status: 404, showErrToUser: false };
    }
};

module.exports = errorHandler;
