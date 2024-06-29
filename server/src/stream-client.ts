import { StreamClient } from "@stream-io/node-sdk";

const apiKey="3xxbqt9cwf3x"
const apiSecret="73p6hs7c2tt5sg965bggcwg7aguznm9q9k2e8qasdvp5myvttxbf6u33erdmw5dj"

export const client=new StreamClient(apiKey, apiSecret);