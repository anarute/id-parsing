const base64url = require('base64url');

// Taken from https://github.com/hedgedoc/hedgedoc/blob/master/lib/models/note.js#L166
const encodeNoteId = function (id) {
    // remove dashes in UUID and encode in url-safe base64
    const str = id.replace(/-/g, '')
    const hexStr = Buffer.from(str, 'hex')
    return base64url.encode(hexStr)
}

var args = process.argv.slice(2);

console.log(encodeNoteId(args[0]))
