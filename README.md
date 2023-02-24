# Team Profile Generator - John Mabie

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
---
### This project is designed to generate a formatted Team Profile HTML Page based on user inputs

#### Here is the link to the GitHub repository: https://github.com/jmabie94/2-23-23-team-profile-generator
---
## Contents
1. [About](#about)
    1. [User Story](#user%20story)
    2. [Acceptance Criteria](#acceptance%20criteria)
    3. [Media](#media)
2. [Installation](#installation)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Authors and Acknowledgments](#authors%20and%20acknowledgments)
---
## About

#### Using node.js, the user is asked a series of inquirer prompts, the answers to which are used to populate a new HTML showing off their employees as individualized cards, with details and a fun fact included alongside an icon matching their rank.
---
## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```
---
## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
---

## Media:

Video Walkthrough of the App:

![Video Walkthrough](./media/app%20walkthrough%20video.webm)

Screenshot of the HTML generated in the video Walkthrough when opened in browser:

![Screenshot of the Demo HTML](./media/demo%20html%20screenshot%202.24.23%200035AM.png)

---

## Installation:

Installing and Utilizing the Application is simple!

First, clone the repo:
    
    git clone git@github.com:jmabie94/2-23-23-team-profile-generator.git

Next, open an integrated terminal in your cloned folder and do the following:
    
    run npm init -y
    run npm i
    run node index.js

Then, answer all of the prompts in your terminal to generate a HTML file!
    
---

## License
License used for this project - GNU AGPLv3
* For more information on license types, please reference this website for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).
---
## Contributing:
To contribute to this application, create a pull request.
Here are the steps needed for doing that:
- Fork the repo
- Create a feature branch (git checkout -b NAME-HERE)
- Commit your new feature (git commit -m 'Add some feature')
- Push your branch (git push)
- Create a new Pull Request
Following a code review, your feature will be merged.
---
## Tests:

### Jest
---
## Authors and Acknowledgments:

### Primary Author: Jack Mabie

### Resources Used: Inquirer, Jest, Node.js & Bootstrap

---
## Contact Information:
* GitHub Username: jmabie94
* Email: johnmabie94@gmail.com