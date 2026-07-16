export abstract class AIProvider {
  readonly name: string;
  readonly model: string;

  constructor(name: string, model: string) {
    this.name = name;
    this.model = model;
  }

  abstract generate(prompt: string): Promise<string>;
}
