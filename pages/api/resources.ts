/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "./data.json";

export default function resources(req: NextApiRequest, res: NextApiResponse) {
  res.send(data);
}
