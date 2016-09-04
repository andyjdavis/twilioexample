# twilioexample

This is a simple command line app created from Yeoman scaffolding.

It reads a message from a text file, a list of recipients from a second file (one phone number per line) then SMSs the recipients via Twilio.

## Usage

Supply all the required info on the command line

node lib/index.js twilioSID twilioAuthToken fromPhoneNumber messageFilePath recipientFilePath

## License

Apache-2.0 © [Andrew Davis](thetravelingprogrammer.com)


[npm-image]: https://badge.fury.io/js/twilioexample.svg
[npm-url]: https://npmjs.org/package/twilioexample
[travis-image]: https://travis-ci.org/andyjdavis/twilioexample.svg?branch=master
[travis-url]: https://travis-ci.org/andyjdavis/twilioexample
[daviddm-image]: https://david-dm.org/andyjdavis/twilioexample.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/andyjdavis/twilioexample
