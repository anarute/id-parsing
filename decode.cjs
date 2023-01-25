const base64url = require('base64url');

// Taken from https://github.com/hedgedoc/hedgedoc/blob/master/lib/models/note.js#L172
const decodeNoteId = function (encodedId) {
    // decode from url-safe base64
    const id = base64url.toBuffer(encodedId).toString('hex')
    // add dashes between the UUID string parts
    const idParts = []
    idParts.push(id.substr(0, 8))
    idParts.push(id.substr(8, 4))
    idParts.push(id.substr(12, 4))
    idParts.push(id.substr(16, 4))
    idParts.push(id.substr(20, 12))
    return idParts.join('-')
}

var args = process.argv.slice(2);

console.log(decodeNoteId([args[0]]))
