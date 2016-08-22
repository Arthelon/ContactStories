import PouchDB from 'pouchdb'
import path from 'path'
import fs from 'fs'
import os from 'os'

export const BASE_URL = path.join(os.homedir(), '.contactStories/')

const removeAll = () => {
    new PouchDB('cotnactStories').destroy().then(function () {
        console.log("Db destroyed")
    })
}

fs.stat(BASE_URL, function(err, stats) {
    if (err || !stats.isDirectory()) {
        fs.mkdirSync(BASE_URL)
    }
})
var db = new PouchDB("contactStories")
// removeAll()

export default db