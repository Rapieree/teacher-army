import {StatusCode} from "../../utils/const";
import crypto from "crypto";
import connectDB from "../../middleware/mongodb";
import {Payment} from "../../models/payment";

// key from magazine
const KEY = `key`;

const handler = async (req, res) => {
  console.log(req);
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

      const hashString = MNT_ID + MNT_TRANSACTION_ID + MNT_OPERATION_ID + MNT_AMOUNT + MNT_CURRENCY_CODE + MNT_SUBSCRIBER_ID + MNT_TEST_MODE + KEY;
      const controlHash = crypto.createHash(`md5`).update(hashString).digest(`hex`);

      try {
        if (String(controlHash) === String(MNT_SIGNATURE)) {
          const payment = new Payment({
            email: MNT_SUBSCRIBER_ID || ``,
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
          console.log(`ALL OK: BD, SIGNATURES`);
        } else {
          res.status(StatusCode.OVERLOAD_SERVER).send(`FAIL`);
          console.log(`SIGNATURES VALIDATE ERROR: hashGet: ${MNT_SIGNATURE}, controlHash: ${controlHash}`);
        }
      } catch (err) {
        console.log(`BD ERROR: ${err}`);
        res.status(StatusCode.OVERLOAD_SERVER).send(`FAIL`);
      }
    } else {
      res.status(StatusCode.SUCCESS).send(`OK`);
      console.log(`Get verify request?`);
    }
  } else {
    req.status(StatusCode.SUCCESS).send(`OK`);
    console.log(`Request no method GET`);
  }
};

export default connectDB(handler);
