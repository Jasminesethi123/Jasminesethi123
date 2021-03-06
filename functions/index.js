const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const Stripe = require("stripe")(
  "sk_test_51KIR8wSH2BuwrxZvDq7RaMYEkRrSlRj9zrRVmRnRju6Xpzhrbni9eqiI5NahWfZaeHmce5Bi4h5uQv3VNfgzJ6D100oMh9SCIw"
);

// API

// - API config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!!! for this amount >>>", total);

  const paymentIntent = await Stripe.paymentIntents.create({
    amount: total, //submits if the currency
    currency: "usd",
  });
// OK-created
  response.status(201).send({
clientSecret: paymentIntent.client_secret,
    })
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example ednpoint
//https://localhost:5001/challenge-4b2b2/us-central1/api
