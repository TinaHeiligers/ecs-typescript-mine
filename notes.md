## Using Github Actions for Automation

Reference docs: https://docs.github.com/en/rest/reference/actions#get-allowed-actions-for-a-repository

## Examples
### list reporsitories in org:
```zsh
➜  ~ curl \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/orgs/ELASTIC/actions/permissions/repositories
{
  "message": "Must have admin rights to Repository.",
  "documentation_url": "https://docs.github.com/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization"
}
```

```js
await octokit.request('GET /repos/{owner}/{repo}/actions/permissions/selected-actions', {
  owner: 'octocat',
  repo: 'hello-world'
})
```
For authenticated users, the response should look something like:
Response: Status: 200 OK
```js
{
  "github_owned_allowed": true,
  "verified_allowed": false,
  "patterns_allowed": [
    "monalisa/octocat@*",
    "docker/*"
  ]
}
```
### Get specific repository
e.g. elastic/ecs
```shell
curl \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/elastic/ecs
```
response:
```shell
{
  "id": 134683798,
  "node_id": "MDEwOlJlcG9zaXRvcnkxMzQ2ODM3OTg=",
  "name": "ecs",
  "full_name": "elastic/ecs",
  "private": false,
  "owner": {
    "login": "elastic",
    "id": 6764390,
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjY3NjQzOTA=",
    "avatar_url": "https://avatars.githubusercontent.com/u/6764390?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/elastic",
    "html_url": "https://github.com/elastic",
    "followers_url": "https://api.github.com/users/elastic/followers",
    "following_url": "https://api.github.com/users/elastic/following{/other_user}",
    "gists_url": "https://api.github.com/users/elastic/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/elastic/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/elastic/subscriptions",
    "organizations_url": "https://api.github.com/users/elastic/orgs",
    "repos_url": "https://api.github.com/users/elastic/repos",
    "events_url": "https://api.github.com/users/elastic/events{/privacy}",
    "received_events_url": "https://api.github.com/users/elastic/received_events",
    "type": "Organization",
    "site_admin": false
  },
  "html_url": "https://github.com/elastic/ecs",
  "description": "Elastic Common Schema",
  "fork": false,
  "url": "https://api.github.com/repos/elastic/ecs",
  "forks_url": "https://api.github.com/repos/elastic/ecs/forks",
  "keys_url": "https://api.github.com/repos/elastic/ecs/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/elastic/ecs/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/elastic/ecs/teams",
  "hooks_url": "https://api.github.com/repos/elastic/ecs/hooks",
  "issue_events_url": "https://api.github.com/repos/elastic/ecs/issues/events{/number}",
  "events_url": "https://api.github.com/repos/elastic/ecs/events",
  "assignees_url": "https://api.github.com/repos/elastic/ecs/assignees{/user}",
  "branches_url": "https://api.github.com/repos/elastic/ecs/branches{/branch}",
  "tags_url": "https://api.github.com/repos/elastic/ecs/tags",
  "blobs_url": "https://api.github.com/repos/elastic/ecs/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/elastic/ecs/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/elastic/ecs/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/elastic/ecs/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/elastic/ecs/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/elastic/ecs/languages",
  "stargazers_url": "https://api.github.com/repos/elastic/ecs/stargazers",
  "contributors_url": "https://api.github.com/repos/elastic/ecs/contributors",
  "subscribers_url": "https://api.github.com/repos/elastic/ecs/subscribers",
  "subscription_url": "https://api.github.com/repos/elastic/ecs/subscription",
  "commits_url": "https://api.github.com/repos/elastic/ecs/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/elastic/ecs/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/elastic/ecs/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/elastic/ecs/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/elastic/ecs/contents/{+path}",
  "compare_url": "https://api.github.com/repos/elastic/ecs/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/elastic/ecs/merges",
  "archive_url": "https://api.github.com/repos/elastic/ecs/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/elastic/ecs/downloads",
  "issues_url": "https://api.github.com/repos/elastic/ecs/issues{/number}",
  "pulls_url": "https://api.github.com/repos/elastic/ecs/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/elastic/ecs/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/elastic/ecs/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/elastic/ecs/labels{/name}",
  "releases_url": "https://api.github.com/repos/elastic/ecs/releases{/id}",
  "deployments_url": "https://api.github.com/repos/elastic/ecs/deployments",
  "created_at": "2018-05-24T08:16:29Z",
  "updated_at": "2022-01-22T21:19:21Z",
  "pushed_at": "2022-01-24T18:21:23Z",
  "git_url": "git://github.com/elastic/ecs.git",
  "ssh_url": "git@github.com:elastic/ecs.git",
  "clone_url": "https://github.com/elastic/ecs.git",
  "svn_url": "https://github.com/elastic/ecs",
  "homepage": "https://www.elastic.co/what-is/ecs",
  "size": 10406,
  "stargazers_count": 808,
  "watchers_count": 808,
  "language": "Python",
  "has_issues": true,
  "has_projects": true,
  "has_downloads": true,
  "has_wiki": true,
  "has_pages": true,
  "forks_count": 315,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 146,
  "license": {
    "key": "apache-2.0",
    "name": "Apache License 2.0",
    "spdx_id": "Apache-2.0",
    "url": "https://api.github.com/licenses/apache-2.0",
    "node_id": "MDc6TGljZW5zZTI="
  },
  "allow_forking": true,
  "is_template": false,
  "topics": [

  ],
  "visibility": "public",
  "forks": 315,
  "open_issues": 146,
  "watchers": 808,
  "default_branch": "main",
  "temp_clone_token": null,
  "organization": {
    "login": "elastic",
    "id": 6764390,
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjY3NjQzOTA=",
    "avatar_url": "https://avatars.githubusercontent.com/u/6764390?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/elastic",
    "html_url": "https://github.com/elastic",
    "followers_url": "https://api.github.com/users/elastic/followers",
    "following_url": "https://api.github.com/users/elastic/following{/other_user}",
    "gists_url": "https://api.github.com/users/elastic/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/elastic/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/elastic/subscriptions",
    "organizations_url": "https://api.github.com/users/elastic/orgs",
    "repos_url": "https://api.github.com/users/elastic/repos",
    "events_url": "https://api.github.com/users/elastic/events{/privacy}",
    "received_events_url": "https://api.github.com/users/elastic/received_events",
    "type": "Organization",
    "site_admin": false
  },
  "network_count": 315,
  "subscribers_count": 301
}
```
GET repository releases:
``` shell
curl \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/elastic/ecs/releases
```
response: see [curlRequestResponse](ecsReleasesResponseOutput.js)

