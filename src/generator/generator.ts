// Write your generator functions here!

export async function* generate(strings: string[]) {
  for (const string of strings) {
    yield string;
    await new Promise((resolve) => setTimeout(resolve, 20));
  }
}
