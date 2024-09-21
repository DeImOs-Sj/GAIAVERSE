const {
  HOST_SOCKET,
  HOST,
  TWILIO_ACCOUNT_SID_CALL,
  TWILIO_AUTH_TOKEN_CALL,
  TWILLIO_PHONE_NUMBER,
} = require("../lib/data");
const twilio = require("twilio");
const accountSid = TWILIO_ACCOUNT_SID_CALL;
const authToken = TWILIO_AUTH_TOKEN_CALL;
const fromPhoneNumber = TWILLIO_PHONE_NUMBER;
console.log("accountSid", accountSid);
const client = twilio(accountSid, authToken);

function triggerTwillioCall(toPhoneNumber) {
  try {
    let url = `${HOST}/gaia/transcribe`;

    client.calls.create({
      url: url,
      to: toPhoneNumber,
      from: fromPhoneNumber,
    });

    return `Called Initiated for  flow Successfully!`;
  } catch (err) {
    console.log(err);

    return `Failed to initiate call`;
  }
}

module.exports = triggerTwillioCall;
