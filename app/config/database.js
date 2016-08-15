import low from 'lowdb'
import os from 'os'
import path from 'path'
import underscore from 'underscore-db'
import fs from 'fs'

const base_path = path.join(os.homedir(), '.contactStories')
const db_path = path.join(base_path, 'contactStories.json')

fs.stat(base_path, (err, stats) => {
	if (err || !stats.isDirectory()) {
		fs.mkdir(base_path)
	}
})

fs.stat(db_path, (err, stats) => {
	if (err || !stats.isFile()) {
		fs.writeFile(db_path, "")
	}
})

const db = low(path.join(base_path, 'contactStories.json'))
db._.mixin(underscore)

export default db