export function getUuid(): string {
    let uuid = require('uuid');
    return uuid();
}