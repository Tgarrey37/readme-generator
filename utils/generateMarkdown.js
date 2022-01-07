//  TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return `[![License: 'APACHE'](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "GNU") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "Open") {
    return `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return `[License: 'APACHE'](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "MIT") {
    return `[License: MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === "GNU") {
    return `[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "Open") {
    return `[License: Open Data Commons Attribution](https://opendatacommons.org/licenses/by/)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "Apache") {
    return `This is licensed by Apache. A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code. For additional info ${renderLicenseLink(license)} `;
  } else if (license === "MIT") {
    return `This is licensed by MIT. A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. For additional info ${renderLicenseLink(license)} `;
  } else if (license === "GNU") {
    return `This is licensed by GNU. Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. For additional info ${renderLicenseLink(license)} `;
  } else if (license === "Open") {
    return `This is licensed by Open. The Open Data Commons Attribution License is a license agreement
    intended to allow users to freely share, modify, and use this Database
    subject only to the attribution requirements set out in Section 4. For additional info ${renderLicenseLink(license)}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description  
  
${data.description}


  ## Table of Contents 

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
 


  ## Installation

  To install dependencies run this command in the root level of the application.


\`\`\`bash 
${data.installation}
\`\`\`


## Usage 
${data.usage}

## License
${renderLicenseSection(data.license)}


## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions 
${data.questions}
${data.email}
Github Profile [Github](https://github.com/${data.username})



`;
}

module.exports = generateMarkdown;
