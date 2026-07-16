import { openAi } from "@/lib/ai/openai";
import { AIProvider } from "./AIProvider";

export class OpenAIProvider extends AIProvider {
  constructor() {
    super("OpenAI", "gpt-5.5");
  }
  async generate(prompt: string) {
    const response = await openAi.chat.completions.create({
      model: this.model,
      messages: [{ role: "user", content: prompt }],
    });
    return response.choices[0].message.content ?? "";
  }
}
 