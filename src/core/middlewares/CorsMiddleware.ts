import Cors from "cors";
import { runMiddleware } from "~/core/middlewares/BaseMiddleware";
import { NextApiRequest, NextApiResponse } from "next";

const cors = Cors({
  methods: ["GET", "POST", "HEAD"],
});

const runCorsMiddleware = async (req: NextApiRequest, res: NextApiResponse) => {
  return await runMiddleware(req, res, cors);
};

export { runCorsMiddleware };
