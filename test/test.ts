// __tests__/ApiResponse.test.ts
import { LLMSpark } from "../src/index";

describe('ApiResponse with search and stream functions', () => {

  const Response = new LLMSpark({ 
    apiKey : "your key",
});

  test('Handles success response with search function', async() => {

    let data = await Response.search({limit: 3, query: "what information you have"});
    console.log("Search Data: ",data)
    expect("Test completed for search.");
  },20000);



  test('Handles success response with stream function and stream: true', async() => {

     let result = await Response.generate({
      deployment_uid:"d5b67a9c-2768-4b06-b0b1-5eca4ab25a0e",
      variables: { "query_str":"how are you doing buddy, you are great", "context_str1":"what is this?", "previous_chat":"USER: hi there"},
      tags: ["user-123"],
      stream: true
    });

    for await(const stream of result.getOutput()){
      console.log(stream)
    }
    console.log("NODES : ",result.getNodes());
    console.log("METRICS : ",result.getMetrics())

    expect("Test completed for sream data with stream: true.");
  }, 20000);



  test('Handles success response with stream function and stream: false', async() => {

    let result = await Response.generate({
      deployment_uid:"d5b67a9c-2768-4b06-b0b1-5eca4ab25a0e",
     variables: { "query_str":"how are you doing buddy, you are great",  "context_str1":"what is this?", "previous_chat":"USER: hi there"},
     tags: ["user-123"]
    });
    console.log("Generate Response with stream FALSE : ",result.getOutput())
   expect("Test completed for sream data with stream: false.");
  },20000);

});