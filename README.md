# custom_logger_javascript
This is a simple logger for JavaScript. It mimics the functionality of other popular logger modules out there such as Winston.

To use the logger add `const customLogger = require('./main');` at the top of the program. You may then use the logger in the following manner - 
    `customLogger({`
        `logLevel: 'info',`
        `event: successEvent,`
        `projectName`
    `});`
    
The expected paramater is a single object, containing the following properties - 
  - logLevel: Currently, the values 'warning', 'error', and 'info' are accepted.
  - event: A JS Error object that has a name, message, and a stack trace.
  - projectName: The name of the project's root directory folder. 
  - timeZone (optional): The default value is 'Asia/Kolkata'.

Files anagram.js and leap_year.js are demo files depicting the use of custom logger.
