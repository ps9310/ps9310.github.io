
// Get a client side token from Teams
function getTeamsToken() {
    console.log("getting TeamsToken");
    microsoftTeams.initialize();
    microsoftTeams.authentication.getAuthToken({
        successCallback: (result) => {
            console.log("TeamsToken successCallback");
            window.rflxMediator('getTeamsToken', result);
        },
        failureCallback: (error) => {
            console.log("TeamsToken failureCallback" + error);
            window.rflxMediator('getTeamsToken', null);
        }
    });
}

// Get Teams context
function getTeamsContext() {
    console.log("getting TeamsContext");
    microsoftTeams.initialize();
    microsoftTeams.getContext((context) => {
        console.log("TeamsContext successCallback");
        window.rflxMediator('getTeamsContext', JSON.stringify(context));
    });
}
