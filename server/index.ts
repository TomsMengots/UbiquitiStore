import { readFileSync } from "fs";
import { cwd } from "process";
import { join } from "path";
import { createServer } from "https";
import { parse } from "url";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3001;
const options = {
  key: readFileSync(join(cwd(), ".cert", "key.pem")),
  cert: readFileSync(join(cwd(), ".cert", "cert.pem")),
};

app.prepare().then(() => {
  createServer(options, (req, res) => {
    const parsedUrl = parse(req.url as string, true);
    handle(req, res, parsedUrl);
  }).listen(port, () => {
    console.log(`Server started on https://localhost:${port}`);
  });
});
