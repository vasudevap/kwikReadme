// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
switch (license) {
  case "GNU GPL v3":
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";

  case "GNU GPL v2": 
  return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]";

  case "The Hippocratic License 3.0": 
  return "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)]";

  case "The MIT License": 
  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";

  case "Mozilla Public License 2.0": 
  return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";

  case "Public Domain Dedication and License (PDDL)": 
  return "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]";

  case "The Artistic License 2.0":
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)]";
  case "The Unlicense":
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";

}

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "GNU GPL v3":
      return "https://www.gnu.org/licenses/gpl-3.0";
  
    case "GNU GPL v2": 
    return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
  
    case "The Hippocratic License 3.0": 
    return "https://firstdonoharm.dev";
  
    case "The MIT License": 
    return "https://opensource.org/licenses/MIT";
  
    case "Mozilla Public License 2.0": 
    return "https://opensource.org/licenses/MPL-2.0";
  
    case "Public Domain Dedication and License (PDDL)": 
    return "https://opendatacommons.org/licenses/pddl/";
  
    case "The Artistic License 2.0":
      return "https://opensource.org/licenses/Artistic-2.0";

    case "The Unlicense":
      return "http://unlicense.org/";
  
 }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## DESCRIPTION
  
  ${data.description}

  # TABLE OF CONTENTS
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [License](#license)
  6. [Questions](#questions)
  
  # INSTALLATION
  ${data.installation}

  # USAGE
  ${data.usage}  

  # CONTRIBUTING
  ${data.contributing}
  
  # TESTS
  ${data.tests}

  # LICENSE
  ${data.license}
 
  # QUESTIONS
  Please reach me at gitHub (${data.gitHub}) or at my email at ${data.email}
  ---
`;
}

module.exports = generateMarkdown;
