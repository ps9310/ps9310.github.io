
// Get a client side token from Teams
async function getTeamsToken() {
    console.log("getting TeamsToken")
    microsoftTeams.initialize();
    return new Promise((resolve, reject) => {
        microsoftTeams.authentication.getAuthToken({
            successCallback: (result) => {
                console.log("getting TeamsToken successCallback")
                resolve(result);
            },
            failureCallback: (error) => { reject(error); }
        });
    });
}

// Get Teams context
async function getTeamsContext() {
    console.log("getting TeamsContext")
    microsoftTeams.initialize();
    return new Promise((resolve, reject) => {
        microsoftTeams.getContext((context) => {
            console.log("getting TeamsToken successCallback")
            resolve(JSON.stringify(context));
        });
    });
}