const core = require('@actions/core')
require('dotenv').config()


// const files = core.getInput('files')

const { Octokit } = require("@octokit/action");
const octokit = new Octokit();

const pr_number = process.env.GITHUB_PULL_REQUEST;
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

const { data: files } = await octokit.pulls.listFiles({
  owner,
  repo,
  pull_number: pr_number,
});


console.log(files);
