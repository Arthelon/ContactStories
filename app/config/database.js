import low from 'lowdb'
import os from 'os'
import path from 'path'
import underscore from 'underscore-db'

const db = low(path.join(os.home(), 'contactStories.json'))
db._.mixin(underscore)
db.defaults({
	contacts: [],
	stories: []
})

export default db