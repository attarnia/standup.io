import { gemini } from "@/lib/ai/gemini";
import { AIProvider } from "./AIProvider";

export class GeminiProvider extends AIProvider {
  constructor() {
    super("Gemini", "gemini-flash-lite-latest");
  }
  async generate(prompt: string) {
    const response = await gemini.models.generateContent({
      model: this.model,
      contents: prompt,
    });
    return response.text ?? "";
  }
}
