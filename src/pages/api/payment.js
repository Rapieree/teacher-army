import {StatusCode} from "../../utils/const";
import crypto from "crypto";
import connectDB from "../../middleware/mongodb";
import {Payment} from "../../models/payment";

// key from magazine
const KEY = process.env.KEY_MAGAZINE;

const handler = async (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req);
  // eslint-disable-next-line no-console
  console.log(req.query);

  if (req.method === `GET`) {
    const queries = req.query;
    if (queries.MNT_TRANSACTION_ID) {
      const {
        MNT_ID,
        MNT_TRANSACTION_ID,
        MNT_OPERATION_ID,
        MNT_AMOUNT,
        MNT_CURRENCY_CODE,
        MNT_TEST_MODE,
        MNT_SIGNATURE,
        MNT_SUBSCRIBER_ID,
      } = queries;
      const tariff = queries[`tariff`];
      const numberPhone = queries[`number-phone`];

      const hashString = MNT_ID + MNT_TRANSACTION_ID + MNT_OPERATION_ID + MNT_AMOUNT + MNT_CURRENCY_CODE + MNT_SUBSCRIBER_ID + MNT_TEST_MODE + KEY;
      const controlHash = crypto.createHash(`md5`).update(hashString).digest(`hex`);

      try {
        if (String(controlHash) === String(MNT_SIGNATURE)) {
          const payment = new Payment({
            email: MNT_SUBSCRIBER_ID || ``,
            tariff,
            numberPhone,
            timeRus: new Date().toLocaleString(`ru-Ru`, {timeZone: `Europe/Moscow`}),
            timeGMT: new Date(),
            payData: {
              MNT_ID,
              MNT_TRANSACTION_ID,
              MNT_OPERATION_ID,
              MNT_AMOUNT,
              MNT_CURRENCY_CODE,
            },
          });

          payment.save();
          res.status(StatusCode.SUCCESS).send(`SUCCESS`);
          // eslint-disable-next-line no-console
          console.log(`ALL OK: BD, SIGNATURES`);
        } else {
          res.status(StatusCode.OVERLOAD_SERVER).send(`FAIL`);
          // eslint-disable-next-line no-console
          console.log(`SIGNATURES VALIDATE ERROR: hashGet: ${MNT_SIGNATURE}, controlHash: ${controlHash}`);
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(`BD ERROR: ${err}`);
        res.status(StatusCode.OVERLOAD_SERVER).send(`FAIL`);
      }
    } else {
      res.status(StatusCode.SUCCESS).send(`OK`);
      // eslint-disable-next-line no-console
      console.log(`Get verify request?`);
    }
  } else {
    req.status(StatusCode.SUCCESS).send(`OK`);
    // eslint-disable-next-line no-console
    console.log(`Request no method GET`);
  }
};

export default connectDB(handler);
