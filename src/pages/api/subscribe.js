import connectDB from "../../middleware/mongodb";
import {Feedback} from "../../models/feedback";
import {StatusCode} from "../../utils/const";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: `10kb`,
    },
  },
};

const handler = async (req, res) => {
  let errorMessage = ``;
  let errorStatusCode = 0;

  if (req.method === `POST`) {
    try {
      const {name, contacts, message} = req.body;
      const feedback = new Feedback({name, contacts, message});

      feedback.validateSync();
      await feedback.save();
      res.status(StatusCode.SUCCESS).send({message: `ok`});
    } catch (err) {
      if (err.name === `ValidationError`) {
        errorStatusCode = StatusCode.CLIENT_ERROR;
        for (let key in err.errors) {
          if (err.errors.hasOwnProperty(key)) {
            errorMessage += `${err.errors[key].properties.message}. `;
          }
        }
      } else {
        errorStatusCode = StatusCode.SERVER_ERROR;
        errorMessage = `Непредвиденная ошибка на сервере`;
      }

      res.status(errorStatusCode).send({error: errorMessage});
    }
  }
};

export default connectDB(handler);
