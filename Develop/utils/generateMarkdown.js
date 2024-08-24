// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 return `![GitHub license](https://img.shields.io/badge/license-${license.replace(' ', '_')}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license=="MIT"){
    return `[MIt License Info](https://choosealicense.com/licenses/mit/)`
  }else if(license =="APACHE 2.0" ){
    return `[APACHE license Info](https://choosealicense.com/licenses/apache-2.0/)`
  }else if (license =="GPL"){
    return `[GPL license Info]{https://choosealicense.com/licenses/gpl-3.0/}`
  }else {
    return`[none](https://choosealicense.com/licenses/unlicense/)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.readmeTitle}

  ## Table of contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#Usage)
  * [contribution](#contribution)
  * [license](#license)
  * [github](#github)
  * [email](email)
  * [test](test)

  ### Description
  ${data.readmeDescription}

  ### Installation
   ${data.readmeInstullationinfo}

  ### Usage
${data.readmeUsageinfo}

  ###contribution
  ${data.readmecontributioninfo}

  ###license
  ${renderLicenseSection(data.license)}

  ###github
  [github](https://github.com/${data.githubusername})

  ###email
  ${data.emailaddress}

  ###test
  ${data.readmetestinfo}

`;
}

module.exports = generateMarkdown;
