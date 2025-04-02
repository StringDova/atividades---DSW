import util from 'node:util'

const cores = {
    INFO: '\x1b[32m',
    WARNING: '\x1b[33m',
    ERROR: '\x1b[31m'
}

export const error = (message) => {
    console.log(`${cores.ERROR}[ERROR] ${message}\x1b[0m`)
}
export const warning = (message) => {
    console.log(`${cores.WARNING}[WARNING] ${message}\x1b[0m`)
}
export const info = (message) => {
    console.log(`${cores.INFO}[INFO] ${message}\x1b[0m`)
}
