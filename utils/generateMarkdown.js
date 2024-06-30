// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue?link=https://www.apache.org/licenses/LICENSE-2.0.html)](https://www.apache.org/licenses/LICENSE-2.0.html)';
    case 'CCL':
      return '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-blue?link=https://creativecommons.org/licenses/by/4.0/)](https://creativecommons.org/licenses/by/4.0/)';
    case 'GNU':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue?link=https://www.gnu.org/licenses/gpl-3.0.html)](https://www.gnu.org/licenses/gpl-3.0.html)';
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-green?link=https://opensource.org/licenses/MIT)](https://opensource.org/licenses/MIT)';
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen?link=https://www.mozilla.org/en-US/MPL/2.0/)](https://www.mozilla.org/en-US/MPL/2.0/)';
    default:
      return '';
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'Apache':
      return 'This is built under  the [Apache License](https://www.apache.org/licenses/LICENSE-2.0.html)';
    case 'CCL':
      return 'This is built under  the [Creative Commons Licenses (CCL)](https://creativecommons.org/licenses/)';
    case 'GNU':
      return 'This is built under  the [GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0.html)';
    case 'MIT':
      return 'This is built under the [MIT License](https://opensource.org/licenses/MIT)';
    case 'Mozilla':
      return 'This is built under  the [Mozilla Public License (MPL)](https://www.mozilla.org/en-US/MPL/2.0/)';
    default:
      return 'No license selected';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    license,
    contributions,
    testInstructions,
    email,
    github,
  } = data;

  return `# ${title}

  Built with ❤️ using:

  ![Static Badge](https://img.shields.io/badge/-Markdown-purple?logo=markdown&logoColor=white&style=flat)
  ![Static Badge](https://img.shields.io/badge/-Javascript-blue?logo=javascript&logoColor=white&style=flat)

   ${renderLicenseBadge(license)}
  
  ## Description
  
  ${description}
  
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation

  ${installation}
  
  ## Usage

  ${usage}
  
  ## License

  ${renderLicenseSection(license)}
  
  ## Contributing

  ${contributions}
  
  ## Tests

  ${testInstructions}
  
  ## Questions

  You can check out my other projects and reach out on my [GitHub](https://github.com/${github}).

  If you have any questions, you can reach me at via [email](mailto:${email}).
`;
}

module.exports = generateMarkdown;
