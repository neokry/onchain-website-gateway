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
    address: "0xfd2471C541cEE857cA87534248E69fd11bC9F3a0",
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
