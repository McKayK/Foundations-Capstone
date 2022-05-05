require("dotenv").config();
const axios = require("axios");
const Sequelize = require("sequelize");

const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  newOrder: (req, res) => {
    const {
      firstName,
      lastName,
      address,
      apartment,
      city,
      state,
      ringSize,
      notes,
      customization,
    } = req.body;
    sequelize
      .query(
        `
            INSERT INTO orders (first_name, last_name, address, apartment, city, state, ring_size, notes, customization)
            VALUES ('${firstName}', '${lastName}', '${address}', '${apartment}', '${city}', '${state}', '${ringSize}', '${notes}', ${customization})
        `
      )
      .then(() => {
        let data = `To=+18013106181&From=+13853311320&Body=${firstName}\n${lastName}\n${address}\n${apartment}\n${city}\n${state}\n${ringSize}\n${notes}\n${customization}`;

        let configuration = {
          headers: {
            Authorization:
              "Basic " +
              Buffer.from(
                `ACc9dc2262decc7911f20fd6ff83f628a2:49cbdaef3b1516de0f2b0b4875c7d0c1`
              ).toString("base64"),
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        };

        axios
          .post(
            "https://api.twilio.com/2010-04-01/Accounts/ACc9dc2262decc7911f20fd6ff83f628a2/Messages.json",
            data,
            configuration
          )
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => console.log(err));

        res.status(200).send("New order received!");
      });
  },
};
