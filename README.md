# angular-api-factory
app/index.constants.js - file with remote host and REST points settings. It uses public youtube api
main folder contains demonstration view and controller (where api factory usage is demonstrated)
components/api.factory.js - my factory to call APIs. It supports two ways for serializing parameters
components/errorsHandler.service.js - my small service for displaying error messages

PLEASE NOTE: There are few different REST points configured in app/index.constants.js. 2 GET requests are working, another added just for demo and display errors. You should replace auth token in index.constants.js to be able to make GET requests. This token you can generate here https://any-api.com/consoles/googleapis.com/youtube/v3.

To compile and run please use "gulp serve" command.