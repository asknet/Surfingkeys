// sforce.js
// import jsforce from '../jsforce.min.js' 

// Internal methods (not part of the exported object)
function privateMethod1() {
    console.log("This is a private method and won't be exported.");
}

function privateMethod2() {
    console.log("Another private method.");
}

// Utility methods (will be part of the exported object)
function utilityMethod1() {
    console.log("Utility method 1 called.");
    // Internal logic using private methods
    privateMethod1();
}

function utilityMethod2(data) {
    console.log("Utility method 2 called with data:", data);
    // Internal logic using private methods
    privateMethod2();
}

function getSessionId() {
    return new Promise((resolve, reject) => {
        RUNTIME('getSfHost', {url: location.href}, sfHost => {
            //console.log(sfHost);
            RUNTIME('getSfSession', {sfHost: sfHost}, sfSession => {
                resolve(sfSession);
            });
        });
    });
}


// Create the `sforce` object with public methods
const sforce = {
    utilityMethod1,
    utilityMethod2,
    // Add more utility methods as needed
};

// Export the `sforce` object
export default sforce;
