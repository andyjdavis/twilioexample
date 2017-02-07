// See the LICENSE file for the license
// Usage is:
// node lib/index.js twilioSID twilioAuthToken fromPhoneNumber messageFilePath recipientFilePath

var twilio = require('twilio');
var fs = require('fs')

if(process.argv.length != 7) {
	throw new Error('Incorrect parameter count.\r\nUsage: lib/index.js twilioSID twilioAuthToken fromPhoneNumber messageFilePath recipientFilePath');
}
var twilioAccountSID = process.argv[2];
var twilioAuthToken = process.argv[3];
var fromPhoneNumber = process.argv[4];
var messageFile = process.argv[5];
var recipientFile = process.argv[6];

var text = fs.readFileSync(messageFile,'utf8');
if (!text) {
	throw new Error('Could not load mesage from ' + messagePath);
}
console.log('Read in message:');
console.log(text);
console.log('------------------------------');

var recipients = fs.readFileSync(recipientFile).toString().split(/\r?\n/);;
if (!recipients || recipients.length < 1) {
	throw new Error('Could not load recipients from ' + recipientFile);
}

var client = new twilio.RestClient(twilioAccountSID, twilioAuthToken);
console.log('Created twilio client');

var recipient = null;
var success = [];
var failure = [];
for (var i = 0; i < recipients.length; i++) {
	recipient = recipients[i];

	(function (currentRecipient) {
		console.log(`Sending to ${currentRecipient}`);

		client.sms.messages.create({
			to: currentRecipient,
			from: fromPhoneNumber,
			body: text
		}, function (error, message) {
			console.log('Send complete');
			if (!error) {
				success.push(currentRecipient);
				console.log(`Success! ${currentRecipient} The SID for this SMS message is: ${message.sid}`);
				//console.log(`Message sent on: ${message.dateCreated}`);
			} else {
				failure.push(currentRecipient);
				console.log('ERROR: ' + JSON.stringify(error));
			}
		});

	})(recipient);
}

console.log('------------------------------');
console.log('The following numbers failed:');
console.log(JSON.stringify(failure));

