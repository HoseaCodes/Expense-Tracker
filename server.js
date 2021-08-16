const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require("./config/database");
const path = require('path');
const plaid = require('plaid');
const bodyParser = require('body-parser');

dotenv.config({ path: './config/config.env' })
connectDB();

const app = express();

const client = new plaid.Client({
  clientID: process.env.PLAID_CLIENT_ID || '6112a086e1b0f700118a07d0',
  secret: process.env.PLAID_SECRET || 'd5979309df1f8af1c8ab7493ef8564',
  env: plaid.environments.sandbox,
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Mounted Routes
const tranasctionsRouter = require('./routes/transactions');
const categoryRouter = require('./routes/category');

app.get('/accounts', function (request, response, next) {
  client.getAccounts(accessToken, function (error, accountsResponse) {
    if (error != null) {
      prettyPrintResponse(error);
      return response.json({
        error: error,
      });
    }
    prettyPrintResponse(accountsResponse);
    response.json({ error: null, accounts: accountsResponse });
  });
});

app.post("/plaid_token_exchange", async (req, res) => {
  try {
    const { publicToken } = req.body;
    console.log(publicToken)
    const { access_token } = await client
      .exchangePublicToken(publicToken)
      .catch(console.error);

    console.log(access_token)

    const authResponse = await client.getAuth(access_token);
    const identityResponse = await client.getIdentity(access_token);
    const balanceResponse = await client.getBalance(access_token);
    console.log("Auth: ", authResponse)
    console.log("Identity: ", identityResponse)
    console.log("Balance: ", balanceResponse)
  } catch (e) {
    console.error(e);
  }
});

app.post('/create_link_token', async (request, response) => {
  try {
    // Get the client_user_id by searching for the current user
    // const user = await User.find();
    const clientUserId = 'user-id';
    // Create the link_token with all of your configurations
    const tokenResponse = await client.createLinkToken({
      user: {
        client_user_id: '9',
      },
      client_name: 'Plaid Test App',
      products: ["auth", "identity"],
      country_codes: ['US'],
      language: 'en',
    });
    response.json(tokenResponse);
  } catch (e) {
    // Display error on client
    return response.send({ error: e.message });
  }
});

app.use('/api/transactions', tranasctionsRouter)
app.use('/api/categories', categoryRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))