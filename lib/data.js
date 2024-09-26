require("dotenv").config();

TWILIO_ACCOUNT_SID_CALL = process.env.TWILIO_ACCOUNT_SID_CALL;
TWILIO_AUTH_TOKEN_CALL = process.env.TWILIO_AUTH_TOKEN_CALL;
TWILLIO_PHONE_NUMBER = process.env.TWILLIO_PHONE_NUMBER;

PLAYHT_API_KEY = process.env.PLAYHT_API_KEY;
PLAYHT_USER_ID = process.env.PLAYHT_USER_ID;

const HOST_SOCKET =
  "https://3fe2-2401-4900-1c43-8d79-ebe-4600-29bf-d9cb.ngrok-free.app/ws";

const HOST =
  "https://3fe2-2401-4900-1c43-8d79-ebe-4600-29bf-d9cb.ngrok-free.app";

module.exports = {
  TWILIO_ACCOUNT_SID_CALL,
  TWILIO_AUTH_TOKEN_CALL,
  TWILLIO_PHONE_NUMBER,
  PLAYHT_API_KEY,
  PLAYHT_USER_ID,
  HOST_SOCKET,
  HOST,
};
