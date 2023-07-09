const customLogger = require('./main');
const PROJECT_NAME = "custom_logger_javascript";

try {
//     const input1 = "Tom Marvolo Riddle";
//     const input2 = "I am Lord Voldemort";

    // const input1 = "";
    // const input2 = null;

    // const input1 = null;
    // const input2 = null;

    // const input1 = "abcd";
    // const inpu2 = null;

    // const input1 = "pA      N";
    // const input2 = "n aP";

    // const input1 = "1234";
    // const input2 = 568;

    const input1 = 1234;
    const input2 = "3214";

    // const input1 = true;
    // const input2 = "teur";


    if (!input1 && !input2) {
        const bothNullInput = new Error("Invalid Input- Both inputs are null ");
        throw bothNullInput;
    }

    else if (!input1 || !input2) {
        const singleNullInput = new Error("Invalid Input- One of the inputs is null ");
        throw singleNullInput;
    }
    else{

        if((Number(input1) === input1 || Number(input2) === input2) || (Boolean(input1) === input1 || Boolean(input2) === input2)) {
            console.warn("Please provide string type input ");
            const typeMismatch = new Error("Please provide string type input ");
            typeMismatch.name = "input_type_mismatch";
    
            customLogger({
                logLevel: 'warning',
                event: typeMismatch,
                projectName: PROJECT_NAME,
            });
        }
    
            let newInput1 = input1.toString().replace(/\s+/g, "").toLowerCase().split('').sort().join('');  //remove space, convert to lowercase, sort
            let newInput2 = input2.toString().replace(/\s+/g, "").toLowerCase().split('').sort().join('');
            
            // console.log(newInput1);
            // console.log(newInput2);
    
            let isAnagram = false;
    
            if(newInput1 === newInput2)
            isAnagram = true;
            
            const msg = isAnagram ? `${input1} and ${input2} are anagram of each other` : `${input1} and ${input2} are not anagram of each other`;
            console.info(msg);
    
            const successEvent = new Error(msg);
            successEvent.name = 'Success';
    
            customLogger({
                logLevel: 'info',
                event: successEvent,
                projectName: PROJECT_NAME,
    
            })
    }

}
catch (err) {
    console.error("Error: ", err.message);

    customLogger({
        logLevel: 'error',
        event: err,
        projectName: PROJECT_NAME,
    });
}
