const mongoose = require(`mongoose`);

// INSERT PASS FROM PASS STORE
const CONNECT_MONGO_URL = `PASSWORD`;

const handler = async (req, res) => {
  let queries = {};

  if (req.method === `POST`) {
    queries = req.body;
    await mongoose.connect(CONNECT_MONGO_URL);

    const Feedback = await mongoose.model(`feedbacks`);
    await Feedback.insertMany({
      name: queries.name,
      contacts: queries.contacts,
      message: queries.message,
    });

    await mongoose.disconnect();

    res.status(200).send(`okey`);
    console.log(queries);
  }
};

export default handler;
