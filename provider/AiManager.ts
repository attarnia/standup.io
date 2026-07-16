import type { AIProvider } from "./AIProvider";
type GenerateResult = {
  text: string;
  usedProvider: string;
};
export class AIManager {
  private providers: AIProvider[];
  private timeoutMs: number;

  constructor(providers: AIProvider[], timeoutMs = 15_000) {
    this.providers = providers;
    this.timeoutMs = timeoutMs;
  }
  async generate(prompt: string) {
    const errors: string[] = [];
    for (const provider of this.providers) {
      try {
        console.log(`Trying ${provider.name}`);
        const text = await this.withTimeout(provider.generate(prompt));
        if(!text.trim()) throw new Error("Empty response");
        return { text, usedProvider: provider.name };
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        console.error(`${provider.name}: ${msg}`);
        errors.push(`${provider.name}: ${msg}`);
      }
    }
    throw new Error(`All providers failed: ${errors.join(", ")}`);
  }
    private withTimeout(promise: Promise<string>): Promise<string> {
    return Promise.race([
      promise,
      new Promise<string>((_, reject) =>
        setTimeout(() => reject(new Error("timeout")), this.timeoutMs)
      ),
    ]);
  }
}

