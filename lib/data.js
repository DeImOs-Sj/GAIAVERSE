require("dotenv").config();

TWILIO_ACCOUNT_SID_CALL = process.env.TWILIO_ACCOUNT_SID_CALL;
TWILIO_AUTH_TOKEN_CALL = process.env.TWILIO_AUTH_TOKEN_CALL;
TWILLIO_PHONE_NUMBER = process.env.TWILLIO_PHONE_NUMBER;

PLAYHT_API_KEY = process.env.PLAYHT_API_KEY;
PLAYHT_USER_ID = process.env.PLAYHT_USER_ID;

const HOST_SOCKET =
  "https://3f46-2401-4900-1c45-bcb1-91c-46f9-e60b-431d.ngrok-free.app/ws";

const HOST =
  "https://3f46-2401-4900-1c45-bcb1-91c-46f9-e60b-431d.ngrok-free.app";

module.exports = {
  TWILIO_ACCOUNT_SID_CALL,
  TWILIO_AUTH_TOKEN_CALL,
  TWILLIO_PHONE_NUMBER,
  PLAYHT_API_KEY,
  PLAYHT_USER_ID,
  HOST_SOCKET,
  HOST,
};
