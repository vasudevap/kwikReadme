// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "GNU GPL v3":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";

    case "GNU GPL v2":
      return "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)";

    case "The Hippocratic License 3.0":
      return "![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)";

    case "The MIT License":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";

    case "Mozilla Public License 2.0":
      return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";

    case "Public Domain Dedication and License (PDDL)":
      return "![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)";

    case "The Artistic License 2.0":
      return "![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)";

    default: return "";
  }

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "GNU GPL v3":
      return "(https://www.gnu.org/licenses/gpl-3.0)";

    case "GNU GPL v2":
      return "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";

    case "The Hippocratic License 3.0":
      return "(https://firstdonoharm.dev)";

    case "The MIT License":
      return "(https://opensource.org/licenses/MIT)";

    case "Mozilla Public License 2.0":
      return "(https://opensource.org/licenses/MPL-2.0)";

    case "Public Domain Dedication and License (PDDL)":
      return "(https://opendatacommons.org/licenses/pddl/)";

    case "The Artistic License 2.0":
      return "(https://opensource.org/licenses/Artistic-2.0)";

    default: return "";

  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "GNU GPL v3":
      return ` General Public License is a free, copyleft license for software and other kinds of works.

The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too.

When we speak of free software, we are referring to freedom, not price. Our General Public Licenses are designed to make sure that you have the freedom to distribute copies of free software (and charge for them if you wish), that you receive source code or can get it if you want it, that you can change the software or use pieces of it in new free programs, and that you know you can do these things.

To protect your rights, we need to prevent others from denying you these rights or asking you to surrender the rights. Therefore, you have certain responsibilities if you distribute copies of the software, or if you modify it: responsibilities to respect the freedom of others.

For example, if you distribute copies of such a program, whether gratis or for a fee, you must pass on to the recipients the same freedoms that you received. You must make sure that they, too, receive or can get the source code. And you must show them these terms so they know their rights.

Developers that use the GNU GPL protect your rights with two steps: (1) assert copyright on the software, and (2) offer you this License giving you legal permission to copy, distribute and/or modify it.

For the developers' and authors' protection, the GPL clearly explains that there is no warranty for this free software. For both users' and authors' sake, the GPL requires that modified versions be marked as changed, so that their problems will not be attributed erroneously to authors of previous versions.

Some devices are designed to deny users access to install or run modified versions of the software inside them, although the manufacturer can do so. This is fundamentally incompatible with the aim of protecting users' freedom to change the software. The systematic pattern of such abuse occurs in the area of products for individuals to use, which is precisely where it is most unacceptable. Therefore, we have designed this version of the GPL to prohibit the practice for those products. If such problems arise substantially in other domains, we stand ready to extend this provision to those domains in future versions of the GPL, as needed to protect the freedom of users.

Finally, every program is threatened constantly by software patents. States should not allow patents to restrict development and use of software on general-purpose computers, but in those that do, we wish to avoid the special danger that patents applied to a free program could make it effectively proprietary. To prevent this, the GPL assures that patents cannot be used to render the program non-free.`;

    case "GNU GPL v2":
      return `The licenses for most software are designed to take away your freedom to share and change it. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change free software--to make sure the software is free for all its users. This General Public License applies to most of the Free Software Foundation's software and to any other program whose authors commit to using it. (Some other Free Software Foundation software is covered by the GNU Lesser General Public License instead.) You can apply it to your programs, too.

When we speak of free software, we are referring to freedom, not price. Our General Public Licenses are designed to make sure that you have the freedom to distribute copies of free software (and charge for this service if you wish), that you receive source code or can get it if you want it, that you can change the software or use pieces of it in new free programs; and that you know you can do these things.

To protect your rights, we need to make restrictions that forbid anyone to deny you these rights or to ask you to surrender the rights. These restrictions translate to certain responsibilities for you if you distribute copies of the software, or if you modify it.

For example, if you distribute copies of such a program, whether gratis or for a fee, you must give the recipients all the rights that you have. You must make sure that they, too, receive or can get the source code. And you must show them these terms so they know their rights.

We protect your rights with two steps: (1) copyright the software, and (2) offer you this license which gives you legal permission to copy, distribute and/or modify the software.

Also, for each author's protection and ours, we want to make certain that everyone understands that there is no warranty for this free software. If the software is modified by someone else and passed on, we want its recipients to know that what they have is not the original, so that any problems introduced by others will not reflect on the original authors' reputations.

Finally, any free program is threatened constantly by software patents. We wish to avoid the danger that redistributors of a free program will individually obtain patent licenses, in effect making the program proprietary. To prevent this, we have made it clear that any patent must be licensed for everyone's free use or not licensed at all.`;

    case "The Hippocratic License 3.0":
      return `Technological advancement is often shaped by the choices and priorities of the powerful— in particular, the military, governments, and corporate interests. Their distorted priorities are often at odds with the promise of technology as a force for promoting justice and equity worldwide, and this increasingly includes open source technologies.

Traditional open source is based on the flawed premise that technology is fundamentally neutral, and that unrestricted access to source code— even for explicitly “evil” purposes— is in fact an unqualified good. But around the world, open source developers are starting to realize that the software that they create, with its tremendous potential to change the world for the better, is also being abused to sustain and promote systems of inequity and injustice, globally, and at unprecedented scale.

The Hippocratic License 3.0 (HL3) aims to confront the potential harms and abuses technology can have on fundamental human rights. It empowers open source communities to establish a clear set of ethical standards that licensees must abide by in order to adopt their code. These standards are based on international agreements and authorities on fundamental human rights norms, including the United Nations Universal Declaration of Human Rights, the International Covenant on Economic, Social and Cultural Rights, the International Covenant on Civil and Political Rights, and the International Labour Organization.

HL3 also offers optional modules that focus on specific areas of concern, such as environmental justice, labor rights, and ethical supply chains. This modular approach lets open source maintainers customize the license to reflect the unique needs and challenges of their particular communities.

Healthy open source communities do not just form around code, but also around shared values and a vision for how their work can improve the world. The true measure of the success of open source is its impact— how the technologies we develop are leveraged to bring about positive social, cultural, and political change.`;

    case "The MIT License":
      return `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;

    case "Mozilla Public License 2.0":
      return `The Open Source Initiative (OSI) is a California public benefit corporation, with 501(c)3 tax-exempt status, founded in 1998.

    We are also actively involved in Open Source community-building, education, and public advocacy to promote awareness and the importance of non-proprietary software. OSI participates in Open Source conferences and events, to meet with open source developers and users, and to discuss with executives from the public and private sectors about how Open Source technologies, licenses, and models of development can provide economic and strategic advantages.`;

    case "Public Domain Dedication and License (PDDL)":
      return `This is a human-readable summary of the Public Domain Dedication and License 1.0. Please see the disclaimer below.

