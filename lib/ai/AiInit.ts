import { AIManager } from "@/provider/AiManager";
import { GeminiProvider } from "@/provider/GeminiProvider";
import { GroqProvider } from "@/provider/GroqProvider";
import { OpenAIProvider } from "@/provider/OpenAiProvider";

export const ai = new AIManager([
  new GeminiProvider(),
  new GroqProvider(),
  new OpenAIProvider(),
]);
