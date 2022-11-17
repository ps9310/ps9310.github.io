
// Get a client side token from Teams
async function getTeamsToken() {
    microsoftTeams.initialize();
    return new Promise((resolve, reject) => {
        microsoftTeams.authentication.getAuthToken({
            successCallback: (result) => { resolve(result); },
            failureCallback: (error) => { reject(error); }
        });
    });
}

// Get Teams context
async function getTeamsContext() {
    microsoftTeams.initialize();
    return new Promise((resolve, reject) => {
        microsoftTeams.getContext((context) => {
            resolve(context);
        });
    });
}