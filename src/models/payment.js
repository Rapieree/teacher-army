import mongoose from "mongoose";

const paymentShema = new mongoose.Schema({
  timeGMT: {
    type: Date,
    default: new Date(),
  },
  timeRus: {
    type: String,
    default: new Date().toLocaleString(`ru-Ru`, {timeZone: `Europe/Moscow`}),
  },
  email: String,
  payData: {
    MNT_ID: String,
    MNT_TRANSACTION_ID: String,
    MNT_OPERATION_ID: String,
    MNT_AMOUNT: String,
    MNT_CURRENCY_CODE: String,
  }
});

export const Payment = mongoose.models.payment || mongoose.model(`payment`, paymentShema);
