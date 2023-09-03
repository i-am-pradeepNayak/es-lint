const utfDecoder = (utf8String) => {
    // Convert the string to a Uint8Array
    const utf8Array = new TextEncoder().encode(utf8String);

    // Decode the Uint8Array using UTF-8
    const decoder = new TextDecoder("utf-8");
    const decodedString = decoder.decode(utf8Array);

    return decodedString;
};

module.exports = { utfDecoder };
