import dotenv from "dotenv";

// config env file
dotenv.config();

/**
 * This file having interfaces variables.
 */

// LLM Interface
export interface LLMInterface {
  apiKey: string;
}

// Search Interface
export interface SearchInterface {
  url: string;
  apiKey: string;
  body: object;
}

// Search Body Interface
export interface SearchBody {
  limit: number;
  query: string;
}

// Generate Interface
export interface GenerateInterface {
  variables: object;
  tags: any;
  stream?: boolean;
  deployment_uid: string;
}

// Nested Generate Interface
export interface NestedGenerateInterface {
  url: string;
  apiKey: string;
  variables: object;
  tags: string | string[];
  deployment_uid: string;
}

// Handle Generate Interface
export interface generateResponseInterface {
  data?: any;
}

// Declare base endpoint for Apis
export const v1Endpoint: string =
  process.env.LLMSPARK_ENDPOINT || "https://api-llmspark.yourgpt.ai/v1";

// Declare endpoint for SearchEndpoint
export const searchEndpoint: string = `${v1Endpoint}/search`;

// Declare endpoint for StreamEndpoint
export const generateEndpoint: string = `${v1Endpoint}/generate`;
