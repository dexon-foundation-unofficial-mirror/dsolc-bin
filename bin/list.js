
var soljsonSources = [
  "soljson-v0.5.2+commit.c2a4dee5.js",
  "soljson-v0.5.1+commit.d7688b80.js",
  "soljson-v0.5.1-nightly.2018.11.21+commit.d7688b80.js",
  "soljson-v0.5.0+commit.366fa976.js",
  "soljson-v0.5.0-nightly.2018.11.21+commit.366fa976.js",
  "soljson-v0.4.25+commit.433aebb7.js"
];
var soljsonReleases = {
  "0.5.2": "soljson-v0.5.2+commit.c2a4dee5.js",
  "0.5.1": "soljson-v0.5.1+commit.d7688b80.js",
  "0.5.0": "soljson-v0.5.0+commit.366fa976.js",
  "0.4.25": "soljson-v0.4.25+commit.433aebb7.js"
};

if (typeof(module) !== 'undefined')
  module.exports = {
    'allVersions': soljsonSources,
    'releases': soljsonReleases
  };
