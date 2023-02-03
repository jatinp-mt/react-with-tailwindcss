import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import './App.css';

function App() {
  const [loading, setLoadingFlag] = useState(false);
  const [images, setImages] = useState(null);
  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    setLoadingFlag(true);
    const res = await openai.createImage({
      prompt: "Say this is a test",
      n: 2,
      size: "1024x1024"
    });
    setLoadingFlag(false);
    setImages(res.data.data);
  }

  return (
    <div className="App">
      <button onClick={generateImage}>Generate an Image</button>
      {loading ? <p>Loading...</p> :
        images && images.forEach((item) => {
          <img src={item.url} alt="generate images" />
        })
      }
    </div>
  );
}

export default App;
