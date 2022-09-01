function engineCreate (data) { 
return `# ${data.title}
## License:
[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
## Table of Contents
- [Description](#Description)
- [Installation-Instructions](#Installation-Instructions)
- [Usage-Information](#Usage-Information)
- [Contribution-Guidelines](#Contribution-Guidelines)
- [Test-Instructions](#Test-Instructions)
- [Github-Username](#Github-Username)
- [Email-Address](#Email-Address)

## Description: 
${data.description}
## Installation-Instructions: 
${data.instructions}
## Usage-Information: 
${data.usage}
## Contribution-Guidelines: 
${data.contribution}
## Test-Instructions: 
${data.test}
## Github-Username: 
[${data.github}](https://github.com/${data.github})
## Email-Address: 
[${data.email}](mailto:${data.email})

`;

}

module.exports = engineCreate; 