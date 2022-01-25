const { Octokit } = require("@octokit/core")
const { publicElasticRepos,
  publicElasticEcs,
  publicElasticEcsReleases} = require('./requests');

async function privateUserTinaHeiligers() {
  const octokit = new Octokit({ auth: process.env.OCTOKIT_TEST_TOKEN})
  const { data } = await octokit.request("/user");
  return data;
}

module.exports = (async () => {
  try {
    var repos = await publicElasticRepos();
    var reposeEcs = await publicElasticEcs();
    var releases = await publicElasticEcsReleases();
    console.log(releases);
  } catch (err) {
    throw err;
  }
})()


