# _Galactic Age Calculator_

#### _6-28-2019_

#### _Author: Alex Siegberg_

## Description

_This is a web application that takes in a user's birth date, then returns how old they are in Earth, Venus, Mars and Jupiter years._

## Spec

| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| Should return an age based on inputed birth date | July 17, 1990 | 28 |
| Should reject an input of a future date | August 25, 2049 | 'invalid date inputted' |
| Should return age converted in Mercury years (0.24 Earth years) | 28, "Mercury" | 116 |
| Should return age converted in Venus years (0.62 Earth years) | 28, "Venus" | 45 |
| Should return age converted in Mars years (1.88 Earth years) | 28, "Mars" | 14 |
| Should return age converted in Jupiter years (11.86 Earth years) | 28, "Jupiter" | 2 |
| Should return years left on Mercury (average age 80) | 28, 80, "Mercury" | 216 |
| Should return years left on Venus (average age 80) | 28, 80, "Venus" | 83 |
| Should return years left on Mars (average age 80) | 28, 80, "Mars" | 27 |
| Should return years left on Jupiter (average age 80) | 28, 80, "Jupiter" | 4 |

## Setup/Installation

Step 1: Clone this repository to your desktop

Step 2: Make sure node.js and npm are installed

Step 3: In terminal, within the project directory, type npm install

Step 4: In terminal, within the project directory, type npm run build

Step 5: In terminal, within the project directory, type npm run start

## Technologies Used

_HTML_

_CSS_

_JavaScript_

_Webpack_

_Jasmine_

_Karma_

## Licensing

MIT License

Copyright (c) 2019 Alex Siegberg

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
