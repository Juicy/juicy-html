#!/usr/bin/env node
"use strict";

const shell = require('shelljs'),
  path = require('path'),
  got = require('got');


console.log(`Fetching Git commit hash...`);

const gitCommitRet = shell.exec('git rev-parse HEAD', {
  cwd: path.join(__dirname, '..')
});

if (0 !== gitCommitRet.code) {
  console.error('Error getting git commit hash');

  process.exit(-1);
}

const gitCommitHash = gitCommitRet.stdout.trim();

console.log(`Git commit: ${gitCommitHash}`);

console.log('Calling Travis...');


got.post(`https://api.travis-ci.org/repo/Juicy%2Fimported-template/requests`, {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Travis-API-Version": "3",
    "Authorization": `token ${process.env.TRAVIS_API_TOKEN}`,
  },
  body: JSON.stringify({
    request: {
      message: `Trigger build at Juicy/juicy-html commit: ${gitCommitHash}`,
      branch: 'master',
    },
  }),
})
.then((response) => {
  console.log("Triggered build of Juicy/imported-template");
  // console.log(response.body);
})
.catch((err) => {
  console.error(err);

  process.exit(-1);
});
