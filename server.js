const express = require('express');
const config = require('dotenv').config();
const app = express();
app.listen(config.PORT);
