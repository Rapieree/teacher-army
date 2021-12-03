import {addFeedbackToDatabase, Feedback} from "../../services/mongodb/api";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: `10kb`,
    },
  },
};

const handler = async (req, res) => {
  try {
    if (req.method === `POST`) {
      const queries = req.body;
      const feedback = new Feedback({queries});

      if (feedback.validateSync()) {
        await addFeedbackToDatabase(queries);
        res.status(200).send({message: `ok`});
        console.log(queries);
      } else {
        res.status(400).send({error: `Bad request`});
      }
    }
  } catch (err) {
    let errorMessage = ``;

    for (let key in err.errors) {
      errorMessage += `${err.errors[key].properties.message}. `;
    }

    res.status(400).send({error: errorMessage});
  }
};

export default handler;
