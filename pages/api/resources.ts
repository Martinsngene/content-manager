/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ResourcesTypes } from "components/types/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function resources(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch("http://localhost:3001/api/resources");
  const data: ResourcesTypes[] = await response.json();
  res.send(data);
}
