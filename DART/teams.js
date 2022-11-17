
// Get a client side token from Teams
function getTeamsToken() {
    console.log("getting TeamsToken");
    microsoftTeams.initialize();
    microsoftTeams.authentication.getAuthToken({
        successCallback: (result) => {
            console.log("TeamsToken successCallback");
            window.nativeCommunication('getTeamsToken', result);
        },
        failureCallback: (error) => {
            window.nativeCommunication('getTeamsToken', null);
        }
    });
}

// Get Teams context
function getTeamsContext() {
    console.log("getting TeamsContext");
    microsoftTeams.initialize();
    microsoftTeams.getContext((context) => {
        console.log("TeamsContext successCallback");
        window.nativeCommunication('getTeamsContext', JSON.stringify(context));
    });
}
