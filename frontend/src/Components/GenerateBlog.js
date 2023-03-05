import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const GenerateBlog = () => {
  const [prompt, setPrompt] = useState();
  const [generatedBlog, setGeneratedBlog] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const text = document.getElementById("content").innerText;
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setIsCopied(true);
  };

  const handleGenerateBlog = async (e) => {
    e.preventDefault();

    setLoading(true);
    const response = await axios.post("https://blog-generate.onrender.com/", {
      prompt:
        "create a long blog on" +
        prompt +
        "present in a organized manner also use bullte points if needed",
    });

    if (response.status === 200) {
      const parsedData = response.data.bot;
      const paragraphs = parsedData.split(/\r?\n/);
      const paragraphElements = paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ));

      setGeneratedBlog(paragraphElements);
      setLoading(false);
      setPrompt("");
    }
  };

  return (
    <div>
      <div className="flex flex-col float-left mt-35 sm:mt-2 justify-center items-center">
        <form onSubmit={handleGenerateBlog}>
          <input
            className="outline-none border-b-2 sm:text-center ml-6 text-xl flex flex-wrap"
            placeholder="Enter keyword"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </form>
        <button
          className="p-1 bg-blue-500 rounded-md w-40 m-4 text-white font-bold"
          type="submit"
          onClick={handleGenerateBlog}
        >
          Generate
        </button>
        *Enter keyword only
        {generatedBlog && (
          <button
            onClick={copyToClipboard}
            className="w-40 bg-gray-400 p-1 text-white mt-1 float-right border border-gray-800"
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        )}
      </div>

      <div
        className={`${
          generatedBlog
            ? "h-fit w-4/6 p-2 float-right mr-3 sm:float-left mx-9 border-2  mt-4 rounded-md"
            : "h-87vh w-4/6 p-2 float-right mr-3 sm:float-left mx-9 border-2  mt-4 rounded-md"
        }`}
      >
        {!loading ? (
          <div>
            <p id="content" className="text-left">
              {generatedBlog}
            </p>
          </div>
        ) : (
          <div className="my-35">
            <CircularProgress />
            <p>Please wait we're generating your content</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateBlog;
