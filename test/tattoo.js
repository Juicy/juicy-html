#!/usr/bin/env node
"use strict";

const shell = require('shelljs'),
  path = require('path'),
  got = require('got'),
  fs = require("fs");

const TOKEN = process.env.TRAVIS_API_TOKEN;
const repoRoot = path.join(__dirname, '..');

console.log(`Fetching Git commit hash...`);

const gitCommitRet = shell.exec('git rev-parse HEAD', {
  cwd: repoRoot
});

if (0 !== gitCommitRet.code) {
  console.error('Error getting git commit hash');

  process.exit(-1);
}

const gitCommitHash = gitCommitRet.stdout.trim();

console.log(`Git commit: ${gitCommitHash}`);



// Read Synchrously
const tattooConfig = JSON.parse(fs.readFileSync(path.join(repoRoot, 'test/tattoo.json')));

var currentRepo = tattooConfig.name;

tattooConfig.dependants.forEach((dependantRepo)=>{
    console.log(`Calling Travis for ${dependantRepo}...`);

    const currentRepoSlug = currentRepo.replace('/','%2F');
    const dependantRepoSlug = dependantRepo.replace('/','%2F');


    got.post(`https://api.travis-ci.org/repo/${dependantRepoSlug}/requests`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Travis-API-Version": "3",
        "Authorization": `token ${TOKEN}`,
      },
      body: JSON.stringify({
        request: {
          message: `Trigger build at ${currentRepoSlug} commit: ${gitCommitHash}`,
          branch: 'master',
        },
      }),
    })
    .then((response) => {
      console.log(`Triggered build of ${dependantRepoSlug}`);
      console.log(response.body);
    //   const respJSON = JSON.parse(response.body);
    //   return got.get(`https://api.travis-ci.org/repo/${respJSON.request.repository.id}/request/${respJSON.request.id}`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json",
    //       "Travis-API-Version": "3",
    //       "Authorization": `token ${TOKEN}`,
    //     },
    // }).then((response)=>{
    //     console.log(response.body);
    //     const respJSON = JSON.parse(response.body);
    //     console.log(`https://travis-ci.org/${dependantRepo}/builds/${response.body.builds[0].id}`);
    //   });
    })
    .catch((err) => {
      console.error(err);

      process.exit(-1);
    });

});
