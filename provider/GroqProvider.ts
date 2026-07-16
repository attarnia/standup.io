import { groq } from "@/lib/ai/groqai";
import { AIProvider } from "./AIProvider";


export class GroqProvider extends AIProvider {
  constructor() {
    super("Groq", "llama-3.3-70b-versatile");
  }
  async generate(prompt: string) {
    const response = await groq.chat.completions.create({
      model: this.model,
      messages: [{ role: "user", content: prompt }],
    });
    return response.choices[0].message.content ?? "";
  }
}
