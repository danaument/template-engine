# Title: Template Engine

## Table of Contents:
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Demo Video](#video)
* [Testing](#Testing)
* [Notes from Dan](#Notes)
* [Credits](#Credits)
* [License](#License)

### <a name="Description">Description:</a>
This application is a homework assignment for UT's web dev coding bootcamp.  It uses the inquirer.js package and several html templates to generate an html file that displays an engineering team in the folder 'output'.  

### <a name="Installation">Installation:</a>
The application's dependencies can be installed using the following command in the directory containing the files, including the package.json file: 

```bash
npm i
```

### <a name="Usage">Usage:</a>
The application can be invoked using the following command: 

```bash
node app.js
```

The user can follow the command line interface prompts to add team members.  The first team member will be the Manager.  The html file will be created when the user chooses "No" when asked "Would you like to add addtional team members?"

### <a name="video">Demo Video: </a>
https://drive.google.com/file/d/1mw94pgLIwoxYOfRdI-fTb11jKXEmHkvq/view


### <a name="Testing">Testing: </a>
The application can be tested with jest using the following command: 

```bash
npm run test
```

### <a name="Notes">Notes from Dan:  </a>
I enjoyed the testing component of this assignment.  I created some external files (emailTest.js, numberTest.js) and additional tests just for practice.  I also created a style.css file (in the output folder) just for fun.

### <a name="Credits">Credits: </a>
This project was completed by Dan Aument using code and assets provided by The Coding Boot Camp at UT Austin in partnership with Trilogy Education Services. 

### <a name="License">License: </a>

Distributed under the MIT License

MIT License

Copyright (c) 2020 Daniel Aument

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.