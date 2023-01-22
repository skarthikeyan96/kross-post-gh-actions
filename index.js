const core = require('@actions/core')
require('dotenv').config()


const files = core.getInput('files')
console.log(files)