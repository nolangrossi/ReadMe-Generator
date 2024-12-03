function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `- [License](#license)`;
}

function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License

This project is licensed under the ${license} license.`;
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
${renderLicenseLink(data.license)}
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

${renderLicenseSection(data.license)}

## Questions
If you have any questions, feel free to contact me:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
  `;
}

export default generateMarkdown;
