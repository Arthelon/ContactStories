import low from 'lowdb'
import os from 'os'
import path from 'path'
import underscore from 'underscore-db'

const db = low(path.join(os.homedir(), 'contactStories.json'))
db._.mixin(underscore)

export default db