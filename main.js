const fs = require('fs');
const path = require('path');

const customLogger = ({logLevel, event, projectName, timeZone = 'Asia/Kolkata'}) => {
    const date_time = new Date().toLocaleString('en-US', { timeZone }); //get date and time in string
    const date = date_time.split(', ')[0]; // extract date
    const time = date_time.split(', ')[1]; // extract time
    
    const parent_root_directory = event.stack.split('(')[1].split(projectName)[0];
    const project_root_path = path.join(parent_root_directory, projectName);   // extracting path of project root directory
    const logs_folder = path.join(project_root_path, 'log_report'); // path of log_report folder

    if(!fs.existsSync(logs_folder)) { // if logs_folder doesn't exist, make one
        fs.mkdirSync(logs_folder);
    }


    let log_file = path.join(logs_folder, `log: ${date.split('/')[1]}.${date.split('/')[0]}.${date.split('/')[2]}`);

    const log_report = {
        logLevel,
        filename: event.stack.split(`${projectName}/`)[1].split(':')[0],
        time, 
        lineNo: event.stack.split(':')[2],  //event.stack.split('at')[1].split(':')[1],
        logName: event.name,
        logMessage: event.message,
    };

    // console.log(event.stack);
    fs.appendFileSync(log_file, JSON.stringify(log_report)+'\n');
};

module.exports = customLogger;