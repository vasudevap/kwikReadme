// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## DESCRIPTION
  
  ${data.description}

  # TABLE OF CONTENTS
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
  # INSTALLATION
 ${data.installation}
  # USAGE
  ${data.usage}  
  # LICENSE
  ${data.license}
  # CONTRIBUTING
  ${data.contributing}
  # TESTS
 ${data.tests}
  # QUESTIONS
  Please reach me at gitHub (${data.gitHub}) or at my email at ${data.email}
  ---
`;
}

module.exports = generateMarkdown;
