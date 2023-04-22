const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
// eslint-disable-next-line no-unused-vars
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// App config useing express
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes (get test)
app.get("/", (req, res) => res.status(200).send("Hello World"));

// Create Payment
app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
    payment_method_types: ["card"],
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// api host
// http://127.0.0.1:5001/clone-44dd0/us-central1/api
