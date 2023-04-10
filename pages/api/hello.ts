// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createPublicClient, http } from "viem";
import { goerli } from "viem/chains";
import { abi } from "contants/abi/friends";

console.log(process.env.ALCHEMY_ENDPOINT);

const client = createPublicClient({
  chain: goerli,
  transport: http(process.env.ALCHEMY_ENDPOINT),
});

type Data = {
  name: string;
};

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await client.readContract({
    address: "0x0dBb5669615a3D60e4d86686272483EbAee19a12",
    abi,
    functionName: "tokenHTML",
    args: [BigInt(0)],
  });
  const html = decodeURIComponent(decodeURIComponent(data)).replace(
    "data:text/html,",
    ""
  );
  res.setHeader("Cache-Control", `s-maxage=${60}`);
  res.setHeader("Content-Type", "text/html");
  res.status(200).end(html);
}
