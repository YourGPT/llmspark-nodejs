# @yourgpt/llmspark-nodejs

This @yourgpt/llmspark-nodejs package provides convenient access to the [LLM Spark](https://yourgpt.ai/llm-spark) REST API from JavaScript. It allows you to interact with the API and harness the power of AI for various tasks.


## Installation
You can install this package using npm:
```bash
npm install @yourgpt/llmspark-nodejs
```

## Setup API Keys:
Visit [https://llmspark.yourgpt.ai](https://llmspark.yourgpt.ai) and generate your API keys
```bash
const { LLMSpark } = require("@yourgpt/llmspark-nodejs");

const api = new LLMSpark({
   apiKey: 'My Api Key'
});
```

## Generate API Response with Stream:
The code below shows how to get started using the stream function with the stream set to true.
```bash
const main = async () => {
   let data = await api.generate({
      deployment_uid: "d5b67a9c-2768-4b06-b0b1-5eca4a15a0e",
      variables: { "query_str":"how are you doing?"},
      tags: ["user-123"],
      stream: true
   }});

    for await(const stream of result.getOutput()){
      console.log(stream)
    }
   console.log(data.getMetrics());  // for getting metrics
   console.log(data.getNodes());  // for getting nodes

};

 main();
```

## Generate API Response without Stream:
The code below shows how to get started using the stream function with the default stream set to false.
```bash
const main = async () => {
   let data = await api.generate({
      deployment_uid: "d5b67a9c-2768-4b06-b0b1-5eca4a15a0e",
      variables: { "query_str":"how are you doing?" },
      tags: ["user-123"]
   }});

   console.log(data.getOutput());  // for getting output
   console.log(data.getMetrics());  // for getting metrics
   console.log(data.getNodes());  // for getting nodes

};

 main();
```

## Search API Response:
```bash
const search = async () => {
   let data = await api.search({limit: 3, query: "what information you have?"});
   return data;
};

search();
```