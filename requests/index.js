async function publicElasticRepos() {
  const octokit = new Octokit({});
  const { elasticRepos } = await octokit.request('GET /orgs/{org}/repos', { org: 'elastic' });
  return elasticRepos;
}

async function publicElasticEcs() {
  const octokit = new Octokit({});
  const { elasticPublicEcs } = await octokit.request('GET /repos/{owner}/{repo}', { owner: 'elastic', repo: 'ecs' });
  return elasticPublicEcs;
}

// see ./ecsReleasesResponseOutput.js
async function publicElasticEcsReleases() {
  const octokit = new Octokit({});
  const response = await octokit.request('GET /repos/{owner}/{repo}/releases', { owner: 'elastic', repo: 'ecs' });
  return response; // this is an array
}

module.exports = {
  publicElasticRepos,
  publicElasticEcs,
  publicElasticEcsReleases
}
