const ecsReleases = {
  status: 200,
  url: 'https://api.github.com/repos/elastic/ecs/releases',
  headers: {
    'accept-ranges': 'bytes',
    'access-control-allow-origin': '*',
    'access-control-expose-headers': 'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset',
    'cache-control': 'public, max-age=60, s-maxage=60',
    connection: 'close',
    'content-encoding': 'gzip',
    'content-security-policy': "default-src 'none'",
    'content-type': 'application/json; charset=utf-8',
    date: 'Tue, 25 Jan 2022 00:57:44 GMT',
    etag: 'W/"059b15da930731b672954135d4101cf18f97c407bb60f602ca84088f0b8fe134"',
    'referrer-policy': 'origin-when-cross-origin, strict-origin-when-cross-origin',
    server: 'GitHub.com',
    'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
    'transfer-encoding': 'chunked',
    vary: 'Accept, Accept-Encoding, Accept, X-Requested-With',
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'deny',
    'x-github-media-type': 'github.v3; format=json',
    'x-github-request-id': 'D42A:7BC3:3E0E13:95D017:61EF4B08',
    'x-ratelimit-limit': '60',
    'x-ratelimit-remaining': '46',
    'x-ratelimit-reset': '1643074070',
    'x-ratelimit-resource': 'core',
    'x-ratelimit-used': '14',
    'x-xss-protection': '0'
  },
  data: [
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/56950788',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/56950788/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/56950788/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v1.12.2',
      id: 56950788,
      author: [Object],
      node_id: 'RE_kwDOCAccls4DZQAE',
      tag_name: 'v1.12.2',
      target_commitish: '1.12',
      name: 'ECS 1.12.2',
      draft: false,
      prerelease: false,
      created_at: '2022-01-12T20:26:33Z',
      published_at: '2022-01-12T20:40:14Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v1.12.2',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v1.12.2',
      body: '### Tooling and Artifact Changes\r\n' +
        '\r\n' +
        '#### Bugfixes\r\n' +
        '\r\n' +
        '* Add `object` as fallback for `flattened` type. #1653'
    },
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/50984704',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/50984704/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/50984704/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v1.12.1',
      id: 50984704,
      author: [Object],
      node_id: 'RE_kwDOCAccls4DCfcA',
      tag_name: 'v1.12.1',
      target_commitish: '1.12',
      name: 'ECS 1.12.1',
      draft: false,
      prerelease: false,
      created_at: '2021-10-07T18:05:45Z',
      published_at: '2021-10-07T18:13:23Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v1.12.1',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v1.12.1',
      body: '### Schema Changes\r\n' +
        '\r\n' +
        '#### Bugfixes\r\n' +
        '\r\n' +
        '* Updating `x509` order to correct nesting. ##1621'
    },
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/50350892',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/50350892/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/50350892/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v1.12.0',
      id: 50350892,
      author: [Object],
      node_id: 'RE_kwDOCAccls4DAEss',
      tag_name: 'v1.12.0',
      target_commitish: '1.12',
      name: 'ECS 1.12.0',
      draft: false,
      prerelease: false,
      created_at: '2021-09-28T16:05:51Z',
      published_at: '2021-09-28T16:06:30Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v1.12.0',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v1.12.0',
      body: 'The following RFCs have advanced as a part of this release:\r\n' +
        '\r\n' +
        '### Stage 3 (GA)\r\n' +
        '\r\n' +
        '* [RFC 0018 - extend `threat.*` field set](https://github.com/elastic/ecs/blob/master/rfcs/text/0018-extend-threat-group-software.md)\r\n' +
        '* [RFC 0001 - wildcard field migration](https://github.com/elastic/ecs/blob/master/rfcs/text/0001-wildcard-data-type.md)\r\n' +
        '* [RFC 0023 - migrate `text` to `match_only_text` type](https://github.com/elastic/ecs/blob/master/rfcs/text/0023-match_only_text-data-type.md)\r\n' +
        '\r\n' +
        '### Stage 2 (beta)\r\n' +
        '\r\n' +
        '* [RFC 0002 - `service.environment` field](https://github.com/elastic/ecs/blob/master/rfcs/text/0002-rfc-environment.md)\r\n' +
        '\r\n' +
        '### Stage 1 (experimental)\r\n' +
        '\r\n' +
        '* [RFC 0010 - `email.*` field set](https://github.com/elastic/ecs/blob/master/rfcs/text/0010-email.md)\r\n' +
        '* [RFC 0025 - container metric fields](https://github.com/elastic/ecs/blob/master/rfcs/text/0025-container-metric-fields.md)\r\n' +
        '\r\n' +
        "There's also been a couple of new field additions in 1.12: [`file.fork_name`](https://github.com/elastic/ecs/pull/1288), [`service.address`](https://github.com/elastic/ecs/pull/1537), [`process.end`](https://github.com/elastic/ecs/pull/1544), [`code_signature.digest_algorithm` and `code_signature.timestamp`](https://github.com/elastic/ecs/pull/1557).\r\n" +
        '\r\n' +
        'Lastly, a couple tooling and documentation improvements. There now exists support for multi-field type fallback to better support ES 6 types as well as the new `match_only_text` type. And finally, we updated examples within `user` to better clarify things.\r\n' +
        '\r\n' +
        '## Changelog\r\n' +
        '\r\n' +
        '### Schema Changes\r\n' +
        '\r\n' +
        '#### Bugfixes\r\n' +
        '\r\n' +
        '* Updating `hash` order to correct nesting. #1603\r\n' +
        '* Removing incorrect `hash` reuses. #1604\r\n' +
        '* Updating `pe` order to correct nesting. #1605\r\n' +
        '* Removing incorrect `pe` reuses. #1606\r\n' +
        '* Correcting `enrichments` to an `array` type. #1608\r\n' +
        '\r\n' +
        '#### Added\r\n' +
        '\r\n' +
        '* Added `file.fork_name` field. #1288\r\n' +
        '* Added `service.address` field. #1537\r\n' +
        '* Added `service.environment` as a beta field. #1541\r\n' +
        '* Added `process.end` field. #1544\r\n' +
        '* Added container metric fields into experimental schema. #1546\r\n' +
        '* Add `code_signature.digest_algorithm` and `code_signature.timestamp` fields. #1557\r\n' +
        '* Add `email.*` field set in the experimental fields. #1569\r\n' +
        '\r\n' +
        '#### Improvements\r\n' +
        '\r\n' +
        '* Beta migration on some `keyword` fields to `wildcard`. #1517\r\n' +
        '* Promote `threat.software.*` and `threat.group.*` fields to GA. #1540\r\n' +
        '* Update `user.name` and `user.id` examples for clarity. #1566\r\n' +
        '* Beta migration of `text` and `.text` multi-fields to `match_only_text`. #1532, #1571\r\n' +
        '\r\n' +
        '### Tooling and Artifact Changes\r\n' +
        '\r\n' +
        '#### Added\r\n' +
        '\r\n' +
        '* Support ES 6.x type fallback for `match_only_text` field types. #1528\r\n' +
        '\r\n' +
        '#### Bugfixes\r\n' +
        '\r\n' +
        '* Prevent failure if no files need to be deleted `find | xargs rm`. #1588\r\n' +
        '\r\n' +
        '#### Improvements\r\n' +
        '\r\n' +
        '* Document field type family interoperability in FAQ. #1591'
    },
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/47375347',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/47375347/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/47375347/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v1.11.0',
      id: 47375347,
      author: [Object],
      node_id: 'MDc6UmVsZWFzZTQ3Mzc1MzQ3',
      tag_name: 'v1.11.0',
      target_commitish: '1.11',
      name: 'ECS 1.11.0',
      draft: false,
      prerelease: false,
      created_at: '2021-08-12T15:20:50Z',
      published_at: '2021-08-12T15:29:07Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v1.11.0',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v1.11.0',
      body: 'The following RFCs have advanced as part of this release:\r\n' +
        '\r\n' +
        '### Stage 3 (GA)\r\n' +
        '\r\n' +
        '* [RFC 0012 - orchestrator field set](https://github.com/elastic/ecs/blob/master/rfcs/text/0012-orchestrator-field-set.md)\r\n' +
        '\r\n' +
        '### Stage 2 (beta)\r\n' +
        '\r\n' +
        '* [RFC 0008 - Threat indicator fields](https://github.com/elastic/ecs/blob/master/rfcs/text/0008-threat-intel.md)\r\n' +
        '* [RFC 0015 - `elf` file fields](https://github.com/elastic/ecs/blob/master/rfcs/text/0015-create-file-elf.md)\r\n' +
        '* [RFC 0018 - Extend the `threat.*` field set with `threat.software.*` and `threat.group.*` fields](https://github.com/elastic/ecs/blob/master/rfcs/text/0018-extend-threat-group-software.md)\r\n' +
        '* [RFC 0021 - Threat enrichment](https://github.com/elastic/ecs/blob/master/rfcs/text/0021-threat-enrichment.md)\r\n' +
        '\r\n' +
        '### Stage 1 (experimental)\r\n' +
        '\r\n' +
        '* [RFC 0016 - Target process fields](https://github.com/elastic/ecs/blob/master/rfcs/text/0016-target-process.md)\r\n' +
        '\r\n' +
        'The `event.agent_id_status` field is also new in 1.11 to reflect the status of the `agent.id` verification performed by a receiving system or data pipeline.\r\n' +
        '\r\n' +
        'Lastly, many tooling and documentation improvements, including the `--exclude` flag. The `--exclude` flag adds the ability to remove individual fields from the schema. More detail is available in the [usage doc](https://github.com/elastic/ecs/blob/1.11/USAGE.md#exclude).\r\n' +
        '\r\n' +
        '## Changelog\r\n' +
        '\r\n' +
        '### Schema Changes\r\n' +
        '\r\n' +
        '#### Added\r\n' +
        '\r\n' +
        '* `elf.*` field set added as beta. #1410\r\n' +
        '* Remove `beta` from `orchestrator` field set. #1417\r\n' +
        '* Extend `threat.*` field set beta. #1438\r\n' +
        '* Added `event.agent_id_status` field. #1454\r\n' +
        '* `process.target` and `process.target.parent` added to experimental schema. #1467\r\n' +
        '* Threat indicator fields progress to beta stage. #1471, #1504\r\n' +
        '* `threat.enrichments` beta fields. #1478, #1504\r\n' +
        '\r\n' +
        '#### Improvements\r\n' +
        '\r\n' +
        '* Fix ecs GitHub repo link source branch #1393\r\n' +
        '* Add --exclude flag to Generator to support field removal testing #1411\r\n' +
        '* Explicitly include user identifiers in `relater.user` description. #1420\r\n' +
        '* Improve descriptions for `cloud.region` and `cloud.availability` fields. #1452\r\n' +
        '* Clarify `event.kind` descriptions for `alert` and `signal`. #1548\r\n' +
        '\r\n' +
        '#### Deprecated\r\n' +
        '\r\n' +
        '* Note deprecation of the `host.user.*` field reuse. #1422\r\n' +
        '* Note deprecation of `log.original` superseded by `event.original` #1469\r\n' +
        '\r\n' +
        '### Tooling and Artifact Changes\r\n' +
        '\r\n' +
        '#### Bugfixes\r\n' +
        '\r\n' +
        '* Remove `ignore_above` when `index: false` and `doc_values: false`. #1483\r\n' +
        '* Ensure `doc_values` is carried into Beats artifacts. #1488\r\n' +
        '\r\n' +
        '#### Added\r\n' +
        '\r\n' +
        '* Support `match_only_text` data type in Go code generator. #1418\r\n' +
        '* Support for multi-level, self-nestings. #1459\r\n' +
        '* `beta` attribute now supported on categorization allowed values. #1511\r\n' +
        '\r\n' +
        '#### Improvements\r\n' +
        '\r\n' +
        '* Swap `Location` and `Field Set` columns in `Field Reuse` table for better readability. #1472, #1476\r\n' +
        '* Use a bullet points to list field reuses. #1473\r\n' +
        '* Improve wording in `Threat` schema #1505'
    },
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/43927779',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/43927779/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/43927779/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v1.10.0',
      id: 43927779,
      author: [Object],
      node_id: 'MDc6UmVsZWFzZTQzOTI3Nzc5',
      tag_name: 'v1.10.0',
      target_commitish: '1.10',
      name: 'ECS 1.10.0',
      draft: false,
      prerelease: false,
      created_at: '2021-06-02T13:06:05Z',
      published_at: '2021-06-02T13:09:03Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v1.10.0',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v1.10.0',
      body: 'A handful of new additions from the [ECS RFC process](https://github.com/elastic/ecs/blob/master/rfcs/PROCESS.md) are included in this release:\r\n' +
        '\r\n' +
        '* The host metrics RFC has advanced to Finished status with [host metrics](https://github.com/elastic/ecs/blob/master/rfcs/text/0005-host-metric-fields.md) fields becoming GA.\r\n' +
        '* The [orchestrator](https://github.com/elastic/ecs/blob/master/rfcs/text/0012-orchestrator-field-set.md) fieldset RFC has advanced to Stage 3, and the fieldset has been released for beta.\r\n' +
        '* The [`data_stream`](https://github.com/elastic/ecs/blob/master/rfcs/text/0009-data_stream-fields.md) fields moved to Stage 2, and are released for beta.\r\n' +
        '* We are [extending the existing `threat.*](https://github.com/elastic/ecs/blob/master/rfcs/text/0018-extend-threat-group-software.md) fields, which are released as experimental.\r\n' +
        '\r\n' +
        'In addition to RFC proposed changes, ECS 1.10.0 also adds some documentation updates, including the ability to add a `short_override` to field reuses for a custom description.\r\n' +
        '\r\n' +
        'Finally, there is now support for flattened and nested types in the Go code generator script.\r\n' +
        '\r\n' +
        '## Changelog\r\n' +
        '\r\n' +
        '### Schema Changes\r\n' +
        '\r\n' +
        '#### Added\r\n' +
        '\r\n' +
        '* Add `data_stream` fieldset. #1307\r\n' +
        '* Add `orchestrator` fieldset as beta fields. #1326\r\n' +
        '* Extend `threat.*` experimental fields with proposed changes from RFC 0018. #1344, #1351\r\n' +
        '* Allow custom descriptions for self-nesting reuses via `short_override` #1366\r\n' +
        '\r\n' +
        '#### Improvements\r\n' +
        '\r\n' +
        '* Updated descriptions to use Elastic Security #1305\r\n' +
        '* Host metrics fields from RFC 0005 are now GA. #1319\r\n' +
        '* Adjustments to the field set "usage" docs #1345\r\n' +
        '* Adjustments to the sidebar naming convention for usage and examples docs #1354\r\n' +
        '* Update `user.*` field reuse descriptions. #1382\r\n' +
        '\r\n' +
        '### Tooling and Artifact Changes\r\n' +
        '\r\n' +
        '#### Bugfixes\r\n' +
        '\r\n' +
        '* Correcting fieldset name capitalization for generated ES template #1323\r\n' +
        '\r\n' +
        '#### Improvements\r\n' +
        '\r\n' +
        '* Support `nested` types in go code generator. #1254, #1350\r\n' +
        '* Go code generator now supports the `flattened` data type. #1302\r\n' +
        "* Adjustments to use terminology that doesn't have negative connotation. #1315\r\n",
      reactions: [Object]
    },
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/40649253',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/40649253/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/40649253/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v1.9.0',
      id: 40649253,
      author: [Object],
      node_id: 'MDc6UmVsZWFzZTQwNjQ5MjUz',
      tag_name: 'v1.9.0',
      target_commitish: '1.9',
      name: 'ECS 1.9.0',
      draft: false,
      prerelease: false,
      created_at: '2021-03-30T15:28:06Z',
      published_at: '2021-03-30T14:52:13Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v1.9.0',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v1.9.0',
      body: 'Several additions introduced from the [ECS RFC process](https://github.com/elastic/ecs/blob/master/rfcs/PROCESS.md) are included in this release:\r\n' +
        '\r\n' +
        '* The [multiple users](https://github.com/elastic/ecs/blob/master/rfcs/text/0007-multiple-users.md) proposal has advanced to `Finished` status with `user.changes.*`, `user.effective.*`, and `user.target.*` field reuses becoming GA. \r\n' +
        '* [Host metrics fields](https://github.com/elastic/ecs/blob/master/rfcs/text/0005-host-metric-fields.md) are now beta.\r\n' +
        '* The [`threat.indicator` fields](https://github.com/elastic/ecs/blob/master/rfcs/text/0008-threat-intel.md), [`elf.*` fields](https://github.com/elastic/ecs/blob/master/rfcs/text/0015-create-file-elf.md), [`pe.*` extensions](https://github.com/elastic/ecs/blob/master/rfcs/text/0014-extend-file-pe.md), and [`data_stream.*` fieldset](https://github.com/elastic/ecs/blob/master/rfcs/text/0009-data_stream-fields.md) are now in the experimental ECS schema.\r\n' +
        '\r\n' +
        'A new [section](https://www.elastic.co/guide/en/ecs/1.9/ecs-using-the-categorization-fields.html) has been added to the ECS event categorization documentation. Real-world example events are categorized to demonstrate using the event categorization fields to group and identify similar events from multiple data sources.\r\n' +
        '\r\n' +
        'In addition to RFC proposed changes, ECS 1.9.0 also adds:\r\n' +
        '* `http.request.id`\r\n' +
        '* `cloud.service.name`\r\n' +
        '* `hash.ssdeep`\r\n' +
        '* `code_signature.team_id` and `code_signature.signing_id`\r\n' +
        '* Additional fields to the `geo.*` fieldset: `geo.timezone`, `geo.postal_code`, `geo.continent_code`\r\n' +
        '\r\n' +
        'Finally, `*.mac` field descriptions now suggest normalizing MAC address values to the RFC7042 format.\r\n' +
        '\r\n' +
        '## Changelog\r\n' +
        '\r\n' +
        '### Schema Changes\r\n' +
        '\r\n' +
        '#### Added\r\n' +
        '\r\n' +
        '* Added `hash.ssdeep`. #1169\r\n' +
        '* Added `cloud.service.name`. #1204\r\n' +
        '* Added `http.request.id`. #1208\r\n' +
        '* `data_stream.*` fieldset introduced in experimental schema and artifacts. #1215\r\n' +
        '* Added `geo.timezone`, `geo.postal_code`, and `geo.continent_code`. #1229\r\n' +
        '* Added `beta` host metrics fields. #1248\r\n' +
        '* Added `code_signature.team_id`, `code_signature.signing_id`. #1249\r\n' +
        '* Extended `pe` fields added to experimental schema. #1256\r\n' +
        '* Add `elf` fieldset to experimental schema. #1261\r\n' +
        '* Add `threat.indicator` fields to experimental schema. #1268\r\n' +
        '\r\n' +
        '#### Improvements\r\n' +
        '\r\n' +
        '* Include formatting guidance and examples for MAC address fields. #456\r\n' +
        '* New section in ECS detailing event categorization fields usage. #1242\r\n' +
        '* `user.changes.*`, `user.effective.*`, and `user.target.*` field reuses are GA. #1271\r\n' +
        '\r\n' +
        '### Tooling and Artifact Changes\r\n' +
        '\r\n' +
        '#### Improvements\r\n' +
        '\r\n' +
        '* Update Python dependencies #1310, #1318\r\n' +
        "* Adjustments to use terminology that doesn't have negative connotation. #1315"
    },
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/38123784',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/38123784/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/38123784/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v1.8.0',
      id: 38123784,
      author: [Object],
      node_id: 'MDc6UmVsZWFzZTM4MTIzNzg0',
      tag_name: 'v1.8.0',
      target_commitish: '1.8',
      name: 'ECS 1.8.0',
      draft: false,
      prerelease: false,
      created_at: '2021-02-16T19:26:24Z',
      published_at: '2021-02-16T19:47:36Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v1.8.0',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v1.8.0',
      body: 'In this release, two ECS RFCs are advancing. The [multiple users in an event RFC](https://github.com/elastic/ecs/blob/master/rfcs/text/0007-multiple-users.md) proposed field reuses now appear in the ECS documentation as beta. The [host metrics fields](https://github.com/elastic/ecs/blob/master/rfcs/text/0005-host-metric-fields.md) are also advancing and are available in the [experimental schema and artifacts](https://github.com/elastic/ecs/tree/v1.8.0/experimental).\r\n' +
        '\r\n' +
        "Accompanying the `multiple user` changes, the `user.*` fieldset adds ECS' first [usage doc](https://github.com/elastic/ecs/tree/master/docs/usage#usage-docs). The [user usage](https://www.elastic.co/guide/en/ecs/1.8/ecs-user-usage.html) page contains guidance on categorization, user ids, field reuse, and mapping examples.\r\n" +
        '\r\n' +
        "The [event categorization fields](https://www.elastic.co/guide/en/ecs/1.8/ecs-category-field-values-reference.html), with the initial set of allowed values, were introduced as beta in ECS 1.4.0. Over the past several ECS released, we've iterated and further fleshed out these fields and values.  We're excited to announce that the event categorization fields are now generally available!\r\n" +
        '\r\n' +
        'In addition to the event categorizations fields becoming GA, two additional `event.category` allowed values have also been introduced: `registry` and `session.`\r\n' +
        '\r\n' +
        'A new field, `os.type`, is intended to ease filtering for Windows, Unix, Linux, and macOS events.\r\n' +
        '\r\n' +
        'Finally, a component template and composable templates (per fieldset) have been added as generated artifacts. The legacy index templates for Elasticsearch 6.x and 7.x are still being maintained. More details covered [here](https://github.com/elastic/ecs/tree/v1.8.0/generated/elasticsearch).\r\n' +
        '\r\n' +
        '## Changelog\r\n' +
        '\r\n' +
        '### Schema Changes\r\n' +
        '\r\n' +
        '#### Bugfixes\r\n' +
        '\r\n' +
        '* Clean up `event.reference` description. #1181\r\n' +
        '* Go code generator fails if `scaled_float` type is used. #1250\r\n' +
        '\r\n' +
        '#### Added\r\n' +
        '\r\n' +
        '* Added `event.category` "registry". #1040\r\n' +
        '* Added `event.category` "session". #1049\r\n' +
        '* Added usage documentation for `user` fields. #1066\r\n' +
        '* Added `user` fields at `user.effective.*`, `user.target.*` and `user.changes.*`. #1066\r\n' +
        '* Added `os.type`. #1111\r\n' +
        '\r\n' +
        '#### Improvements\r\n' +
        '\r\n' +
        '* Event categorization fields GA. #1067\r\n' +
        '* Note `[` and `]` bracket characters may enclose a literal IPv6 address when populating `url.domain`. #1131\r\n' +
        '* Reinforce the exclusion of the leading dot from `url.extension`. #1151\r\n' +
        '\r\n' +
        '#### Deprecated\r\n' +
        '\r\n' +
        '* Deprecated `host.user.*` fields for removal at the next major. #1066\r\n' +
        '\r\n' +
        '### Tooling and Artifact Changes\r\n' +
        '\r\n' +
        '#### Bugfixes\r\n' +
        '\r\n' +
        '* `tracing` fields should be at root of Beats `fields.ecs.yml` artifacts. #1164\r\n' +
        '\r\n' +
        '#### Added\r\n' +
        '\r\n' +
        '* Added the `path` key when type is `alias`, to support the [alias field type](https://www.elastic.co/guide/en/elasticsearch/reference/current/alias.html). #877\r\n' +
        "* Added support for `scaled_float`'s mandatory parameter `scaling_factor`. #1042\r\n" +
        '* Added ability for --oss flag to fall back `constant_keyword` to `keyword`. #1046\r\n' +
        '* Added support in the generated Go source go for `wildcard`, `version`, and `constant_keyword` data types. #1050\r\n' +
        '* Added support for marking fields, field sets, or field reuse as beta in the documentation. #1051\r\n' +
        "* Added support for `constant_keyword`'s optional parameter `value`. #1112\r\n" +
        '* Added component templates for ECS field sets. #1156, #1186, #1191\r\n' +
        '* Added functionality for merging custom and core multi-fields. #982\r\n' +
        '\r\n' +
        '#### Improvements\r\n' +
        '\r\n' +
        '* Make all fields linkable directly. #1148\r\n' +
        '* Added a notice highlighting that the `tracing` fields are not nested under the\r\n' +
        '  namespace `tracing.` #1162\r\n' +
        '* ES 6.x template data types will fallback to supported types. #1171, #1176, #1186\r\n' +
        '* Add a documentation page discussing the experimental artifacts. #1189'
    },
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/34022671',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/34022671/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/34022671/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v1.7.0',
      id: 34022671,
      author: [Object],
      node_id: 'MDc6UmVsZWFzZTM0MDIyNjcx',
      tag_name: 'v1.7.0',
      target_commitish: '1.7',
      name: 'ECS 1.7.0',
      draft: false,
      prerelease: false,
      created_at: '2020-11-17T15:06:19Z',
      published_at: '2020-11-17T15:10:06Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v1.7.0',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v1.7.0',
      body: '### Experimental Changes\r\n' +
        'A few months ago, we introduced the [RFC process](https://github.com/elastic/ecs/tree/master/rfcs). This process is meant to fully vet big additions or changes to ECS. A key aspect of this process is that proposals advance in stages. Each stage represents the vetting and maturity of the proposal.\r\n' +
        '\r\n' +
        'We won’t go over the process in detail here, but one of its key aspects is that accepted “stage 2” proposals appear in “experimental” ECS artifacts. They don’t yet appear officially in ECS documentation. Proposals that reach “stage 3” are the ones that will officially appear in ECS documentation.\r\n' +
        '\r\n' +
        'ECS 1.7 is the first release that includes RFCs that have reached stage 2 / experimental changes. A new directory has therefore been added, where all the usual generated artifacts are published including the experimental changes. This is at [experimental/generated](https://github.com/elastic/ecs/tree/1.7/experimental/generated).\r\n' +
        '\r\n' +
        'This release includes experimental changes from two RFCs reaching stage 2:\r\n' +
        '\r\n' +
        '* Replace the `keyword` type on many existing ECS fields with the new `wildcard`  type.\r\n' +
        '* Adding more places where user fields can be nested, in order to capture privilege escalations & demotions as well as IAM. These experimental nestings are `user.effective.*`, `user.target.*`, and `user.changes.*`.\r\n' +
        '\r\n' +
        '### “Normal” Changes\r\n' +
        '\r\n' +
        'Contrary to the new experimental changes described above, the following changes are reflected in the documentation.\r\n' +
        '\r\n' +
        'Two new fields are introduced: `http.[request|response].mime_type`/ and `threat.technique.subtechnique`.\r\n' +
        '\r\n' +
        'Both the `network.direction` and `event.category` fields add support for additional allowed values.\r\n' +
        '\r\n' +
        'The ECS generator script adds two new arguments, `--oss` and `--strict`. See [usage](https://github.com/elastic/ecs/blob/1.7/USAGE.md) for more details and examples.\r\n' +
        '\r\n' +
        "Lastly, we have changed the index pattern of the [sample Elasticsearch template](https://github.com/elastic/ecs/tree/master/generated/elasticsearch) from  `ecs-*` to `try-ecs-*` to avoid conflicting with Logstash' template when run in ECS compatibility mode.\r\n" +
        '\r\n' +
        '## Changelog\r\n' +
        '\r\n' +
        '### Schema Changes\r\n' +
        '\r\n' +
        '#### Bugfixes\r\n' +
        '\r\n' +
        '* The `protocol` allowed value under `event.type` should not have the `expected_event_types` defined. #964\r\n' +
        '* Clarify the definition of `file.extension` (no dots). #1016\r\n' +
        '\r\n' +
        '#### Added\r\n' +
        '\r\n' +
        '* Added Mime Type fields to HTTP request and response. #944\r\n' +
        '* Added network directions ingress and egress. #945\r\n' +
        '* Added `threat.technique.subtechnique` to capture MITRE ATT&CK® subtechniques. #951\r\n' +
        '* Added `configuration` as an allowed `event.category`. #963\r\n' +
        '* Added a new directory with experimental artifacts, which includes all changes\r\n' +
        '  from RFCs that have reached stage 2. #993, #1053, #1115, #1117, #1118\r\n' +
        '\r\n' +
        '#### Improvements\r\n' +
        '\r\n' +
        '* Expanded field set definitions for `source.*` and `destination.*`. #967\r\n' +
        '* Provided better guidance for mapping network events. #969\r\n' +
        '* Added the field `.subdomain` under `client`, `destination`, `server`, `source`\r\n' +
        '  and `url`, to match its presence at `dns.question.subdomain`. #981\r\n' +
        '* Clarified ambiguity in guidance on how to use x509 fields for connections with\r\n' +
        '  only one certificate. #1114\r\n' +
        '\r\n' +
        '### Tooling and Artifact Changes\r\n' +
        '\r\n' +
        '#### Breaking changes\r\n' +
        '\r\n' +
        '* Changed the index pattern of the sample Elasticsearch template from `ecs-*` to\r\n' +
        "  `try-ecs-*` to avoid conflicting with Logstash' `ecs-logstash-*`. #1048\r\n" +
        '\r\n' +
        '#### Bugfixes\r\n' +
        '\r\n' +
        "* Addressed issue where foreign reuses weren't using the user-supplied `as` value for their destination. #960\r\n" +
        '* Experimental artifacts failed to install due to `event.original` index setting. #1053\r\n' +
        '\r\n' +
        '#### Added\r\n' +
        '\r\n' +
        '* Introduced `--strict` flag to perform stricter schema validation when running the generator script. #937\r\n' +
        '* Added check under `--strict` that ensures composite types in example fields are quoted. #966\r\n' +
        '* Added `ignore_above` and `normalizer` support for keyword multi-fields. #971\r\n' +
        '* Added `--oss` flag for users who want to generate ECS templates for use on OSS clusters. #991\r\n' +
        '\r\n' +
        '#### Improvements\r\n' +
        '\r\n' +
        '* Field details Jinja2 template components have been consolidated into one template #897\r\n' +
        '* Add `[discrete]` marker before each section header in field details. #989\r\n' +
        '* `--ref` now loads `experimental/schemas` based on git ref in addition to `schemas`. #1063'
    },
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/30070550',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/30070550/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/30070550/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v1.6.0',
      id: 30070550,
      author: [Object],
      node_id: 'MDc6UmVsZWFzZTMwMDcwNTUw',
      tag_name: 'v1.6.0',
      target_commitish: '1.6',
      name: 'ECS 1.6.0',
      draft: false,
      prerelease: false,
      created_at: '2020-08-24T20:50:34Z',
      published_at: '2020-08-25T14:23:09Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v1.6.0',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v1.6.0',
      body: 'This release adds the `x509.*` field set to capture common core fields for x509 certificates. Other notable schema changes include the introduction of `event.reason` , adding `span.id` to the `transaction.*` field set, and new `related.*` fields. Please see the full schema change details below.\r\n' +
        '\r\n' +
        'Before this release, there was no way to reuse field sets as different names inside themselves. Now nesting fields within themselves, such as `process` => `process.parent`, and defining nested sets using a different name are both available. \r\n' +
        '\r\n' +
        'Did you know you can use the Python scripts in the ECS repository to generate Elasticsearch templates containing the only ECS fields you need + your custom fields? A lot of the changes in the "tooling and artifact" changelog below are about how we improved this experience. However you can jump directly to the new [usage](https://github.com/elastic/ecs/blob/master/USAGE.md) documentation to learn how to do this.\r\n' +
        '\r\n' +
        'Finally in previous releases, reusable fields **not** expected at the root of documents were accidentally defined at the root in some generated artifacts. This incorrect behavior is fixed in this release.\r\n' +
        '\r\n' +
        '### Schema Changes\r\n' +
        '\r\n' +
        '#### Bugfixes\r\n' +
        '\r\n' +
        '* Field `registry.data.strings` should have been marked as an array field. #790\r\n' +
        '\r\n' +
        '#### Added\r\n' +
        '\r\n' +
        '* Added `x509.*` field set. #762\r\n' +
        '* Add architecture and imphash for PE field set. #763\r\n' +
        '* Added `agent.build.*` for extended agent version information. #764\r\n' +
        '* Added `log.file.path` to capture the log file an event came from. #802\r\n' +
        '* Added more account and project cloud metadata. #816\r\n' +
        '* Added missing field reuse of `pe` at `process.parent.pe` #868\r\n' +
        '* Added `span.id` to the tracing fieldset, for additional log correlation #882\r\n' +
        "* Added `event.reason` for the reason why an event's outcome or action was taken. #907\r\n" +
        '* Added `related.hosts` to capture all hostnames and host identifiers on an event. #913\r\n' +
        '* Added `user.roles` to capture a list of role names that apply to the user. #917\r\n' +
        '\r\n' +
        '#### Improvements\r\n' +
        '\r\n' +
        '* Removed misleading pluralization in the description of `user.id`, it should\r\n' +
        '  contain one ID, not many. #801\r\n' +
        '* Clarified misleading wording about multiple IPs in src/dst or cli/srv. #804\r\n' +
        '* Improved verbiage about the MITRE ATT&CK® framework. #866\r\n' +
        '* Removed the default `object_type=keyword` that was being applied to `object` fields.\r\n' +
        "  This attribute is Beats-specific. It's still supported, but needs to be set explicitly\r\n" +
        '  on a case by case basis now. This default being removed affects `dns.answers`,\r\n' +
        '  `log.syslog`, `network.inner`, `observer.egress`, and `observer.ingress`. #871\r\n' +
        '* Improved attribute `dashed_name` in `generated/ecs/*.yml` to also\r\n' +
        '  replace `@` with `-`. #871\r\n' +
        '* Updated several URLs in the documentation with "example.com" domain. #910\r\n' +
        '\r\n' +
        '#### Deprecated\r\n' +
        '\r\n' +
        '* Deprecate guidance to lowercase `http.request.method` #840\r\n' +
        '\r\n' +
        '\r\n' +
        '### Tooling and Artifact Changes\r\n' +
        '\r\n' +
        '#### Breaking changes\r\n' +
        '\r\n' +
        '* Removed field definitions at the root of documents for fieldsets that\r\n' +
        '  had `reusable.top_level:false`. This PR affects `ecs_flat.yml`, the csv file\r\n' +
        '  and the sample Elasticsearch templates. #495, #813\r\n' +
        '* Removed the `order` attribute from the `ecs_nested.yml` and `ecs_flat.yml` files. #811\r\n' +
        '* In `ecs_nested.yml`, the array of strings that used to be in `reusable.expected`\r\n' +
        "  has been replaced by an array of objects with 3 keys: 'as', 'at' and 'full'. #864\r\n" +
        '* The subset format now requires `name` and `fields` keys at the top level. #873\r\n' +
        '\r\n' +
        '#### Bugfixes\r\n' +
        '\r\n' +
        '* Subsets are created after duplicating reusable fields now so subsets can\r\n' +
        '  be applied to each reused instance independently. #753\r\n' +
        '* Quoted the example for `labels` to avoid YAML interpreting it, and having\r\n' +
        '  slightly different results in different situations. #782\r\n' +
        '* Fix incorrect listing of where field sets are nested in asciidoc,\r\n' +
        '  when they are nested deep. #784\r\n' +
        '* Allow beats output to be generated when using `--include` or `--subset` flags. #814\r\n' +
        '* Field parameter `index` is now correctly populated in the Beats field definition file. #824\r\n' +
        '\r\n' +
        '#### Improvements\r\n' +
        '\r\n' +
        '* Add support for reusing official fieldsets in custom schemas. #751\r\n' +
        '* Add full path names to reused fieldsets in `nestings` array in `ecs_nested.yml`. #803\r\n' +
        '* Allow shorthand notation for including all subfields in subsets. #805\r\n' +
        '* Add support for Elasticsearch `enabled` field parameter. #824\r\n' +
        '* Add `ref` option to generator allowing schemas to be built for a specific ECS version. #851\r\n' +
        '* Add `template-settings` and `mapping-settings` options to allow override of defaults in generated ES templates. #856\r\n' +
        "* When overriding ECS field sets via the `--include` flag, it's no longer necessary\r\n" +
        "  to duplicate the field set's mandatory attributes. The customizations are merged\r\n" +
        '  before validation. #864\r\n' +
        '* Add ability to nest field sets as another name. #864\r\n' +
        '* Add ability to nest field sets within themselves (e.g. `process` => `process.parent`). #864\r\n' +
        '* New attribute `reused_here` is added in `ecs_nested.yml`. It obsoletes the\r\n' +
        '  previous attribute `nestings`, and is able to fully capture details of other\r\n' +
        '  field sets reused under this one. #864\r\n' +
        '* When chained reuses are needed (e.g. `group` => `user`, then `user` => many places),\r\n' +
        "  it's now necessary to force the order with new attribute `reusable.order`. This\r\n" +
        "  attribute is otherwise optional. It's currently only needed for `group`. #864\r\n" +
        "* There's a new representation of ECS at `generated/ecs/ecs.yml`, which is a deeply nested\r\n" +
        "  representation of the fields. This file is not in git, as it's only meant for\r\n" +
        '  developers working on the ECS tools. #864\r\n' +
        '* Jinja2 templates now define the doc structure for the AsciiDoc generator. #865\r\n' +
        '* Intermediate `ecs_flat.yml` and `ecs_nested.yml` files are now generated for each individual subset,\r\n' +
        '  in addition to the intermediate files generated for the combined subset. #873\r\n' +
        '\r\n' +
        '#### Deprecated\r\n' +
        '\r\n' +
        "* In `ecs_nested.yml`, we're deprecating the attribute `nestings`. It will be\r\n" +
        '  removed in a future release. The deprecated `nestings` attribute was an array of\r\n' +
        '  flat field names describing where fields are nested within the field set.\r\n' +
        '  This is replaced with the attribute `reused_here`, which is an array of objects.\r\n' +
        '  The new format still lists where the fields are nested via the same flat field name,\r\n' +
        '  but also specifies additional information about each field reuse. #864'
    },
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/24225410',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/24225410/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/24225410/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v1.5.0',
      id: 24225410,
      author: [Object],
      node_id: 'MDc6UmVsZWFzZTI0MjI1NDEw',
      tag_name: 'v1.5.0',
      target_commitish: '1.5',
      name: 'ECS 1.5.0',
      draft: false,
      prerelease: false,
      created_at: '2020-03-05T11:17:38Z',
      published_at: '2020-03-05T13:26:06Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v1.5.0',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v1.5.0',
      body: 'In this release, we continue fleshing out categorization by introducing the "network" and "iam" categories, with related event types.\r\n' +
        '\r\n' +
        `We're adding new field sets: "dll", "pe", "code_signature", "interface" & "vlan". We're also adding a few fields here and there (check out the details below).\r\n` +
        '\r\n' +
        'Implementers consuming ECS artifacts like `generated/ecs/*.yml` programmatically will be happy to know that we now clearly identify which fields are expected to contain an array of values. Shout-out to contributors on the [ecs-logging](https://github.com/elastic/ecs-logging) libraries for raising this 👋🏼.\r\n' +
        '\r\n' +
        'Finally, starting with ECS 1.5.0, the project is using Python 3.7.\r\n' +
        '\r\n' +
        '### Schema Changes\r\n' +
        '\r\n' +
        '#### Added\r\n' +
        '\r\n' +
        '* Added `dll.*` fields #679\r\n' +
        '* Added `related.hash` to keep track of all hashes seen on an event. #711\r\n' +
        '* Added fieldset for PE metadata. #731\r\n' +
        '* Added `code_signature` fieldset. #733\r\n' +
        '* Added missing `hash` fields at `process.parent.hash.*`. #739\r\n' +
        '* Added globally unique identifier `entity_id` to `process` and `process.parent`. #747\r\n' +
        '* Added interface, vlan, observer zone fields #752\r\n' +
        '* Added `rule.author`, `rule.license` fields #754\r\n' +
        '* Added iam value for `event.category` and three related values for `event.type`. #756\r\n' +
        '* Added fields `event.reference` and `event.url` to hold link to additional event info/actions. #757\r\n' +
        '* Added `file.mime_type` to include MIME type information on file structures #760\r\n' +
        '* Added `event.category` value of network and associated `event.type` values. #761\r\n' +
        '\r\n' +
        '#### Improvements\r\n' +
        '\r\n' +
        "* Temporary workaround for Beats templates' `default_field` growing too big. #687\r\n" +
        '* Identify which fields should contain arrays of values, rather than scalar values. #727, #661\r\n' +
        '* Clarified examples and definitions regarding vulnerabilities. #758\r\n' +
        '* Updated definition of `event.outcome` based on community feedback. #759\r\n' +
        '\r\n' +
        '\r\n' +
        '### Tooling and Artifact Changes\r\n' +
        '\r\n' +
        '#### Improvements\r\n' +
        '\r\n' +
        '* ECS scripts now use Python 3.6+. #674\r\n' +
        '* schema\\_reader.py now reliably supports chaining reusable fieldsets together. #722\r\n' +
        '* Allow the artifact generator to consider and output only a subset of fields. #737\r\n' +
        '* Add support for reusing fields in places other than the top level of the destination fieldset. #739\r\n' +
        '* Add support for specifying the directory to write the generated files. #748\r\n'
    },
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/22356639',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/22356639/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/22356639/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v1.4.0',
      id: 22356639,
      author: [Object],
      node_id: 'MDc6UmVsZWFzZTIyMzU2NjM5',
      tag_name: 'v1.4.0',
      target_commitish: '1.4',
      name: 'ECS 1.4.0',
      draft: false,
      prerelease: false,
      created_at: '2019-12-19T13:38:44Z',
      published_at: '2019-12-19T14:08:32Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v1.4.0',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v1.4.0',
      body: 'This release introduces two much-awaited changes.\r\n' +
        '\r\n' +
        'The `text` analyzer has been added to many existing fields. This enables full text search queries on fields that contain a lot of text, or semi-structured data (such as file paths and urls). Look at #575 and #680 to learn more. As an example, the field `user_agent.original` can now service full text search queries at `user_agent.original.text`.\r\n' +
        '\r\n' +
        'We\'re also introducing the first set of allowed values for the 4 previously reserved fields (`event.kind`, `event.category`, `event.type` and `event.outcome`). We\'re calling them the "categorization fields". More allowed values will be released over time. You can preview future values, and provide feedback in this public document: https://ela.st/ecs-categories-draft. Learn more in the new "ECS Categorization Fields" section of the documentation.\r\n' +
        '\r\n' +
        '\r\n' +
        '### Schema Changes\r\n' +
        '\r\n' +
        '#### Added\r\n' +
        '\r\n' +
        '* Added default `text` analyzer as a multi-field to `user_agent.original`. #575\r\n' +
        '* Added `file.attributes`. #611\r\n' +
        '* Added `file.drive_letter`. #620\r\n' +
        '* Added `rule` fields. #665\r\n' +
        '* Added default `text` analyzer as a multi-field to around 25 more fields. #680\r\n' +
        '* Added `registry.*` fieldset for the Windows registry. #673\r\n' +
        '* Publish initial list of allowed values for the categorization fields (previously reserved)\r\n' +
        '  `event.kind`, `event.category`, `event.type` and `event.outcome`. #684, #691, #692\r\n' +
        '* Added `related.user` #694\r\n' +
        '\r\n' +
        '\r\n' +
        '### Tooling and Artifact Changes\r\n' +
        '\r\n' +
        '#### Bugfixes\r\n' +
        '\r\n' +
        '* Fix support for multi-fields. #575\r\n'
    },
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/21933703',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/21933703/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/21933703/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v1.3.1',
      id: 21933703,
      author: [Object],
      node_id: 'MDc6UmVsZWFzZTIxOTMzNzAz',
      tag_name: 'v1.3.1',
      target_commitish: '1.3',
      name: 'ECS 1.3.1',
      draft: false,
      prerelease: false,
      created_at: '2019-12-03T18:08:53Z',
      published_at: '2019-12-03T18:12:34Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v1.3.1',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v1.3.1',
      body: '### Schema Changes\r\n' +
        '\r\n' +
        '#### Bugfixes\r\n' +
        '\r\n' +
        '* Removed unnecessary field `tls.server.supported_ciphers`. #662\r\n'
    },
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/21809345',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/21809345/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/21809345/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v1.3.0',
      id: 21809345,
      author: [Object],
      node_id: 'MDc6UmVsZWFzZTIxODA5MzQ1',
      tag_name: 'v1.3.0',
      target_commitish: '1.3',
      name: 'ECS 1.3.0',
      draft: false,
      prerelease: false,
      created_at: '2019-11-27T17:53:49Z',
      published_at: '2019-11-27T18:01:16Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v1.3.0',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v1.3.0',
      body: '### Schema Changes\r\n' +
        '\r\n' +
        '#### Added\r\n' +
        '\r\n' +
        '* Added `vulnerability.*` fields to represent vulnerability information. #581\r\n' +
        '* Added `event.ingested` as the ingest timestamp. #582\r\n' +
        '* Added `package.reference`. #585\r\n' +
        '* Added `package.build_version`. #586\r\n' +
        '* Added `package.type`. #587\r\n' +
        '* Added `host.domain` field. #591\r\n' +
        '* Added `process.command_line`. #599\r\n' +
        '* Added `process.exit_code`. #600\r\n' +
        '* Added fields in `tls.*` to support analysis of TLS protocol events. #606\r\n' +
        '* Added `process.parent.*`. #612\r\n' +
        '* Added `process.args_count`. #615\r\n' +
        '\r\n' +
        '### Tooling and Artifact Changes\r\n' +
        '\r\n' +
        '#### Breaking changes\r\n' +
        '\r\n' +
        '* Changed the order and column names in the csv. #621\r\n' +
        '* Removed the file `schema.json` and the code generating it. #627\r\n' +
        '* Removed the legacy Elasticsearch template. #629\r\n' +
        '  * Note: The *good* Elasticsearch templates are available in directory\r\n' +
        '    `generated/elasticsearch`, this PR only removes an obsolete file.\r\n' +
        '\r\n' +
        '#### Added\r\n' +
        '\r\n' +
        '* Added the "Indexed", "Field\\_Set" and "Description" columns to the csv. #621\r\n'
    },
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/20449912',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/20449912/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/20449912/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v1.2.0',
      id: 20449912,
      author: [Object],
      node_id: 'MDc6UmVsZWFzZTIwNDQ5OTEy',
      tag_name: 'v1.2.0',
      target_commitish: '1.2',
      name: 'ECS 1.2.0',
      draft: false,
      prerelease: false,
      created_at: '2019-10-03T15:52:51Z',
      published_at: '2019-10-03T17:17:18Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v1.2.0',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v1.2.0',
      body: '### Added\r\n' +
        '\r\n' +
        '* Added `threat.*` fields to apply a taxonomy to events and alerts. #505\r\n' +
        '* Added fields in `log.*` to allow for full Syslog mapping. #525\r\n' +
        '* Added `package.*` to installed software packages. #532\r\n' +
        '* Added `registered_domain` to `url`, `source`, `destination`, `client`, and `server`. #533\r\n' +
        '* Added `top_level_domain` field to `url`, `dns.question`, `source`, `destination`, `client`, and `server`. #542, #572\r\n' +
        '* Added `group.domain` field. #547\r\n' +
        '* Added `url.extension`. #551, #573\r\n' +
        '* Added `observer.name` and `observer.product`. #557, #571\r\n' +
        '* Added `dns.question.subdomain` field. #561, #574\r\n' +
        '* Added `error.stack_trace` field. #562\r\n' +
        '* Added `log.origin.file.name`, `log.origin.function` and `log.origin.file.line` fields. #563, #568\r\n' +
        '* Added `service.node.name` to allow distinction between different nodes of the same service running on the same host. #565\r\n' +
        '* Added `error.type` field. #566\r\n'
    },
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/19473053',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/19473053/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/19473053/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v1.1.0',
      id: 19473053,
      author: [Object],
      node_id: 'MDc6UmVsZWFzZTE5NDczMDUz',
      tag_name: 'v1.1.0',
      target_commitish: '1.1',
      name: 'ECS 1.1.0',
      draft: false,
      prerelease: false,
      created_at: '2019-08-22T17:44:49Z',
      published_at: '2019-08-22T17:51:00Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v1.1.0',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v1.1.0',
      body: '### Added\r\n' +
        '\r\n' +
        '* Added `as` fields for Autonomous System information (i.e. ASN). #341\r\n' +
        '* Added field formats to all `.bytes` fields and `event.duration`. #385, #425\r\n' +
        '* Added `hash.*` field set. #426\r\n' +
        '* Added `dns.*` field set, to describe DNS traffic. #438\r\n' +
        '* Added `event.code`, `event.sequence` and `event.provider`. #439\r\n' +
        '* Added `file.name` and `file.directory`. #441\r\n' +
        '* Added `file.created`, and `file.accessed`. #445\r\n' +
        '* Added `process.uptime` and `host.uptime` fields. #477\r\n' +
        '* Added `domain` field to user. #486\r\n' +
        '* Added `.nat.ip` and `.nat.port` to `source`, `destination`, `client` and `server`. #491\r\n' +
        '* Added `process.thread.name` field. #517\r\n' +
        '* Added `trace.id` and `transaction.id` fields for tracing across different services. #519\r\n' +
        '* Added `log.logger` field. #521\r\n' +
        '\r\n' +
        '### Improvements\r\n' +
        '\r\n' +
        '* Added examples and improved definitions of many `file` fields. #441\r\n' +
        '* Changed the `service.id` description so it works better for clustered services. #502\r\n'
    },
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/17552655',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/17552655/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/17552655/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v1.0.1',
      id: 17552655,
      author: [Object],
      node_id: 'MDc6UmVsZWFzZTE3NTUyNjU1',
      tag_name: 'v1.0.1',
      target_commitish: '1.0',
      name: 'ECS 1.0.1',
      draft: false,
      prerelease: false,
      created_at: '2019-05-24T17:14:36Z',
      published_at: '2019-05-24T17:23:38Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v1.0.1',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v1.0.1',
      body: '### Added\r\n' +
        '\r\n' +
        '* Add generated source code for Go. #249\r\n' +
        '* Translate the documentation from README.md, to the main website. #266, #334, #400, #430, #435\r\n' +
        '* New generator that supports reusable fields, for files based on ECS.\r\n' +
        '  It generates schema.csv, Elasticsearch 6 and 7 templates, and field documentation\r\n' +
        '  for the main website. #336\r\n' +
        '* Generator for the asciidoc rendering of field definitions. #347\r\n' +
        '* Generator for the Beats fields.ecs.yml file. #379\r\n' +
        '* Remove many legacy generated files. #399\r\n' +
        '* Specify static output format for event.duration. #425\r\n' +
        '* Format port numbers and numeric IDs as strings. #454\r\n' +
        '* Add example for `process.pid` and `process.ppid`. #464, #470\r\n' +
        '\r\n'
    },
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/15948504',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/15948504/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/15948504/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v1.0.0',
      id: 15948504,
      author: [Object],
      node_id: 'MDc6UmVsZWFzZTE1OTQ4NTA0',
      tag_name: 'v1.0.0',
      target_commitish: '1.0',
      name: 'ECS 1.0.0',
      draft: false,
      prerelease: false,
      created_at: '2019-03-06T14:36:32Z',
      published_at: '2019-03-06T16:12:31Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v1.0.0',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v1.0.0',
      body: 'ECS is turning 1.0.0!\r\n' +
        '\r\n' +
        "We've clarified a few field descriptions and examples, based on your feedback and questions.\r\n" +
        '\r\n' +
        '### Breaking changes\r\n' +
        '\r\n' +
        '* Remove the `user.group` `keyword` field, introduced in #204. Instead,\r\n' +
        '  the `group` field set can be nested at `user.group`. #308\r\n' +
        '\r\n' +
        '### Bugfixes\r\n' +
        '\r\n' +
        '* Field set name "group" was being used as a leaf field at `user.group`, instead\r\n' +
        '  of being a nesting of the field set. This goes against a driving principle of ECS,\r\n' +
        '  and has been corrected. #308\r\n' +
        '* Replaced incorrect examples in `cloud.provider`. #330, #348\r\n' +
        '* Changed the `url.port` type to `long`. #339\r\n' +
        '\r\n' +
        '### Added\r\n' +
        '\r\n' +
        '* Added pointer in description of `http` field set to `url` field set. #330\r\n' +
        '* Added an optional short field description. #330\r\n' +
        '\r\n' +
        '### Improvements\r\n' +
        '\r\n' +
        '* Clarified the definition of the host fields #325\r\n' +
        '* Clarified the difference between `@timestamp` and `event.created`. #329\r\n' +
        "* Make phrasing of lowercasing directive more relevant, no matter where it's shown. #332\r\n" +
        '* Specify the `object_type` for field `labels`. #331\r\n' +
        '* Loosen up definition of `geo` field set. Not necessarily geo-ip based, since `geo.name`. #333\r\n' +
        '* Clarified guidelines on ID fields. #349\r\n' +
        '\r\n' +
        '\r\n'
    },
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/14473778',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/14473778/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/14473778/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v1.0.0-beta2',
      id: 14473778,
      author: [Object],
      node_id: 'MDc6UmVsZWFzZTE0NDczNzc4',
      tag_name: 'v1.0.0-beta2',
      target_commitish: 'master',
      name: 'ECS 1.0.0-beta2',
      draft: false,
      prerelease: true,
      created_at: '2018-12-11T18:58:08Z',
      published_at: '2018-12-11T19:06:13Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v1.0.0-beta2',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v1.0.0-beta2',
      body: 'This is the second 1.0.0 pre-release of ECS. From 1.0.0-beta2 to 1.0.0 GA, no further breaking changes and no additions or new fields are planned. All new contributions must go into the master branch.\r\n' +
        '\r\n' +
        '## Breaking changes\r\n' +
        '\r\n' +
        '* Changed `device.*` fields to `observer.*` fields to eliminate user confusion. #238\r\n' +
        '* Rename `network.total.bytes` to `network.bytes` and `network.total.packets`\r\n' +
        '  to `network.packets`. #179\r\n' +
        '* Remove `network.inbound.bytes`, `network.inbound.packets`,\r\n' +
        '  `network.outbound.bytes` and `network.outbound.packets`. #179\r\n' +
        '* Changed the `event.type` definition to be only reserved. #242\r\n' +
        '\r\n' +
        '## Bugfixes\r\n' +
        '\r\n' +
        '* Fix obvious mistake in the definition of "source", where it said "destination"\r\n' +
        '  instead of "source". #211\r\n' +
        '\r\n' +
        '## Added\r\n' +
        '\r\n' +
        '* Add `host.name` field and clarify usage of `host.hostname`. #187\r\n' +
        '* Add `event.start` and `event.end` date fields. #185\r\n' +
        '* Add `process.thread.id` field. #200\r\n' +
        '* Add `host.name` field and clarify usage of `host.hostname`.\r\n' +
        '* Add `event.start` and `event.end` date fields.\r\n' +
        '* Create new `related` field set with `related.ip`. #206\r\n' +
        '* Add `user.group` field. #204\r\n' +
        '* Create new `group` field set with `group.id` and `group.name`. #203\r\n' +
        '* Add `url.full` field. #207\r\n' +
        '* Add `process.executable` field. #209\r\n' +
        '* Add `process.working_directory` and `process.start`. #215\r\n' +
        '* Reintroduce `http`. #237\r\n' +
        '  * Move `http.response.body` to `http.response.body.content`. #239\r\n' +
        '  * Add `http.request.body.content`. #239\r\n' +
        '  * Add HTTP size metric fields. #239\r\n' +
        '* Add `user.full_name` field. #201\r\n' +
        '* Add `network.community_id` field. #208\r\n' +
        '* Add fields `geo.country_name` and `geo.region_iso_code`. #214\r\n' +
        '* Add `event.kind` and `event.outcome`. #242\r\n' +
        '* Add `client` and `server` objects and fields. #236\r\n' +
        '* Reintroduce a streamlined `user_agent` field set. #240, #262\r\n' +
        '* Add `geo.name` for ad hoc location names. #248\r\n' +
        '* Add `event.timezone` to allow for proper interpretation of incomplete timestamps. #258\r\n' +
        '* Add fields `source.address`, `destination.address`, `client.address`, and\r\n' +
        '  `server.address`. #247\r\n' +
        '* Add `os.full` to capture full OS name, including version. #259\r\n' +
        '\r\n' +
        '## Improvements\r\n' +
        '\r\n' +
        '* Improved the definition of the file fields #196\r\n' +
        '* Improved the definition of the agent fields #192\r\n' +
        '* Improve definition of events, logs, and metrics in event section #194\r\n' +
        '* Improved the definition of network fields in intro section #197\r\n' +
        '* Improved the definition of host fields #195\r\n' +
        '* Improved the definitions for `event.category` and `event.action`. #242\r\n' +
        '* Clarify the semantics of `network.direction`. #212\r\n' +
        '* Add `source.bytes`, `source.packets`, `destination.bytes` and `destination.packets`. #179\r\n' +
        '* Add a readme section to declare some top level field sets are reserved for\r\n' +
        '  future use. #257\r\n' +
        '* Clarify that `network.transport`, `network.type`, `network.application`,\r\n' +
        '  and `network.protocol` must be lowercase. #251\r\n' +
        '* Clarify that `http.request.method` must be lowercase. #251\r\n' +
        '* Clarify that source/destination should be filled, even if client/server is\r\n' +
        '  being used. #265'
    },
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/13862012',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/13862012/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/13862012/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v1.0.0-beta1',
      id: 13862012,
      author: [Object],
      node_id: 'MDc6UmVsZWFzZTEzODYyMDEy',
      tag_name: 'v1.0.0-beta1',
      target_commitish: 'master',
      name: 'ECS 1.0.0-beta1',
      draft: false,
      prerelease: true,
      created_at: '2018-11-07T21:26:20Z',
      published_at: '2018-11-07T21:42:39Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v1.0.0-beta1',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v1.0.0-beta1',
      body: '# Changes\r\n' +
        '\r\n' +
        'This is the first 1.0.0 pre-release of ECS. From 1.0.0-beta1 to 1.0.0 GA, no further breaking changes are expected. New fields might still be added.\r\n' +
        '\r\n' +
        '## Breaking changes\r\n' +
        '* Change structure of URL. #7\r\n' +
        '* Rename `url.href` `multi_field`. #18\r\n' +
        '* Rename `geoip.*` to `geo`. #58\r\n' +
        '* Rename log.message to log.original. #106\r\n' +
        '* Rename `event.raw` to `event.original`. #107\r\n' +
        '* Rename `user_agent.raw` to `user_agent.original` and make it a keyword. #107\r\n' +
        '* Rename `file.path.raw` to `file.path.keyword`, `file.target_path.raw` to `file.target_path.keyword`,\r\n' +
        '  `url.href.raw` to `url.href.keyword`, `url.path.raw` to `url.path.keyword`,\r\n' +
        '  `url.query.raw` to `url.query.keyword`, and `network.name.raw` to `network.name.keyword`. #103\r\n' +
        '* Remove `log.offset` and `log.line` as too specific for ECS. #131\r\n' +
        '* Remove top level objects `kubernetes` and `tls`. #132\r\n' +
        '* Remove `*.timezone.offset.sec` fields as too specific for ECS at the moment. #134\r\n' +
        '* Make the following fields keyword: device.vendor, file.path, file.target_path, http.response.body, network.name, organization.name, url.href, url.path, url.query, user_agent.original\r\n' +
        '* Rename `url.host.name` to `url.hostname` to better align with industry convention. #147\r\n' +
        '* Make the following fields keyword: device.vendor, file.path, file.target_path, http.response.body, network.name, organization.name, url.href, url.path, url.query, user_agent.original. #137\r\n' +
        '  * Only two fields using `text` indexing at this time are `message` and `error.message`.\r\n' +
        '* Rename `host.name` to `host.hostname` to better align with industry convention. #144\r\n' +
        '* Update definition of `service.type` and `service.name`.\r\n' +
        '* Redefine purpose of `agent.name` field to be user defined field.\r\n' +
        '* Rename `url.href` to `url.original`.\r\n' +
        '* Remove `source.subdomain` and `destination.subdomain` fields.\r\n' +
        '* Rename `event.version` to `ecs.version`. #169\r\n' +
        '* Remove the `http` field set temporarily. #171\r\n' +
        '* Remove the `user_agent` field set temporarily. #172\r\n' +
        '* Rename `url.hostname` to `url.domain`. #175\r\n' +
        '* Remove `source.hostname` and `destination.hostname`. #175\r\n' +
        '\r\n' +
        '## Added\r\n' +
        '* Add `network.total.packets` and `network.total.bytes` field. PR#2\r\n' +
        '* Add `event.action` field. #21\r\n' +
        '* Add `network.name`, to track network names in the monitoring pipeline. #25\r\n' +
        '* Adds cloud.account.id for top level organizational level. #11\r\n' +
        '* Add `http.response.status_code` and `http.response.body` fields. #4\r\n' +
        '* Add fields for Operating System data. #5\r\n' +
        '* Add `log.message`. #3\r\n' +
        '* Add http.request.method and http.version\r\n' +
        '* Add `host.os.kernel` containing the OS kernel version. #60\r\n' +
        '* Add `agent.type` field.\r\n' +
        '* Add `http.request.referrer` field. #164\r\n' +
        '* Add `network.type`, `network.iana_number`, `network.transport` and\r\n' +
        '  `network.application`. #81 and #170\r\n' +
        '\r\n' +
        '## Improvements\r\n' +
        '\r\n' +
        '* Remove duplicate definitions of the reuseable `os` field set from `host.os` and\r\n' +
        '  `user_agent.os`.  #168\r\n'
    },
    {
      url: 'https://api.github.com/repos/elastic/ecs/releases/11151826',
      assets_url: 'https://api.github.com/repos/elastic/ecs/releases/11151826/assets',
      upload_url: 'https://uploads.github.com/repos/elastic/ecs/releases/11151826/assets{?name,label}',
      html_url: 'https://github.com/elastic/ecs/releases/tag/v0.1.0',
      id: 11151826,
      author: [Object],
      node_id: 'MDc6UmVsZWFzZTExMTUxODI2',
      tag_name: 'v0.1.0',
      target_commitish: 'master',
      name: 'ECS 0.1.0',
      draft: false,
      prerelease: false,
      created_at: '2018-05-24T12:39:38Z',
      published_at: '2018-05-24T08:22:19Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/elastic/ecs/tarball/v0.1.0',
      zipball_url: 'https://api.github.com/repos/elastic/ecs/zipball/v0.1.0',
      body: ''
    }
  ]
}
const curlRequestResponse = [
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/56950788",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/56950788/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/56950788/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v1.12.2",
    "id": 56950788,
    "author": {
      "login": "ebeahan",
      "id": 7226265,
      "node_id": "MDQ6VXNlcjcyMjYyNjU=",
      "avatar_url": "https://avatars.githubusercontent.com/u/7226265?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ebeahan",
      "html_url": "https://github.com/ebeahan",
      "followers_url": "https://api.github.com/users/ebeahan/followers",
      "following_url": "https://api.github.com/users/ebeahan/following{/other_user}",
      "gists_url": "https://api.github.com/users/ebeahan/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ebeahan/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ebeahan/subscriptions",
      "organizations_url": "https://api.github.com/users/ebeahan/orgs",
      "repos_url": "https://api.github.com/users/ebeahan/repos",
      "events_url": "https://api.github.com/users/ebeahan/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ebeahan/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "RE_kwDOCAccls4DZQAE",
    "tag_name": "v1.12.2",
    "target_commitish": "1.12",
    "name": "ECS 1.12.2",
    "draft": false,
    "prerelease": false,
    "created_at": "2022-01-12T20:26:33Z",
    "published_at": "2022-01-12T20:40:14Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v1.12.2",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v1.12.2",
    "body": "### Tooling and Artifact Changes\r\n\r\n#### Bugfixes\r\n\r\n* Add `object` as fallback for `flattened` type. #1653"
  },
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/50984704",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/50984704/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/50984704/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v1.12.1",
    "id": 50984704,
    "author": {
      "login": "kgeller",
      "id": 9203126,
      "node_id": "MDQ6VXNlcjkyMDMxMjY=",
      "avatar_url": "https://avatars.githubusercontent.com/u/9203126?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/kgeller",
      "html_url": "https://github.com/kgeller",
      "followers_url": "https://api.github.com/users/kgeller/followers",
      "following_url": "https://api.github.com/users/kgeller/following{/other_user}",
      "gists_url": "https://api.github.com/users/kgeller/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/kgeller/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/kgeller/subscriptions",
      "organizations_url": "https://api.github.com/users/kgeller/orgs",
      "repos_url": "https://api.github.com/users/kgeller/repos",
      "events_url": "https://api.github.com/users/kgeller/events{/privacy}",
      "received_events_url": "https://api.github.com/users/kgeller/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "RE_kwDOCAccls4DCfcA",
    "tag_name": "v1.12.1",
    "target_commitish": "1.12",
    "name": "ECS 1.12.1",
    "draft": false,
    "prerelease": false,
    "created_at": "2021-10-07T18:05:45Z",
    "published_at": "2021-10-07T18:13:23Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v1.12.1",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v1.12.1",
    "body": "### Schema Changes\r\n\r\n#### Bugfixes\r\n\r\n* Updating `x509` order to correct nesting. ##1621"
  },
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/50350892",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/50350892/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/50350892/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v1.12.0",
    "id": 50350892,
    "author": {
      "login": "kgeller",
      "id": 9203126,
      "node_id": "MDQ6VXNlcjkyMDMxMjY=",
      "avatar_url": "https://avatars.githubusercontent.com/u/9203126?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/kgeller",
      "html_url": "https://github.com/kgeller",
      "followers_url": "https://api.github.com/users/kgeller/followers",
      "following_url": "https://api.github.com/users/kgeller/following{/other_user}",
      "gists_url": "https://api.github.com/users/kgeller/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/kgeller/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/kgeller/subscriptions",
      "organizations_url": "https://api.github.com/users/kgeller/orgs",
      "repos_url": "https://api.github.com/users/kgeller/repos",
      "events_url": "https://api.github.com/users/kgeller/events{/privacy}",
      "received_events_url": "https://api.github.com/users/kgeller/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "RE_kwDOCAccls4DAEss",
    "tag_name": "v1.12.0",
    "target_commitish": "1.12",
    "name": "ECS 1.12.0",
    "draft": false,
    "prerelease": false,
    "created_at": "2021-09-28T16:05:51Z",
    "published_at": "2021-09-28T16:06:30Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v1.12.0",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v1.12.0",
    "body": "The following RFCs have advanced as a part of this release:\r\n\r\n### Stage 3 (GA)\r\n\r\n* [RFC 0018 - extend `threat.*` field set](https://github.com/elastic/ecs/blob/master/rfcs/text/0018-extend-threat-group-software.md)\r\n* [RFC 0001 - wildcard field migration](https://github.com/elastic/ecs/blob/master/rfcs/text/0001-wildcard-data-type.md)\r\n* [RFC 0023 - migrate `text` to `match_only_text` type](https://github.com/elastic/ecs/blob/master/rfcs/text/0023-match_only_text-data-type.md)\r\n\r\n### Stage 2 (beta)\r\n\r\n* [RFC 0002 - `service.environment` field](https://github.com/elastic/ecs/blob/master/rfcs/text/0002-rfc-environment.md)\r\n\r\n### Stage 1 (experimental)\r\n\r\n* [RFC 0010 - `email.*` field set](https://github.com/elastic/ecs/blob/master/rfcs/text/0010-email.md)\r\n* [RFC 0025 - container metric fields](https://github.com/elastic/ecs/blob/master/rfcs/text/0025-container-metric-fields.md)\r\n\r\nThere's also been a couple of new field additions in 1.12: [`file.fork_name`](https://github.com/elastic/ecs/pull/1288), [`service.address`](https://github.com/elastic/ecs/pull/1537), [`process.end`](https://github.com/elastic/ecs/pull/1544), [`code_signature.digest_algorithm` and `code_signature.timestamp`](https://github.com/elastic/ecs/pull/1557).\r\n\r\nLastly, a couple tooling and documentation improvements. There now exists support for multi-field type fallback to better support ES 6 types as well as the new `match_only_text` type. And finally, we updated examples within `user` to better clarify things.\r\n\r\n## Changelog\r\n\r\n### Schema Changes\r\n\r\n#### Bugfixes\r\n\r\n* Updating `hash` order to correct nesting. #1603\r\n* Removing incorrect `hash` reuses. #1604\r\n* Updating `pe` order to correct nesting. #1605\r\n* Removing incorrect `pe` reuses. #1606\r\n* Correcting `enrichments` to an `array` type. #1608\r\n\r\n#### Added\r\n\r\n* Added `file.fork_name` field. #1288\r\n* Added `service.address` field. #1537\r\n* Added `service.environment` as a beta field. #1541\r\n* Added `process.end` field. #1544\r\n* Added container metric fields into experimental schema. #1546\r\n* Add `code_signature.digest_algorithm` and `code_signature.timestamp` fields. #1557\r\n* Add `email.*` field set in the experimental fields. #1569\r\n\r\n#### Improvements\r\n\r\n* Beta migration on some `keyword` fields to `wildcard`. #1517\r\n* Promote `threat.software.*` and `threat.group.*` fields to GA. #1540\r\n* Update `user.name` and `user.id` examples for clarity. #1566\r\n* Beta migration of `text` and `.text` multi-fields to `match_only_text`. #1532, #1571\r\n\r\n### Tooling and Artifact Changes\r\n\r\n#### Added\r\n\r\n* Support ES 6.x type fallback for `match_only_text` field types. #1528\r\n\r\n#### Bugfixes\r\n\r\n* Prevent failure if no files need to be deleted `find | xargs rm`. #1588\r\n\r\n#### Improvements\r\n\r\n* Document field type family interoperability in FAQ. #1591"
  },
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/47375347",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/47375347/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/47375347/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v1.11.0",
    "id": 47375347,
    "author": {
      "login": "ebeahan",
      "id": 7226265,
      "node_id": "MDQ6VXNlcjcyMjYyNjU=",
      "avatar_url": "https://avatars.githubusercontent.com/u/7226265?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ebeahan",
      "html_url": "https://github.com/ebeahan",
      "followers_url": "https://api.github.com/users/ebeahan/followers",
      "following_url": "https://api.github.com/users/ebeahan/following{/other_user}",
      "gists_url": "https://api.github.com/users/ebeahan/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ebeahan/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ebeahan/subscriptions",
      "organizations_url": "https://api.github.com/users/ebeahan/orgs",
      "repos_url": "https://api.github.com/users/ebeahan/repos",
      "events_url": "https://api.github.com/users/ebeahan/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ebeahan/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "MDc6UmVsZWFzZTQ3Mzc1MzQ3",
    "tag_name": "v1.11.0",
    "target_commitish": "1.11",
    "name": "ECS 1.11.0",
    "draft": false,
    "prerelease": false,
    "created_at": "2021-08-12T15:20:50Z",
    "published_at": "2021-08-12T15:29:07Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v1.11.0",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v1.11.0",
    "body": "The following RFCs have advanced as part of this release:\r\n\r\n### Stage 3 (GA)\r\n\r\n* [RFC 0012 - orchestrator field set](https://github.com/elastic/ecs/blob/master/rfcs/text/0012-orchestrator-field-set.md)\r\n\r\n### Stage 2 (beta)\r\n\r\n* [RFC 0008 - Threat indicator fields](https://github.com/elastic/ecs/blob/master/rfcs/text/0008-threat-intel.md)\r\n* [RFC 0015 - `elf` file fields](https://github.com/elastic/ecs/blob/master/rfcs/text/0015-create-file-elf.md)\r\n* [RFC 0018 - Extend the `threat.*` field set with `threat.software.*` and `threat.group.*` fields](https://github.com/elastic/ecs/blob/master/rfcs/text/0018-extend-threat-group-software.md)\r\n* [RFC 0021 - Threat enrichment](https://github.com/elastic/ecs/blob/master/rfcs/text/0021-threat-enrichment.md)\r\n\r\n### Stage 1 (experimental)\r\n\r\n* [RFC 0016 - Target process fields](https://github.com/elastic/ecs/blob/master/rfcs/text/0016-target-process.md)\r\n\r\nThe `event.agent_id_status` field is also new in 1.11 to reflect the status of the `agent.id` verification performed by a receiving system or data pipeline.\r\n\r\nLastly, many tooling and documentation improvements, including the `--exclude` flag. The `--exclude` flag adds the ability to remove individual fields from the schema. More detail is available in the [usage doc](https://github.com/elastic/ecs/blob/1.11/USAGE.md#exclude).\r\n\r\n## Changelog\r\n\r\n### Schema Changes\r\n\r\n#### Added\r\n\r\n* `elf.*` field set added as beta. #1410\r\n* Remove `beta` from `orchestrator` field set. #1417\r\n* Extend `threat.*` field set beta. #1438\r\n* Added `event.agent_id_status` field. #1454\r\n* `process.target` and `process.target.parent` added to experimental schema. #1467\r\n* Threat indicator fields progress to beta stage. #1471, #1504\r\n* `threat.enrichments` beta fields. #1478, #1504\r\n\r\n#### Improvements\r\n\r\n* Fix ecs GitHub repo link source branch #1393\r\n* Add --exclude flag to Generator to support field removal testing #1411\r\n* Explicitly include user identifiers in `relater.user` description. #1420\r\n* Improve descriptions for `cloud.region` and `cloud.availability` fields. #1452\r\n* Clarify `event.kind` descriptions for `alert` and `signal`. #1548\r\n\r\n#### Deprecated\r\n\r\n* Note deprecation of the `host.user.*` field reuse. #1422\r\n* Note deprecation of `log.original` superseded by `event.original` #1469\r\n\r\n### Tooling and Artifact Changes\r\n\r\n#### Bugfixes\r\n\r\n* Remove `ignore_above` when `index: false` and `doc_values: false`. #1483\r\n* Ensure `doc_values` is carried into Beats artifacts. #1488\r\n\r\n#### Added\r\n\r\n* Support `match_only_text` data type in Go code generator. #1418\r\n* Support for multi-level, self-nestings. #1459\r\n* `beta` attribute now supported on categorization allowed values. #1511\r\n\r\n#### Improvements\r\n\r\n* Swap `Location` and `Field Set` columns in `Field Reuse` table for better readability. #1472, #1476\r\n* Use a bullet points to list field reuses. #1473\r\n* Improve wording in `Threat` schema #1505"
  },
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/43927779",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/43927779/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/43927779/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v1.10.0",
    "id": 43927779,
    "author": {
      "login": "kgeller",
      "id": 9203126,
      "node_id": "MDQ6VXNlcjkyMDMxMjY=",
      "avatar_url": "https://avatars.githubusercontent.com/u/9203126?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/kgeller",
      "html_url": "https://github.com/kgeller",
      "followers_url": "https://api.github.com/users/kgeller/followers",
      "following_url": "https://api.github.com/users/kgeller/following{/other_user}",
      "gists_url": "https://api.github.com/users/kgeller/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/kgeller/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/kgeller/subscriptions",
      "organizations_url": "https://api.github.com/users/kgeller/orgs",
      "repos_url": "https://api.github.com/users/kgeller/repos",
      "events_url": "https://api.github.com/users/kgeller/events{/privacy}",
      "received_events_url": "https://api.github.com/users/kgeller/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "MDc6UmVsZWFzZTQzOTI3Nzc5",
    "tag_name": "v1.10.0",
    "target_commitish": "1.10",
    "name": "ECS 1.10.0",
    "draft": false,
    "prerelease": false,
    "created_at": "2021-06-02T13:06:05Z",
    "published_at": "2021-06-02T13:09:03Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v1.10.0",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v1.10.0",
    "body": "A handful of new additions from the [ECS RFC process](https://github.com/elastic/ecs/blob/master/rfcs/PROCESS.md) are included in this release:\r\n\r\n* The host metrics RFC has advanced to Finished status with [host metrics](https://github.com/elastic/ecs/blob/master/rfcs/text/0005-host-metric-fields.md) fields becoming GA.\r\n* The [orchestrator](https://github.com/elastic/ecs/blob/master/rfcs/text/0012-orchestrator-field-set.md) fieldset RFC has advanced to Stage 3, and the fieldset has been released for beta.\r\n* The [`data_stream`](https://github.com/elastic/ecs/blob/master/rfcs/text/0009-data_stream-fields.md) fields moved to Stage 2, and are released for beta.\r\n* We are [extending the existing `threat.*](https://github.com/elastic/ecs/blob/master/rfcs/text/0018-extend-threat-group-software.md) fields, which are released as experimental.\r\n\r\nIn addition to RFC proposed changes, ECS 1.10.0 also adds some documentation updates, including the ability to add a `short_override` to field reuses for a custom description.\r\n\r\nFinally, there is now support for flattened and nested types in the Go code generator script.\r\n\r\n## Changelog\r\n\r\n### Schema Changes\r\n\r\n#### Added\r\n\r\n* Add `data_stream` fieldset. #1307\r\n* Add `orchestrator` fieldset as beta fields. #1326\r\n* Extend `threat.*` experimental fields with proposed changes from RFC 0018. #1344, #1351\r\n* Allow custom descriptions for self-nesting reuses via `short_override` #1366\r\n\r\n#### Improvements\r\n\r\n* Updated descriptions to use Elastic Security #1305\r\n* Host metrics fields from RFC 0005 are now GA. #1319\r\n* Adjustments to the field set \"usage\" docs #1345\r\n* Adjustments to the sidebar naming convention for usage and examples docs #1354\r\n* Update `user.*` field reuse descriptions. #1382\r\n\r\n### Tooling and Artifact Changes\r\n\r\n#### Bugfixes\r\n\r\n* Correcting fieldset name capitalization for generated ES template #1323\r\n\r\n#### Improvements\r\n\r\n* Support `nested` types in go code generator. #1254, #1350\r\n* Go code generator now supports the `flattened` data type. #1302\r\n* Adjustments to use terminology that doesn't have negative connotation. #1315\r\n",
    "reactions": {
      "url": "https://api.github.com/repos/elastic/ecs/releases/43927779/reactions",
      "total_count": 2,
      "+1": 1,
      "-1": 0,
      "laugh": 0,
      "hooray": 1,
      "confused": 0,
      "heart": 0,
      "rocket": 0,
      "eyes": 0
    }
  },
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/40649253",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/40649253/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/40649253/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v1.9.0",
    "id": 40649253,
    "author": {
      "login": "ebeahan",
      "id": 7226265,
      "node_id": "MDQ6VXNlcjcyMjYyNjU=",
      "avatar_url": "https://avatars.githubusercontent.com/u/7226265?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ebeahan",
      "html_url": "https://github.com/ebeahan",
      "followers_url": "https://api.github.com/users/ebeahan/followers",
      "following_url": "https://api.github.com/users/ebeahan/following{/other_user}",
      "gists_url": "https://api.github.com/users/ebeahan/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ebeahan/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ebeahan/subscriptions",
      "organizations_url": "https://api.github.com/users/ebeahan/orgs",
      "repos_url": "https://api.github.com/users/ebeahan/repos",
      "events_url": "https://api.github.com/users/ebeahan/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ebeahan/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "MDc6UmVsZWFzZTQwNjQ5MjUz",
    "tag_name": "v1.9.0",
    "target_commitish": "1.9",
    "name": "ECS 1.9.0",
    "draft": false,
    "prerelease": false,
    "created_at": "2021-03-30T15:28:06Z",
    "published_at": "2021-03-30T14:52:13Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v1.9.0",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v1.9.0",
    "body": "Several additions introduced from the [ECS RFC process](https://github.com/elastic/ecs/blob/master/rfcs/PROCESS.md) are included in this release:\r\n\r\n* The [multiple users](https://github.com/elastic/ecs/blob/master/rfcs/text/0007-multiple-users.md) proposal has advanced to `Finished` status with `user.changes.*`, `user.effective.*`, and `user.target.*` field reuses becoming GA. \r\n* [Host metrics fields](https://github.com/elastic/ecs/blob/master/rfcs/text/0005-host-metric-fields.md) are now beta.\r\n* The [`threat.indicator` fields](https://github.com/elastic/ecs/blob/master/rfcs/text/0008-threat-intel.md), [`elf.*` fields](https://github.com/elastic/ecs/blob/master/rfcs/text/0015-create-file-elf.md), [`pe.*` extensions](https://github.com/elastic/ecs/blob/master/rfcs/text/0014-extend-file-pe.md), and [`data_stream.*` fieldset](https://github.com/elastic/ecs/blob/master/rfcs/text/0009-data_stream-fields.md) are now in the experimental ECS schema.\r\n\r\nA new [section](https://www.elastic.co/guide/en/ecs/1.9/ecs-using-the-categorization-fields.html) has been added to the ECS event categorization documentation. Real-world example events are categorized to demonstrate using the event categorization fields to group and identify similar events from multiple data sources.\r\n\r\nIn addition to RFC proposed changes, ECS 1.9.0 also adds:\r\n* `http.request.id`\r\n* `cloud.service.name`\r\n* `hash.ssdeep`\r\n* `code_signature.team_id` and `code_signature.signing_id`\r\n* Additional fields to the `geo.*` fieldset: `geo.timezone`, `geo.postal_code`, `geo.continent_code`\r\n\r\nFinally, `*.mac` field descriptions now suggest normalizing MAC address values to the RFC7042 format.\r\n\r\n## Changelog\r\n\r\n### Schema Changes\r\n\r\n#### Added\r\n\r\n* Added `hash.ssdeep`. #1169\r\n* Added `cloud.service.name`. #1204\r\n* Added `http.request.id`. #1208\r\n* `data_stream.*` fieldset introduced in experimental schema and artifacts. #1215\r\n* Added `geo.timezone`, `geo.postal_code`, and `geo.continent_code`. #1229\r\n* Added `beta` host metrics fields. #1248\r\n* Added `code_signature.team_id`, `code_signature.signing_id`. #1249\r\n* Extended `pe` fields added to experimental schema. #1256\r\n* Add `elf` fieldset to experimental schema. #1261\r\n* Add `threat.indicator` fields to experimental schema. #1268\r\n\r\n#### Improvements\r\n\r\n* Include formatting guidance and examples for MAC address fields. #456\r\n* New section in ECS detailing event categorization fields usage. #1242\r\n* `user.changes.*`, `user.effective.*`, and `user.target.*` field reuses are GA. #1271\r\n\r\n### Tooling and Artifact Changes\r\n\r\n#### Improvements\r\n\r\n* Update Python dependencies #1310, #1318\r\n* Adjustments to use terminology that doesn't have negative connotation. #1315"
  },
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/38123784",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/38123784/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/38123784/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v1.8.0",
    "id": 38123784,
    "author": {
      "login": "ebeahan",
      "id": 7226265,
      "node_id": "MDQ6VXNlcjcyMjYyNjU=",
      "avatar_url": "https://avatars.githubusercontent.com/u/7226265?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ebeahan",
      "html_url": "https://github.com/ebeahan",
      "followers_url": "https://api.github.com/users/ebeahan/followers",
      "following_url": "https://api.github.com/users/ebeahan/following{/other_user}",
      "gists_url": "https://api.github.com/users/ebeahan/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ebeahan/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ebeahan/subscriptions",
      "organizations_url": "https://api.github.com/users/ebeahan/orgs",
      "repos_url": "https://api.github.com/users/ebeahan/repos",
      "events_url": "https://api.github.com/users/ebeahan/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ebeahan/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "MDc6UmVsZWFzZTM4MTIzNzg0",
    "tag_name": "v1.8.0",
    "target_commitish": "1.8",
    "name": "ECS 1.8.0",
    "draft": false,
    "prerelease": false,
    "created_at": "2021-02-16T19:26:24Z",
    "published_at": "2021-02-16T19:47:36Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v1.8.0",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v1.8.0",
    "body": "In this release, two ECS RFCs are advancing. The [multiple users in an event RFC](https://github.com/elastic/ecs/blob/master/rfcs/text/0007-multiple-users.md) proposed field reuses now appear in the ECS documentation as beta. The [host metrics fields](https://github.com/elastic/ecs/blob/master/rfcs/text/0005-host-metric-fields.md) are also advancing and are available in the [experimental schema and artifacts](https://github.com/elastic/ecs/tree/v1.8.0/experimental).\r\n\r\nAccompanying the `multiple user` changes, the `user.*` fieldset adds ECS' first [usage doc](https://github.com/elastic/ecs/tree/master/docs/usage#usage-docs). The [user usage](https://www.elastic.co/guide/en/ecs/1.8/ecs-user-usage.html) page contains guidance on categorization, user ids, field reuse, and mapping examples.\r\n\r\nThe [event categorization fields](https://www.elastic.co/guide/en/ecs/1.8/ecs-category-field-values-reference.html), with the initial set of allowed values, were introduced as beta in ECS 1.4.0. Over the past several ECS released, we've iterated and further fleshed out these fields and values.  We're excited to announce that the event categorization fields are now generally available!\r\n\r\nIn addition to the event categorizations fields becoming GA, two additional `event.category` allowed values have also been introduced: `registry` and `session.`\r\n\r\nA new field, `os.type`, is intended to ease filtering for Windows, Unix, Linux, and macOS events.\r\n\r\nFinally, a component template and composable templates (per fieldset) have been added as generated artifacts. The legacy index templates for Elasticsearch 6.x and 7.x are still being maintained. More details covered [here](https://github.com/elastic/ecs/tree/v1.8.0/generated/elasticsearch).\r\n\r\n## Changelog\r\n\r\n### Schema Changes\r\n\r\n#### Bugfixes\r\n\r\n* Clean up `event.reference` description. #1181\r\n* Go code generator fails if `scaled_float` type is used. #1250\r\n\r\n#### Added\r\n\r\n* Added `event.category` \"registry\". #1040\r\n* Added `event.category` \"session\". #1049\r\n* Added usage documentation for `user` fields. #1066\r\n* Added `user` fields at `user.effective.*`, `user.target.*` and `user.changes.*`. #1066\r\n* Added `os.type`. #1111\r\n\r\n#### Improvements\r\n\r\n* Event categorization fields GA. #1067\r\n* Note `[` and `]` bracket characters may enclose a literal IPv6 address when populating `url.domain`. #1131\r\n* Reinforce the exclusion of the leading dot from `url.extension`. #1151\r\n\r\n#### Deprecated\r\n\r\n* Deprecated `host.user.*` fields for removal at the next major. #1066\r\n\r\n### Tooling and Artifact Changes\r\n\r\n#### Bugfixes\r\n\r\n* `tracing` fields should be at root of Beats `fields.ecs.yml` artifacts. #1164\r\n\r\n#### Added\r\n\r\n* Added the `path` key when type is `alias`, to support the [alias field type](https://www.elastic.co/guide/en/elasticsearch/reference/current/alias.html). #877\r\n* Added support for `scaled_float`'s mandatory parameter `scaling_factor`. #1042\r\n* Added ability for --oss flag to fall back `constant_keyword` to `keyword`. #1046\r\n* Added support in the generated Go source go for `wildcard`, `version`, and `constant_keyword` data types. #1050\r\n* Added support for marking fields, field sets, or field reuse as beta in the documentation. #1051\r\n* Added support for `constant_keyword`'s optional parameter `value`. #1112\r\n* Added component templates for ECS field sets. #1156, #1186, #1191\r\n* Added functionality for merging custom and core multi-fields. #982\r\n\r\n#### Improvements\r\n\r\n* Make all fields linkable directly. #1148\r\n* Added a notice highlighting that the `tracing` fields are not nested under the\r\n  namespace `tracing.` #1162\r\n* ES 6.x template data types will fallback to supported types. #1171, #1176, #1186\r\n* Add a documentation page discussing the experimental artifacts. #1189"
  },
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/34022671",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/34022671/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/34022671/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v1.7.0",
    "id": 34022671,
    "author": {
      "login": "ebeahan",
      "id": 7226265,
      "node_id": "MDQ6VXNlcjcyMjYyNjU=",
      "avatar_url": "https://avatars.githubusercontent.com/u/7226265?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ebeahan",
      "html_url": "https://github.com/ebeahan",
      "followers_url": "https://api.github.com/users/ebeahan/followers",
      "following_url": "https://api.github.com/users/ebeahan/following{/other_user}",
      "gists_url": "https://api.github.com/users/ebeahan/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ebeahan/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ebeahan/subscriptions",
      "organizations_url": "https://api.github.com/users/ebeahan/orgs",
      "repos_url": "https://api.github.com/users/ebeahan/repos",
      "events_url": "https://api.github.com/users/ebeahan/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ebeahan/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "MDc6UmVsZWFzZTM0MDIyNjcx",
    "tag_name": "v1.7.0",
    "target_commitish": "1.7",
    "name": "ECS 1.7.0",
    "draft": false,
    "prerelease": false,
    "created_at": "2020-11-17T15:06:19Z",
    "published_at": "2020-11-17T15:10:06Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v1.7.0",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v1.7.0",
    "body": "### Experimental Changes\r\nA few months ago, we introduced the [RFC process](https://github.com/elastic/ecs/tree/master/rfcs). This process is meant to fully vet big additions or changes to ECS. A key aspect of this process is that proposals advance in stages. Each stage represents the vetting and maturity of the proposal.\r\n\r\nWe won’t go over the process in detail here, but one of its key aspects is that accepted “stage 2” proposals appear in “experimental” ECS artifacts. They don’t yet appear officially in ECS documentation. Proposals that reach “stage 3” are the ones that will officially appear in ECS documentation.\r\n\r\nECS 1.7 is the first release that includes RFCs that have reached stage 2 / experimental changes. A new directory has therefore been added, where all the usual generated artifacts are published including the experimental changes. This is at [experimental/generated](https://github.com/elastic/ecs/tree/1.7/experimental/generated).\r\n\r\nThis release includes experimental changes from two RFCs reaching stage 2:\r\n\r\n* Replace the `keyword` type on many existing ECS fields with the new `wildcard`  type.\r\n* Adding more places where user fields can be nested, in order to capture privilege escalations & demotions as well as IAM. These experimental nestings are `user.effective.*`, `user.target.*`, and `user.changes.*`.\r\n\r\n### “Normal” Changes\r\n\r\nContrary to the new experimental changes described above, the following changes are reflected in the documentation.\r\n\r\nTwo new fields are introduced: `http.[request|response].mime_type`/ and `threat.technique.subtechnique`.\r\n\r\nBoth the `network.direction` and `event.category` fields add support for additional allowed values.\r\n\r\nThe ECS generator script adds two new arguments, `--oss` and `--strict`. See [usage](https://github.com/elastic/ecs/blob/1.7/USAGE.md) for more details and examples.\r\n\r\nLastly, we have changed the index pattern of the [sample Elasticsearch template](https://github.com/elastic/ecs/tree/master/generated/elasticsearch) from  `ecs-*` to `try-ecs-*` to avoid conflicting with Logstash' template when run in ECS compatibility mode.\r\n\r\n## Changelog\r\n\r\n### Schema Changes\r\n\r\n#### Bugfixes\r\n\r\n* The `protocol` allowed value under `event.type` should not have the `expected_event_types` defined. #964\r\n* Clarify the definition of `file.extension` (no dots). #1016\r\n\r\n#### Added\r\n\r\n* Added Mime Type fields to HTTP request and response. #944\r\n* Added network directions ingress and egress. #945\r\n* Added `threat.technique.subtechnique` to capture MITRE ATT&CK® subtechniques. #951\r\n* Added `configuration` as an allowed `event.category`. #963\r\n* Added a new directory with experimental artifacts, which includes all changes\r\n  from RFCs that have reached stage 2. #993, #1053, #1115, #1117, #1118\r\n\r\n#### Improvements\r\n\r\n* Expanded field set definitions for `source.*` and `destination.*`. #967\r\n* Provided better guidance for mapping network events. #969\r\n* Added the field `.subdomain` under `client`, `destination`, `server`, `source`\r\n  and `url`, to match its presence at `dns.question.subdomain`. #981\r\n* Clarified ambiguity in guidance on how to use x509 fields for connections with\r\n  only one certificate. #1114\r\n\r\n### Tooling and Artifact Changes\r\n\r\n#### Breaking changes\r\n\r\n* Changed the index pattern of the sample Elasticsearch template from `ecs-*` to\r\n  `try-ecs-*` to avoid conflicting with Logstash' `ecs-logstash-*`. #1048\r\n\r\n#### Bugfixes\r\n\r\n* Addressed issue where foreign reuses weren't using the user-supplied `as` value for their destination. #960\r\n* Experimental artifacts failed to install due to `event.original` index setting. #1053\r\n\r\n#### Added\r\n\r\n* Introduced `--strict` flag to perform stricter schema validation when running the generator script. #937\r\n* Added check under `--strict` that ensures composite types in example fields are quoted. #966\r\n* Added `ignore_above` and `normalizer` support for keyword multi-fields. #971\r\n* Added `--oss` flag for users who want to generate ECS templates for use on OSS clusters. #991\r\n\r\n#### Improvements\r\n\r\n* Field details Jinja2 template components have been consolidated into one template #897\r\n* Add `[discrete]` marker before each section header in field details. #989\r\n* `--ref` now loads `experimental/schemas` based on git ref in addition to `schemas`. #1063"
  },
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/30070550",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/30070550/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/30070550/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v1.6.0",
    "id": 30070550,
    "author": {
      "login": "ebeahan",
      "id": 7226265,
      "node_id": "MDQ6VXNlcjcyMjYyNjU=",
      "avatar_url": "https://avatars.githubusercontent.com/u/7226265?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ebeahan",
      "html_url": "https://github.com/ebeahan",
      "followers_url": "https://api.github.com/users/ebeahan/followers",
      "following_url": "https://api.github.com/users/ebeahan/following{/other_user}",
      "gists_url": "https://api.github.com/users/ebeahan/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ebeahan/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ebeahan/subscriptions",
      "organizations_url": "https://api.github.com/users/ebeahan/orgs",
      "repos_url": "https://api.github.com/users/ebeahan/repos",
      "events_url": "https://api.github.com/users/ebeahan/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ebeahan/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "MDc6UmVsZWFzZTMwMDcwNTUw",
    "tag_name": "v1.6.0",
    "target_commitish": "1.6",
    "name": "ECS 1.6.0",
    "draft": false,
    "prerelease": false,
    "created_at": "2020-08-24T20:50:34Z",
    "published_at": "2020-08-25T14:23:09Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v1.6.0",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v1.6.0",
    "body": "This release adds the `x509.*` field set to capture common core fields for x509 certificates. Other notable schema changes include the introduction of `event.reason` , adding `span.id` to the `transaction.*` field set, and new `related.*` fields. Please see the full schema change details below.\r\n\r\nBefore this release, there was no way to reuse field sets as different names inside themselves. Now nesting fields within themselves, such as `process` => `process.parent`, and defining nested sets using a different name are both available. \r\n\r\nDid you know you can use the Python scripts in the ECS repository to generate Elasticsearch templates containing the only ECS fields you need + your custom fields? A lot of the changes in the \"tooling and artifact\" changelog below are about how we improved this experience. However you can jump directly to the new [usage](https://github.com/elastic/ecs/blob/master/USAGE.md) documentation to learn how to do this.\r\n\r\nFinally in previous releases, reusable fields **not** expected at the root of documents were accidentally defined at the root in some generated artifacts. This incorrect behavior is fixed in this release.\r\n\r\n### Schema Changes\r\n\r\n#### Bugfixes\r\n\r\n* Field `registry.data.strings` should have been marked as an array field. #790\r\n\r\n#### Added\r\n\r\n* Added `x509.*` field set. #762\r\n* Add architecture and imphash for PE field set. #763\r\n* Added `agent.build.*` for extended agent version information. #764\r\n* Added `log.file.path` to capture the log file an event came from. #802\r\n* Added more account and project cloud metadata. #816\r\n* Added missing field reuse of `pe` at `process.parent.pe` #868\r\n* Added `span.id` to the tracing fieldset, for additional log correlation #882\r\n* Added `event.reason` for the reason why an event's outcome or action was taken. #907\r\n* Added `related.hosts` to capture all hostnames and host identifiers on an event. #913\r\n* Added `user.roles` to capture a list of role names that apply to the user. #917\r\n\r\n#### Improvements\r\n\r\n* Removed misleading pluralization in the description of `user.id`, it should\r\n  contain one ID, not many. #801\r\n* Clarified misleading wording about multiple IPs in src/dst or cli/srv. #804\r\n* Improved verbiage about the MITRE ATT&CK® framework. #866\r\n* Removed the default `object_type=keyword` that was being applied to `object` fields.\r\n  This attribute is Beats-specific. It's still supported, but needs to be set explicitly\r\n  on a case by case basis now. This default being removed affects `dns.answers`,\r\n  `log.syslog`, `network.inner`, `observer.egress`, and `observer.ingress`. #871\r\n* Improved attribute `dashed_name` in `generated/ecs/*.yml` to also\r\n  replace `@` with `-`. #871\r\n* Updated several URLs in the documentation with \"example.com\" domain. #910\r\n\r\n#### Deprecated\r\n\r\n* Deprecate guidance to lowercase `http.request.method` #840\r\n\r\n\r\n### Tooling and Artifact Changes\r\n\r\n#### Breaking changes\r\n\r\n* Removed field definitions at the root of documents for fieldsets that\r\n  had `reusable.top_level:false`. This PR affects `ecs_flat.yml`, the csv file\r\n  and the sample Elasticsearch templates. #495, #813\r\n* Removed the `order` attribute from the `ecs_nested.yml` and `ecs_flat.yml` files. #811\r\n* In `ecs_nested.yml`, the array of strings that used to be in `reusable.expected`\r\n  has been replaced by an array of objects with 3 keys: 'as', 'at' and 'full'. #864\r\n* The subset format now requires `name` and `fields` keys at the top level. #873\r\n\r\n#### Bugfixes\r\n\r\n* Subsets are created after duplicating reusable fields now so subsets can\r\n  be applied to each reused instance independently. #753\r\n* Quoted the example for `labels` to avoid YAML interpreting it, and having\r\n  slightly different results in different situations. #782\r\n* Fix incorrect listing of where field sets are nested in asciidoc,\r\n  when they are nested deep. #784\r\n* Allow beats output to be generated when using `--include` or `--subset` flags. #814\r\n* Field parameter `index` is now correctly populated in the Beats field definition file. #824\r\n\r\n#### Improvements\r\n\r\n* Add support for reusing official fieldsets in custom schemas. #751\r\n* Add full path names to reused fieldsets in `nestings` array in `ecs_nested.yml`. #803\r\n* Allow shorthand notation for including all subfields in subsets. #805\r\n* Add support for Elasticsearch `enabled` field parameter. #824\r\n* Add `ref` option to generator allowing schemas to be built for a specific ECS version. #851\r\n* Add `template-settings` and `mapping-settings` options to allow override of defaults in generated ES templates. #856\r\n* When overriding ECS field sets via the `--include` flag, it's no longer necessary\r\n  to duplicate the field set's mandatory attributes. The customizations are merged\r\n  before validation. #864\r\n* Add ability to nest field sets as another name. #864\r\n* Add ability to nest field sets within themselves (e.g. `process` => `process.parent`). #864\r\n* New attribute `reused_here` is added in `ecs_nested.yml`. It obsoletes the\r\n  previous attribute `nestings`, and is able to fully capture details of other\r\n  field sets reused under this one. #864\r\n* When chained reuses are needed (e.g. `group` => `user`, then `user` => many places),\r\n  it's now necessary to force the order with new attribute `reusable.order`. This\r\n  attribute is otherwise optional. It's currently only needed for `group`. #864\r\n* There's a new representation of ECS at `generated/ecs/ecs.yml`, which is a deeply nested\r\n  representation of the fields. This file is not in git, as it's only meant for\r\n  developers working on the ECS tools. #864\r\n* Jinja2 templates now define the doc structure for the AsciiDoc generator. #865\r\n* Intermediate `ecs_flat.yml` and `ecs_nested.yml` files are now generated for each individual subset,\r\n  in addition to the intermediate files generated for the combined subset. #873\r\n\r\n#### Deprecated\r\n\r\n* In `ecs_nested.yml`, we're deprecating the attribute `nestings`. It will be\r\n  removed in a future release. The deprecated `nestings` attribute was an array of\r\n  flat field names describing where fields are nested within the field set.\r\n  This is replaced with the attribute `reused_here`, which is an array of objects.\r\n  The new format still lists where the fields are nested via the same flat field name,\r\n  but also specifies additional information about each field reuse. #864"
  },
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/24225410",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/24225410/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/24225410/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v1.5.0",
    "id": 24225410,
    "author": {
      "login": "webmat",
      "id": 2300,
      "node_id": "MDQ6VXNlcjIzMDA=",
      "avatar_url": "https://avatars.githubusercontent.com/u/2300?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/webmat",
      "html_url": "https://github.com/webmat",
      "followers_url": "https://api.github.com/users/webmat/followers",
      "following_url": "https://api.github.com/users/webmat/following{/other_user}",
      "gists_url": "https://api.github.com/users/webmat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/webmat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/webmat/subscriptions",
      "organizations_url": "https://api.github.com/users/webmat/orgs",
      "repos_url": "https://api.github.com/users/webmat/repos",
      "events_url": "https://api.github.com/users/webmat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/webmat/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "MDc6UmVsZWFzZTI0MjI1NDEw",
    "tag_name": "v1.5.0",
    "target_commitish": "1.5",
    "name": "ECS 1.5.0",
    "draft": false,
    "prerelease": false,
    "created_at": "2020-03-05T11:17:38Z",
    "published_at": "2020-03-05T13:26:06Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v1.5.0",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v1.5.0",
    "body": "In this release, we continue fleshing out categorization by introducing the \"network\" and \"iam\" categories, with related event types.\r\n\r\nWe're adding new field sets: \"dll\", \"pe\", \"code_signature\", \"interface\" & \"vlan\". We're also adding a few fields here and there (check out the details below).\r\n\r\nImplementers consuming ECS artifacts like `generated/ecs/*.yml` programmatically will be happy to know that we now clearly identify which fields are expected to contain an array of values. Shout-out to contributors on the [ecs-logging](https://github.com/elastic/ecs-logging) libraries for raising this 👋🏼.\r\n\r\nFinally, starting with ECS 1.5.0, the project is using Python 3.7.\r\n\r\n### Schema Changes\r\n\r\n#### Added\r\n\r\n* Added `dll.*` fields #679\r\n* Added `related.hash` to keep track of all hashes seen on an event. #711\r\n* Added fieldset for PE metadata. #731\r\n* Added `code_signature` fieldset. #733\r\n* Added missing `hash` fields at `process.parent.hash.*`. #739\r\n* Added globally unique identifier `entity_id` to `process` and `process.parent`. #747\r\n* Added interface, vlan, observer zone fields #752\r\n* Added `rule.author`, `rule.license` fields #754\r\n* Added iam value for `event.category` and three related values for `event.type`. #756\r\n* Added fields `event.reference` and `event.url` to hold link to additional event info/actions. #757\r\n* Added `file.mime_type` to include MIME type information on file structures #760\r\n* Added `event.category` value of network and associated `event.type` values. #761\r\n\r\n#### Improvements\r\n\r\n* Temporary workaround for Beats templates' `default_field` growing too big. #687\r\n* Identify which fields should contain arrays of values, rather than scalar values. #727, #661\r\n* Clarified examples and definitions regarding vulnerabilities. #758\r\n* Updated definition of `event.outcome` based on community feedback. #759\r\n\r\n\r\n### Tooling and Artifact Changes\r\n\r\n#### Improvements\r\n\r\n* ECS scripts now use Python 3.6+. #674\r\n* schema\\_reader.py now reliably supports chaining reusable fieldsets together. #722\r\n* Allow the artifact generator to consider and output only a subset of fields. #737\r\n* Add support for reusing fields in places other than the top level of the destination fieldset. #739\r\n* Add support for specifying the directory to write the generated files. #748\r\n"
  },
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/22356639",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/22356639/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/22356639/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v1.4.0",
    "id": 22356639,
    "author": {
      "login": "webmat",
      "id": 2300,
      "node_id": "MDQ6VXNlcjIzMDA=",
      "avatar_url": "https://avatars.githubusercontent.com/u/2300?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/webmat",
      "html_url": "https://github.com/webmat",
      "followers_url": "https://api.github.com/users/webmat/followers",
      "following_url": "https://api.github.com/users/webmat/following{/other_user}",
      "gists_url": "https://api.github.com/users/webmat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/webmat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/webmat/subscriptions",
      "organizations_url": "https://api.github.com/users/webmat/orgs",
      "repos_url": "https://api.github.com/users/webmat/repos",
      "events_url": "https://api.github.com/users/webmat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/webmat/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "MDc6UmVsZWFzZTIyMzU2NjM5",
    "tag_name": "v1.4.0",
    "target_commitish": "1.4",
    "name": "ECS 1.4.0",
    "draft": false,
    "prerelease": false,
    "created_at": "2019-12-19T13:38:44Z",
    "published_at": "2019-12-19T14:08:32Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v1.4.0",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v1.4.0",
    "body": "This release introduces two much-awaited changes.\r\n\r\nThe `text` analyzer has been added to many existing fields. This enables full text search queries on fields that contain a lot of text, or semi-structured data (such as file paths and urls). Look at #575 and #680 to learn more. As an example, the field `user_agent.original` can now service full text search queries at `user_agent.original.text`.\r\n\r\nWe're also introducing the first set of allowed values for the 4 previously reserved fields (`event.kind`, `event.category`, `event.type` and `event.outcome`). We're calling them the \"categorization fields\". More allowed values will be released over time. You can preview future values, and provide feedback in this public document: https://ela.st/ecs-categories-draft. Learn more in the new \"ECS Categorization Fields\" section of the documentation.\r\n\r\n\r\n### Schema Changes\r\n\r\n#### Added\r\n\r\n* Added default `text` analyzer as a multi-field to `user_agent.original`. #575\r\n* Added `file.attributes`. #611\r\n* Added `file.drive_letter`. #620\r\n* Added `rule` fields. #665\r\n* Added default `text` analyzer as a multi-field to around 25 more fields. #680\r\n* Added `registry.*` fieldset for the Windows registry. #673\r\n* Publish initial list of allowed values for the categorization fields (previously reserved)\r\n  `event.kind`, `event.category`, `event.type` and `event.outcome`. #684, #691, #692\r\n* Added `related.user` #694\r\n\r\n\r\n### Tooling and Artifact Changes\r\n\r\n#### Bugfixes\r\n\r\n* Fix support for multi-fields. #575\r\n"
  },
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/21933703",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/21933703/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/21933703/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v1.3.1",
    "id": 21933703,
    "author": {
      "login": "webmat",
      "id": 2300,
      "node_id": "MDQ6VXNlcjIzMDA=",
      "avatar_url": "https://avatars.githubusercontent.com/u/2300?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/webmat",
      "html_url": "https://github.com/webmat",
      "followers_url": "https://api.github.com/users/webmat/followers",
      "following_url": "https://api.github.com/users/webmat/following{/other_user}",
      "gists_url": "https://api.github.com/users/webmat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/webmat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/webmat/subscriptions",
      "organizations_url": "https://api.github.com/users/webmat/orgs",
      "repos_url": "https://api.github.com/users/webmat/repos",
      "events_url": "https://api.github.com/users/webmat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/webmat/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "MDc6UmVsZWFzZTIxOTMzNzAz",
    "tag_name": "v1.3.1",
    "target_commitish": "1.3",
    "name": "ECS 1.3.1",
    "draft": false,
    "prerelease": false,
    "created_at": "2019-12-03T18:08:53Z",
    "published_at": "2019-12-03T18:12:34Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v1.3.1",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v1.3.1",
    "body": "### Schema Changes\r\n\r\n#### Bugfixes\r\n\r\n* Removed unnecessary field `tls.server.supported_ciphers`. #662\r\n"
  },
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/21809345",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/21809345/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/21809345/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v1.3.0",
    "id": 21809345,
    "author": {
      "login": "webmat",
      "id": 2300,
      "node_id": "MDQ6VXNlcjIzMDA=",
      "avatar_url": "https://avatars.githubusercontent.com/u/2300?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/webmat",
      "html_url": "https://github.com/webmat",
      "followers_url": "https://api.github.com/users/webmat/followers",
      "following_url": "https://api.github.com/users/webmat/following{/other_user}",
      "gists_url": "https://api.github.com/users/webmat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/webmat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/webmat/subscriptions",
      "organizations_url": "https://api.github.com/users/webmat/orgs",
      "repos_url": "https://api.github.com/users/webmat/repos",
      "events_url": "https://api.github.com/users/webmat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/webmat/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "MDc6UmVsZWFzZTIxODA5MzQ1",
    "tag_name": "v1.3.0",
    "target_commitish": "1.3",
    "name": "ECS 1.3.0",
    "draft": false,
    "prerelease": false,
    "created_at": "2019-11-27T17:53:49Z",
    "published_at": "2019-11-27T18:01:16Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v1.3.0",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v1.3.0",
    "body": "### Schema Changes\r\n\r\n#### Added\r\n\r\n* Added `vulnerability.*` fields to represent vulnerability information. #581\r\n* Added `event.ingested` as the ingest timestamp. #582\r\n* Added `package.reference`. #585\r\n* Added `package.build_version`. #586\r\n* Added `package.type`. #587\r\n* Added `host.domain` field. #591\r\n* Added `process.command_line`. #599\r\n* Added `process.exit_code`. #600\r\n* Added fields in `tls.*` to support analysis of TLS protocol events. #606\r\n* Added `process.parent.*`. #612\r\n* Added `process.args_count`. #615\r\n\r\n### Tooling and Artifact Changes\r\n\r\n#### Breaking changes\r\n\r\n* Changed the order and column names in the csv. #621\r\n* Removed the file `schema.json` and the code generating it. #627\r\n* Removed the legacy Elasticsearch template. #629\r\n  * Note: The *good* Elasticsearch templates are available in directory\r\n    `generated/elasticsearch`, this PR only removes an obsolete file.\r\n\r\n#### Added\r\n\r\n* Added the \"Indexed\", \"Field\\_Set\" and \"Description\" columns to the csv. #621\r\n"
  },
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/20449912",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/20449912/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/20449912/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v1.2.0",
    "id": 20449912,
    "author": {
      "login": "webmat",
      "id": 2300,
      "node_id": "MDQ6VXNlcjIzMDA=",
      "avatar_url": "https://avatars.githubusercontent.com/u/2300?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/webmat",
      "html_url": "https://github.com/webmat",
      "followers_url": "https://api.github.com/users/webmat/followers",
      "following_url": "https://api.github.com/users/webmat/following{/other_user}",
      "gists_url": "https://api.github.com/users/webmat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/webmat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/webmat/subscriptions",
      "organizations_url": "https://api.github.com/users/webmat/orgs",
      "repos_url": "https://api.github.com/users/webmat/repos",
      "events_url": "https://api.github.com/users/webmat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/webmat/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "MDc6UmVsZWFzZTIwNDQ5OTEy",
    "tag_name": "v1.2.0",
    "target_commitish": "1.2",
    "name": "ECS 1.2.0",
    "draft": false,
    "prerelease": false,
    "created_at": "2019-10-03T15:52:51Z",
    "published_at": "2019-10-03T17:17:18Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v1.2.0",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v1.2.0",
    "body": "### Added\r\n\r\n* Added `threat.*` fields to apply a taxonomy to events and alerts. #505\r\n* Added fields in `log.*` to allow for full Syslog mapping. #525\r\n* Added `package.*` to installed software packages. #532\r\n* Added `registered_domain` to `url`, `source`, `destination`, `client`, and `server`. #533\r\n* Added `top_level_domain` field to `url`, `dns.question`, `source`, `destination`, `client`, and `server`. #542, #572\r\n* Added `group.domain` field. #547\r\n* Added `url.extension`. #551, #573\r\n* Added `observer.name` and `observer.product`. #557, #571\r\n* Added `dns.question.subdomain` field. #561, #574\r\n* Added `error.stack_trace` field. #562\r\n* Added `log.origin.file.name`, `log.origin.function` and `log.origin.file.line` fields. #563, #568\r\n* Added `service.node.name` to allow distinction between different nodes of the same service running on the same host. #565\r\n* Added `error.type` field. #566\r\n"
  },
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/19473053",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/19473053/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/19473053/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v1.1.0",
    "id": 19473053,
    "author": {
      "login": "webmat",
      "id": 2300,
      "node_id": "MDQ6VXNlcjIzMDA=",
      "avatar_url": "https://avatars.githubusercontent.com/u/2300?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/webmat",
      "html_url": "https://github.com/webmat",
      "followers_url": "https://api.github.com/users/webmat/followers",
      "following_url": "https://api.github.com/users/webmat/following{/other_user}",
      "gists_url": "https://api.github.com/users/webmat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/webmat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/webmat/subscriptions",
      "organizations_url": "https://api.github.com/users/webmat/orgs",
      "repos_url": "https://api.github.com/users/webmat/repos",
      "events_url": "https://api.github.com/users/webmat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/webmat/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "MDc6UmVsZWFzZTE5NDczMDUz",
    "tag_name": "v1.1.0",
    "target_commitish": "1.1",
    "name": "ECS 1.1.0",
    "draft": false,
    "prerelease": false,
    "created_at": "2019-08-22T17:44:49Z",
    "published_at": "2019-08-22T17:51:00Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v1.1.0",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v1.1.0",
    "body": "### Added\r\n\r\n* Added `as` fields for Autonomous System information (i.e. ASN). #341\r\n* Added field formats to all `.bytes` fields and `event.duration`. #385, #425\r\n* Added `hash.*` field set. #426\r\n* Added `dns.*` field set, to describe DNS traffic. #438\r\n* Added `event.code`, `event.sequence` and `event.provider`. #439\r\n* Added `file.name` and `file.directory`. #441\r\n* Added `file.created`, and `file.accessed`. #445\r\n* Added `process.uptime` and `host.uptime` fields. #477\r\n* Added `domain` field to user. #486\r\n* Added `.nat.ip` and `.nat.port` to `source`, `destination`, `client` and `server`. #491\r\n* Added `process.thread.name` field. #517\r\n* Added `trace.id` and `transaction.id` fields for tracing across different services. #519\r\n* Added `log.logger` field. #521\r\n\r\n### Improvements\r\n\r\n* Added examples and improved definitions of many `file` fields. #441\r\n* Changed the `service.id` description so it works better for clustered services. #502\r\n"
  },
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/17552655",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/17552655/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/17552655/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v1.0.1",
    "id": 17552655,
    "author": {
      "login": "webmat",
      "id": 2300,
      "node_id": "MDQ6VXNlcjIzMDA=",
      "avatar_url": "https://avatars.githubusercontent.com/u/2300?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/webmat",
      "html_url": "https://github.com/webmat",
      "followers_url": "https://api.github.com/users/webmat/followers",
      "following_url": "https://api.github.com/users/webmat/following{/other_user}",
      "gists_url": "https://api.github.com/users/webmat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/webmat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/webmat/subscriptions",
      "organizations_url": "https://api.github.com/users/webmat/orgs",
      "repos_url": "https://api.github.com/users/webmat/repos",
      "events_url": "https://api.github.com/users/webmat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/webmat/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "MDc6UmVsZWFzZTE3NTUyNjU1",
    "tag_name": "v1.0.1",
    "target_commitish": "1.0",
    "name": "ECS 1.0.1",
    "draft": false,
    "prerelease": false,
    "created_at": "2019-05-24T17:14:36Z",
    "published_at": "2019-05-24T17:23:38Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v1.0.1",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v1.0.1",
    "body": "### Added\r\n\r\n* Add generated source code for Go. #249\r\n* Translate the documentation from README.md, to the main website. #266, #334, #400, #430, #435\r\n* New generator that supports reusable fields, for files based on ECS.\r\n  It generates schema.csv, Elasticsearch 6 and 7 templates, and field documentation\r\n  for the main website. #336\r\n* Generator for the asciidoc rendering of field definitions. #347\r\n* Generator for the Beats fields.ecs.yml file. #379\r\n* Remove many legacy generated files. #399\r\n* Specify static output format for event.duration. #425\r\n* Format port numbers and numeric IDs as strings. #454\r\n* Add example for `process.pid` and `process.ppid`. #464, #470\r\n\r\n"
  },
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/15948504",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/15948504/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/15948504/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v1.0.0",
    "id": 15948504,
    "author": {
      "login": "webmat",
      "id": 2300,
      "node_id": "MDQ6VXNlcjIzMDA=",
      "avatar_url": "https://avatars.githubusercontent.com/u/2300?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/webmat",
      "html_url": "https://github.com/webmat",
      "followers_url": "https://api.github.com/users/webmat/followers",
      "following_url": "https://api.github.com/users/webmat/following{/other_user}",
      "gists_url": "https://api.github.com/users/webmat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/webmat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/webmat/subscriptions",
      "organizations_url": "https://api.github.com/users/webmat/orgs",
      "repos_url": "https://api.github.com/users/webmat/repos",
      "events_url": "https://api.github.com/users/webmat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/webmat/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "MDc6UmVsZWFzZTE1OTQ4NTA0",
    "tag_name": "v1.0.0",
    "target_commitish": "1.0",
    "name": "ECS 1.0.0",
    "draft": false,
    "prerelease": false,
    "created_at": "2019-03-06T14:36:32Z",
    "published_at": "2019-03-06T16:12:31Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v1.0.0",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v1.0.0",
    "body": "ECS is turning 1.0.0!\r\n\r\nWe've clarified a few field descriptions and examples, based on your feedback and questions.\r\n\r\n### Breaking changes\r\n\r\n* Remove the `user.group` `keyword` field, introduced in #204. Instead,\r\n  the `group` field set can be nested at `user.group`. #308\r\n\r\n### Bugfixes\r\n\r\n* Field set name \"group\" was being used as a leaf field at `user.group`, instead\r\n  of being a nesting of the field set. This goes against a driving principle of ECS,\r\n  and has been corrected. #308\r\n* Replaced incorrect examples in `cloud.provider`. #330, #348\r\n* Changed the `url.port` type to `long`. #339\r\n\r\n### Added\r\n\r\n* Added pointer in description of `http` field set to `url` field set. #330\r\n* Added an optional short field description. #330\r\n\r\n### Improvements\r\n\r\n* Clarified the definition of the host fields #325\r\n* Clarified the difference between `@timestamp` and `event.created`. #329\r\n* Make phrasing of lowercasing directive more relevant, no matter where it's shown. #332\r\n* Specify the `object_type` for field `labels`. #331\r\n* Loosen up definition of `geo` field set. Not necessarily geo-ip based, since `geo.name`. #333\r\n* Clarified guidelines on ID fields. #349\r\n\r\n\r\n"
  },
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/14473778",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/14473778/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/14473778/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v1.0.0-beta2",
    "id": 14473778,
    "author": {
      "login": "ruflin",
      "id": 244900,
      "node_id": "MDQ6VXNlcjI0NDkwMA==",
      "avatar_url": "https://avatars.githubusercontent.com/u/244900?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ruflin",
      "html_url": "https://github.com/ruflin",
      "followers_url": "https://api.github.com/users/ruflin/followers",
      "following_url": "https://api.github.com/users/ruflin/following{/other_user}",
      "gists_url": "https://api.github.com/users/ruflin/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ruflin/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ruflin/subscriptions",
      "organizations_url": "https://api.github.com/users/ruflin/orgs",
      "repos_url": "https://api.github.com/users/ruflin/repos",
      "events_url": "https://api.github.com/users/ruflin/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ruflin/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "MDc6UmVsZWFzZTE0NDczNzc4",
    "tag_name": "v1.0.0-beta2",
    "target_commitish": "master",
    "name": "ECS 1.0.0-beta2",
    "draft": false,
    "prerelease": true,
    "created_at": "2018-12-11T18:58:08Z",
    "published_at": "2018-12-11T19:06:13Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v1.0.0-beta2",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v1.0.0-beta2",
    "body": "This is the second 1.0.0 pre-release of ECS. From 1.0.0-beta2 to 1.0.0 GA, no further breaking changes and no additions or new fields are planned. All new contributions must go into the master branch.\r\n\r\n## Breaking changes\r\n\r\n* Changed `device.*` fields to `observer.*` fields to eliminate user confusion. #238\r\n* Rename `network.total.bytes` to `network.bytes` and `network.total.packets`\r\n  to `network.packets`. #179\r\n* Remove `network.inbound.bytes`, `network.inbound.packets`,\r\n  `network.outbound.bytes` and `network.outbound.packets`. #179\r\n* Changed the `event.type` definition to be only reserved. #242\r\n\r\n## Bugfixes\r\n\r\n* Fix obvious mistake in the definition of \"source\", where it said \"destination\"\r\n  instead of \"source\". #211\r\n\r\n## Added\r\n\r\n* Add `host.name` field and clarify usage of `host.hostname`. #187\r\n* Add `event.start` and `event.end` date fields. #185\r\n* Add `process.thread.id` field. #200\r\n* Add `host.name` field and clarify usage of `host.hostname`.\r\n* Add `event.start` and `event.end` date fields.\r\n* Create new `related` field set with `related.ip`. #206\r\n* Add `user.group` field. #204\r\n* Create new `group` field set with `group.id` and `group.name`. #203\r\n* Add `url.full` field. #207\r\n* Add `process.executable` field. #209\r\n* Add `process.working_directory` and `process.start`. #215\r\n* Reintroduce `http`. #237\r\n  * Move `http.response.body` to `http.response.body.content`. #239\r\n  * Add `http.request.body.content`. #239\r\n  * Add HTTP size metric fields. #239\r\n* Add `user.full_name` field. #201\r\n* Add `network.community_id` field. #208\r\n* Add fields `geo.country_name` and `geo.region_iso_code`. #214\r\n* Add `event.kind` and `event.outcome`. #242\r\n* Add `client` and `server` objects and fields. #236\r\n* Reintroduce a streamlined `user_agent` field set. #240, #262\r\n* Add `geo.name` for ad hoc location names. #248\r\n* Add `event.timezone` to allow for proper interpretation of incomplete timestamps. #258\r\n* Add fields `source.address`, `destination.address`, `client.address`, and\r\n  `server.address`. #247\r\n* Add `os.full` to capture full OS name, including version. #259\r\n\r\n## Improvements\r\n\r\n* Improved the definition of the file fields #196\r\n* Improved the definition of the agent fields #192\r\n* Improve definition of events, logs, and metrics in event section #194\r\n* Improved the definition of network fields in intro section #197\r\n* Improved the definition of host fields #195\r\n* Improved the definitions for `event.category` and `event.action`. #242\r\n* Clarify the semantics of `network.direction`. #212\r\n* Add `source.bytes`, `source.packets`, `destination.bytes` and `destination.packets`. #179\r\n* Add a readme section to declare some top level field sets are reserved for\r\n  future use. #257\r\n* Clarify that `network.transport`, `network.type`, `network.application`,\r\n  and `network.protocol` must be lowercase. #251\r\n* Clarify that `http.request.method` must be lowercase. #251\r\n* Clarify that source/destination should be filled, even if client/server is\r\n  being used. #265"
  },
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/13862012",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/13862012/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/13862012/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v1.0.0-beta1",
    "id": 13862012,
    "author": {
      "login": "webmat",
      "id": 2300,
      "node_id": "MDQ6VXNlcjIzMDA=",
      "avatar_url": "https://avatars.githubusercontent.com/u/2300?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/webmat",
      "html_url": "https://github.com/webmat",
      "followers_url": "https://api.github.com/users/webmat/followers",
      "following_url": "https://api.github.com/users/webmat/following{/other_user}",
      "gists_url": "https://api.github.com/users/webmat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/webmat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/webmat/subscriptions",
      "organizations_url": "https://api.github.com/users/webmat/orgs",
      "repos_url": "https://api.github.com/users/webmat/repos",
      "events_url": "https://api.github.com/users/webmat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/webmat/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "MDc6UmVsZWFzZTEzODYyMDEy",
    "tag_name": "v1.0.0-beta1",
    "target_commitish": "master",
    "name": "ECS 1.0.0-beta1",
    "draft": false,
    "prerelease": true,
    "created_at": "2018-11-07T21:26:20Z",
    "published_at": "2018-11-07T21:42:39Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v1.0.0-beta1",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v1.0.0-beta1",
    "body": "# Changes\r\n\r\nThis is the first 1.0.0 pre-release of ECS. From 1.0.0-beta1 to 1.0.0 GA, no further breaking changes are expected. New fields might still be added.\r\n\r\n## Breaking changes\r\n* Change structure of URL. #7\r\n* Rename `url.href` `multi_field`. #18\r\n* Rename `geoip.*` to `geo`. #58\r\n* Rename log.message to log.original. #106\r\n* Rename `event.raw` to `event.original`. #107\r\n* Rename `user_agent.raw` to `user_agent.original` and make it a keyword. #107\r\n* Rename `file.path.raw` to `file.path.keyword`, `file.target_path.raw` to `file.target_path.keyword`,\r\n  `url.href.raw` to `url.href.keyword`, `url.path.raw` to `url.path.keyword`,\r\n  `url.query.raw` to `url.query.keyword`, and `network.name.raw` to `network.name.keyword`. #103\r\n* Remove `log.offset` and `log.line` as too specific for ECS. #131\r\n* Remove top level objects `kubernetes` and `tls`. #132\r\n* Remove `*.timezone.offset.sec` fields as too specific for ECS at the moment. #134\r\n* Make the following fields keyword: device.vendor, file.path, file.target_path, http.response.body, network.name, organization.name, url.href, url.path, url.query, user_agent.original\r\n* Rename `url.host.name` to `url.hostname` to better align with industry convention. #147\r\n* Make the following fields keyword: device.vendor, file.path, file.target_path, http.response.body, network.name, organization.name, url.href, url.path, url.query, user_agent.original. #137\r\n  * Only two fields using `text` indexing at this time are `message` and `error.message`.\r\n* Rename `host.name` to `host.hostname` to better align with industry convention. #144\r\n* Update definition of `service.type` and `service.name`.\r\n* Redefine purpose of `agent.name` field to be user defined field.\r\n* Rename `url.href` to `url.original`.\r\n* Remove `source.subdomain` and `destination.subdomain` fields.\r\n* Rename `event.version` to `ecs.version`. #169\r\n* Remove the `http` field set temporarily. #171\r\n* Remove the `user_agent` field set temporarily. #172\r\n* Rename `url.hostname` to `url.domain`. #175\r\n* Remove `source.hostname` and `destination.hostname`. #175\r\n\r\n## Added\r\n* Add `network.total.packets` and `network.total.bytes` field. PR#2\r\n* Add `event.action` field. #21\r\n* Add `network.name`, to track network names in the monitoring pipeline. #25\r\n* Adds cloud.account.id for top level organizational level. #11\r\n* Add `http.response.status_code` and `http.response.body` fields. #4\r\n* Add fields for Operating System data. #5\r\n* Add `log.message`. #3\r\n* Add http.request.method and http.version\r\n* Add `host.os.kernel` containing the OS kernel version. #60\r\n* Add `agent.type` field.\r\n* Add `http.request.referrer` field. #164\r\n* Add `network.type`, `network.iana_number`, `network.transport` and\r\n  `network.application`. #81 and #170\r\n\r\n## Improvements\r\n\r\n* Remove duplicate definitions of the reuseable `os` field set from `host.os` and\r\n  `user_agent.os`.  #168\r\n"
  },
  {
    "url": "https://api.github.com/repos/elastic/ecs/releases/11151826",
    "assets_url": "https://api.github.com/repos/elastic/ecs/releases/11151826/assets",
    "upload_url": "https://uploads.github.com/repos/elastic/ecs/releases/11151826/assets{?name,label}",
    "html_url": "https://github.com/elastic/ecs/releases/tag/v0.1.0",
    "id": 11151826,
    "author": {
      "login": "ruflin",
      "id": 244900,
      "node_id": "MDQ6VXNlcjI0NDkwMA==",
      "avatar_url": "https://avatars.githubusercontent.com/u/244900?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/ruflin",
      "html_url": "https://github.com/ruflin",
      "followers_url": "https://api.github.com/users/ruflin/followers",
      "following_url": "https://api.github.com/users/ruflin/following{/other_user}",
      "gists_url": "https://api.github.com/users/ruflin/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/ruflin/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/ruflin/subscriptions",
      "organizations_url": "https://api.github.com/users/ruflin/orgs",
      "repos_url": "https://api.github.com/users/ruflin/repos",
      "events_url": "https://api.github.com/users/ruflin/events{/privacy}",
      "received_events_url": "https://api.github.com/users/ruflin/received_events",
      "type": "User",
      "site_admin": false
    },
    "node_id": "MDc6UmVsZWFzZTExMTUxODI2",
    "tag_name": "v0.1.0",
    "target_commitish": "master",
    "name": "ECS 0.1.0",
    "draft": false,
    "prerelease": false,
    "created_at": "2018-05-24T12:39:38Z",
    "published_at": "2018-05-24T08:22:19Z",
    "assets": [

    ],
    "tarball_url": "https://api.github.com/repos/elastic/ecs/tarball/v0.1.0",
    "zipball_url": "https://api.github.com/repos/elastic/ecs/zipball/v0.1.0",
    "body": ""
  }
]
