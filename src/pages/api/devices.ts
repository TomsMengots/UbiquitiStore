import type { NextApiRequest, NextApiResponse } from "next";
import { DevicesHttpService } from "~/core/services/DevicesHttpService";
import { runCorsMiddleware } from "~/core/middlewares/CorsMiddleware";

const devicesHttpService = new DevicesHttpService();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runCorsMiddleware(req, res);

  const response = await devicesHttpService.get("public");

  res.json(await response.json());
}
