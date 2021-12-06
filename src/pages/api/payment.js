import {StatusCode} from "../../utils/const";

const handler = async (req, res) => {
  res.status(StatusCode.SUCCESS).send(`SUCCESS`);
  console.log(req);
};

export default handler;
