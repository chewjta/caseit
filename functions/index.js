const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HmGC4DZKZqSIF0GxbIa2aC2OOcRN0c1NfGhfxItM6CZLDnyzBcD8KpbkaM4HPAwOQKBQzPhkXK6T6xc96z9f8En00rfPpl0W8"
);

// to set up API

//    App config
const app = express();
//    Middleware
app.use(cors({ origin: true }));
app.use(express.json());
//    API routes
app.get("/", (request, response) => {
  response.status(200).send("hello world");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request received boom! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // 201 - ok all good, created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//    listen command
exports.api = functions.https.onRequest(app);

// example endpoint:
// http://localhost:5001/ecomm-23f2e/us-central1/api
