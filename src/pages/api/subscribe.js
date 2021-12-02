import {addFeedbackToDatabase} from "../../services/mongodb/api";
import {feedbackValidator} from "../../utils/utils";

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

      if (feedbackValidator(queries)) {
        await addFeedbackToDatabase(queries);
        res.status(200).send({message: `ok`});
        console.log(queries);
      } else {
        res.status(400).send({error: `Bad request`});
      }
    }
  } catch (err) {
    res.status(400).send({error: err.message});
  }
};

export default handler;
