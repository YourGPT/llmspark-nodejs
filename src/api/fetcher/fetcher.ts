import axios from "axios"; // Import axios correctly
import { SearchInterface } from "../../index";

// Define the Options interface outside the namespace

export class Fetcher {
  constructor(protected readonly options: SearchInterface) {}

  public async fetcher(): Promise<any> {
    try {
      const _response = await axios({
        method: "post",
        url: this.options.url,
        data: this.options.body,
        headers: {
          "Content-Type": "application/json",
          "api-key": this.options.apiKey,
        },
      });
      return _response.data.data;
    } catch (error: any) {
      if (error?.response?.data?.message) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("Something went wrong");
      }
    }
  }
}
