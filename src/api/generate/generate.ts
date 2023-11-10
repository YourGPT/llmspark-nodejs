import axios from "axios";
import { NestedGenerateInterface, parse } from "../../index";

// Define the Options interface outside the namespace

export class Generate {
  constructor(protected readonly options: NestedGenerateInterface) {}

  public async withStream(): Promise<any> {
    try {
      const _response = await axios({
        method: "post",
        url: this.options.url,
        data: {
          variables: this.options.variables,
          deployment_uid: this.options.deployment_uid,
          tags: this.options.tags,
          stream: true,
        },
        headers: {
          "Content-Type": "application/json",
          "api-key": this.options.apiKey,
        },
      });
      let stream = await parse(_response.data);
      return stream;
    } catch (error: any) {
      if (error?.response?.data?.data) {
        throw new Error(error.response.data.error);
      } else {
        throw new Error("Something went wrong");
      }
    }
  }

  public async withoutStream(): Promise<any> {
    try {
      const _response = await axios({
        method: "post",
        url: this.options.url,
        data: {
          variables: this.options.variables,
          deployment_uid: this.options.deployment_uid,
          tags: this.options.tags,
          stream: false,
        },
        headers: {
          "Content-Type": "application/json",
          "api-key": this.options.apiKey,
        },
      });
      return _response.data;
    } catch (error: any) {
      if (error?.response?.data?.data) {
        throw new Error(error.response.data.error);
      } else {
        throw new Error("Something went wrong");
      }
    }
  }
}
