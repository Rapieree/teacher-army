const handler = (req, res) => {
  let queries = {};

  if (req.method === `POST`) {
    queries = req.body;
    res.status(200).send(`okey`);
    console.log(queries);
  }
};

export default handler;
