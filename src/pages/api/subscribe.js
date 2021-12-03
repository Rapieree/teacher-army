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

      feedback.validateSync();
      await addFeedbackToDatabase(queries);
      res.status(200).send({message: `ok`});
    }
  } catch (err) {
    let errorMessage = ``;

    if (err.name === `ValidationError`) {
      for (let key in err.errors) {
        if (err.errors.hasOwnProperty(key)) {
          errorMessage += `${err.errors[key].properties.message}. `;
        }
      }
    } else {
      errorMessage = `Непредвиденная ошибка на сервере`;
    }

    res.status(400).send({error: errorMessage});
  }
};

export default handler;
