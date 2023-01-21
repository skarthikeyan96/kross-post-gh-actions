const core = require('@actions/core')
require('dotenv').config()

// get the latest file from the post directory
// then setup

const files = core.getInput('files')
console.log(files)