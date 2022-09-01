function engineCreate (data) {
    return `# ${data.title}
    ## Table of Contents
    - [Description](#description)
    - [Installation Instructions](#instructions)
    - [Usage Information](#usage)
    - [Contribution Guidelines](#contribution)
    - [Test Instructions](#test)
    - [Github Username](#github)
    - [Email Address](#email)

    ##Description: 
    ${data.description}
    ##Installation Instructions: 
    ${data.instructions}
    ##Usage Information: 
    ${data.usage}
    ##Contribution Guidelines: 
    ${data.contribution}
    ##Test Instructions: 
    ${data.test}
    ##Github Username: 
    [${data.github}](https://github.com/${data.github})
    ##Email Address: 
    [${data.email}](mailto:${data.email})
    `;

}