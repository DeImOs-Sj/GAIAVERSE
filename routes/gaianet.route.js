const express = require("express");
const { HOST_SOCKET, HOST } = require("../lib/data");
const router = express.Router();
const twillio = require("twilio");
const gaianetController = require("../controllers/gaianet.controller");

// router.post("/gaianet", gaianetController);

router.post("/transcribe", async (req, res) => {
  const skip = req.query.skip;

  const response = new twillio.twiml.VoiceResponse();

  /* Greet the user if first interaction */
  if (!skip) {
    response.say(
      { voice: "Polly.Aditi", language: "en-IN" },
      "How are you doing today how can i help you ?"
    );
  }

  /* Gather the input and redirect for processing */
  response.gather({
    enhanced: false,
    speechTimeout: "auto",
    speechModel: "phone_call",
    input: ["speech"],
    action: `${HOST}/gaia/respond`,
    method: "POST",
    actionOnEmptyResult: true,
    debug: true,
    language: "en-IN",
  });

  /* Send Twiml response */
  res.type("text/xml");
  res.send(response.toString());
});

router.post("/respond", async (req, res) => {
  const userPrompt = req.body?.SpeechResult ?? req.query?.SpeechResult ?? "";
  const response = new twillio.twiml.VoiceResponse();

  console.log("User Prompt: ", userPrompt);

  try {
    const adminResponse = await gaianetController(userPrompt);
    if (!adminResponse) {
      response.say(
        { voice: "Polly.Aditi", language: "en-IN" },
        "Processing your request please wait"
      );
    } else {
      response.say(
        { voice: "Polly.Aditi", language: "en-IN" },

        adminResponse
      );
    }

    response.redirect(
      {
        method: "POST",
      },
      `${HOST}/gaia/transcribe?skip=true`
    );
  } catch (err) {
    console.error(err);
    response.say("Some error occuered please try again later");
  }

  res.type("text/xml");
  res.send(response.toString());
});
module.exports = router;
