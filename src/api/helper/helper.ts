import readline from "readline";
import { Readable } from "stream";
import { generate } from "../../index";

// Write your helper functions here!

export function parse(data: string): Promise<any> {
  try {
    return new Promise((resolve) => {
      let events: { [event: string]: string } = {};
      let output: string[] = [];
      let read = Readable.from(data);
      const rl = readline.createInterface({
        input: read,
      });

      let event: any = null;
      let previous_str: string = "";

      rl.on("line", (line) => {
        if (line.startsWith("event:")) {
          event = line.replace("event:", "").trim();
        }
        if (!event) {
          if (line.includes("data:")) {
            let str = line.replace("data:", "").trim();
            output.push(str.replace(previous_str, ""));
            previous_str = str;
          }
        } else {
          if (line.includes("data")) {
            events[event] = line.replace("data:", "").trim();
            event = null;
          }
        }
      });

      rl.on("close", async () => {
        // Resolve the promise with the parsed output
        resolve({ ...events, output: generate(output) });
      });
    });
  } catch (error: any) {
    return error.message;
  }
}

export function parse_tags(data: string | string[]): string {
  // Split the input string by commas and trim each tag
  if (Array.isArray(data)) {
    let tagsData = data.map((item: string) => item.trim()).join(",");
    return tagsData;
  }
  return data;
}
