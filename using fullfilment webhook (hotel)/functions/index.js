const functions = require('firebase-functions');

var admin = require("firebase-admin")            //getting firebase admin and for using module in an app
admin.initializeApp(functions.config().firebase)  //initializing the default app

//exports.webhook = functions.https.onRequest((request, response) => {

exports.hotelBooking = functions.https.onRequest((request, response) => {
    //  console.log("request.body.result.parameters: ", request.body.result.parameters);
    //  console.log("Deployment-1");


    //{
    //   name: "john",
    //   persons: "3";   
    //}

    let params = request.body.queryResult.parameters   //intializing parameters
    let intentName = request.body.queryResult.intent.displayName   //getting parameters from dialogflow
    console.log("Intent name", intentName);

    // if (intentName === "RoomBooking") {

    switch (intentName) {

        case 'RoomBooking':
            response.send({
                fulfillmentText:
                    `${params.name} your hotel booking request for ${params.RoomType}room is forwarded for 
                ${params.persons}persons. We will contact you on ${params.email}soon`
            });
            break;


        // else if (intentName === "Complaint") {

        case 'Complaint':
            response.send({
                fulfillmentText:
                    `Your feedback is duly noted against: \n Subject: ${params.subject}.
                                 \n Description: ${params.description}`
            });

            break;

        /*   case 'Feedback':
           response.send({
                   fulfillmentText:
                          `Your complaint is launched against ${params.subject} for: ${params.description}`
         });
         
 
                break;
        */

        default:
            {
                response.send({
                    fulfillmentText:
                        `I can assist you in room booking and complaint. Please ask your query.`
                })
            }
    }
});