import OpenAI from "openai";
import { AIProvider } from "./AIProvider";

const pollinationsClient = new OpenAI({
  baseURL: "https://text.pollinations.ai/v1",
});

export class PollinationsProvider extends AIProvider {
  constructor() {
    super("Pollinations", "openai"); 
  }
  async generate(prompt: string) {
    const response = await pollinationsClient.chat.completions.create({
      model: this.model,
      messages: [{ role: "user", content: prompt }],
    });
    return response.choices[0].message.content ?? "";
  }
}
