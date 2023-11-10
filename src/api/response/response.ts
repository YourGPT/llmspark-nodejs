import { generateResponseInterface } from "../../index";

/**
 * A class for handle generate response data.
 */
export class handleGenerateResponse {
  constructor(protected options: generateResponseInterface) {}

  public getOutput(): any {
    try {
      if (
        this.options.data &&
        this.options.data.data &&
        this.options.data.data.output
      ) {
        return this.options.data.data.output;
      }
      if (this.options.data && this.options.data.output) {
        return this.options.data.output;
      }
      throw new Error("Cannot find output data");
    } catch (error: any) {
      return error.message;
    }
  }

  public getMetrics(): any {
    try {
      if (
        this.options.data &&
        this.options.data.data &&
        this.options.data.data.metrics
      ) {
        return this.options.data.data.metrics;
      }
      if (this.options.data && this.options.data.metrics) {
        return this.options.data.metrics;
      }
      throw new Error("Cannot find metrics data");
    } catch (error: any) {
      return error.message;
    }
  }

  public getNodes(): any {
    try {
      if (
        this.options.data &&
        this.options.data.data &&
        this.options.data.data.nodes
      ) {
        return this.options.data.data.nodes;
      }
      if (this.options.data && this.options.data.nodes) {
        return this.options.data.nodes;
      }
      throw new Error("Cannot find nodes data");
    } catch (error: any) {
      return error.message;
    }
  }
}
