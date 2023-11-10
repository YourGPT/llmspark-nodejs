// src/Client.ts
import {
  Fetcher,
  LLMInterface,
  searchEndpoint,
  SearchBody,
  Generate,
  generateEndpoint,
  GenerateInterface,
  parse_tags,
  handleGenerateResponse,
} from "./index";

/**
 * A class for generate response data with api key.
 */
export class LLMSpark {
  constructor(protected readonly options: LLMInterface) {}

  public async search(body: SearchBody): Promise<any> {
    try {
      const _event = new Fetcher({
        url: searchEndpoint,
        apiKey: this.options.apiKey,
        body: body,
      });
      const _response = await _event.fetcher();
      return _response;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async generate(data: GenerateInterface): Promise<any> {
    try {
      let tags = await parse_tags(data.tags);
      const _respone = new Generate({
        url: generateEndpoint,
        apiKey: this.options.apiKey,
        variables: data.variables,
        tags,
        deployment_uid: data.deployment_uid,
      });
      if (data.stream) {
        const _result = await _respone.withStream();
        return new handleGenerateResponse({ data: _result });
      } else {
        const _result = await _respone.withoutStream();
        return new handleGenerateResponse({ data: _result });
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