You are free:

To share: To copy, distribute and use the database.
To create: To produce works from the database.
To adapt: To modify, transform and build upon the database.
As long as you:

Blank: This section is intentionally left blank. The PDDL imposes no restrictions on your use of the PDDL licensed database.
Disclaimer

This is not a license. It is simply a handy reference for understanding the PDDL 1.0 — it is a human-readable expression of some of its key terms. This document has no legal value, and its contents do not appear in the actual license. Read the full PDDL 1.0 license text for the exact terms that apply.`;

    case "The Artistic License 2.0":
      return `This license establishes the terms under which a given free software Package may be copied, modified, distributed, and/or redistributed. The intent is that the Copyright Holder maintains some artistic control over the development of that Package while still keeping the Package available as open source and free software.

You are always permitted to make arrangements wholly outside of this license directly with the Copyright Holder of a given Package. If the terms of this license do not permit the full use that you propose to make of the Package, you should contact the Copyright Holder and seek a different licensing arrangement.`;

    default: return "";

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const gitHubURL = "https://github.com/";
  let beforeLicenseBadge = `# ${data.title}\n`
  let licenseBadge = renderLicenseBadge(data.license) + "\n";
  let afterLicenseBadge = `
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
[${data.license}]`;
  //
  // license section
  //
  let licenseLink = renderLicenseLink(data.license);
  let licenseText = "\n" + renderLicenseSection(data.license);

  let afterLicenseText = `\n

# QUESTIONS
Please reach me at [${data.gitHub}](${gitHubURL}${data.gitHub}) or at my email at ${data.email}
---
`;
  //concatenate all sections of the file and return it
  return beforeLicenseBadge + licenseBadge + afterLicenseBadge + licenseLink + licenseText + afterLicenseText;
}

module.exports = generateMarkdown;
