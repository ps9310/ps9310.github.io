
// Get a client side token from Teams
async function getTeamsToken() {
    console.log(`getting TeamsToken`);
    await microsoftTeams.initialize();
    microsoftTeams.authentication.getAuthToken({
        successCallback: (result) => {
            console.log(`TeamsToken successCallback : ${result}`);
            window.rflxMediator('getTeamsToken', result);
        },
        failureCallback: (error) => {
            console.log(`TeamsToken failureCallback: ${error}`);
            window.rflxMediator('getTeamsToken', null);
        }
    });
}

// Get Teams context
async function getTeamsContext() {
    console.log(`getting TeamsContext`);
    await microsoftTeams.initialize();
    microsoftTeams.getContext((context) => {
        var tenantId = context.user.tenant.id;
        console.log(`TeamsContext successCallback ${tenantId}`);
        window.rflxMediator('getTeamsContext', tenantId);
    });
}
