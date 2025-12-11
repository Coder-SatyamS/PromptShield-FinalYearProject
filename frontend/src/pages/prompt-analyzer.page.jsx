// import React from "react";
// import AnimationWrapper from "../common/page-animation";

// const PromptAnalyzer = () => {
//     return (
//         <AnimationWrapper>
//             <section className="w-full max-w-3xl mx-auto p-4">
//                 <h1 className="text-3xl font-bold mb-6">Prompt Analyzer</h1>

//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                     Enter a prompt below to analyze whether it is safe or suspicious.
//                 </p>

//                 <textarea 
//                     className="w-full h-40 border p-3 rounded-md outline-none focus:border-black dark:bg-dark-secondary"
//                     placeholder="Enter your prompt here..."
//                 ></textarea>

//                 <button className="btn-dark px-6 py-2 mt-4">
//                     Analyze
//                 </button>
//             </section>
//         </AnimationWrapper>
//     );
// };

// export default PromptAnalyzer;

// import { useState, useContext } from "react";
// import axios from "axios";
// import { UserContext } from "../App";

// export default function PromptAnalyzer() {

//     const { userAuth } = useContext(UserContext);
//     const { access_token } = userAuth;

//     const [prompt, setPrompt] = useState("");
//     const [result, setResult] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const analyzePrompt = () => {
//         if (!prompt.trim()) return;

//         setLoading(true);

//         // Fake analysis for now — you can replace with real model later
//         let risk = "Safe Prompt";
//         if (prompt.toLowerCase().includes("hack") || prompt.toLowerCase().includes("bypass")) {
//             risk = "⚠ Suspicious Prompt";
//         }

//         const analysisText = `
//             Prompt Length: ${prompt.length} characters
//             Prompt Risk: ${risk}
//         `;

//         setTimeout(() => {
//             setResult(analysisText);
//             setLoading(false);

//             // SAVE PROMPT HISTORY
//             if (access_token) {
//                 axios.post(
//                     import.meta.env.VITE_SERVER_DOMAIN + "/save-prompt",
//                     { prompt, result: analysisText },
//                     { headers: { Authorization: `Bearer ${access_token}` } }
//                 ).catch(err => console.log(err));
//             }

//         }, 700);
//     };

//     return (
//         <div className="max-w-3xl mx-auto mt-20 p-8 bg-white rounded-3xl shadow-xl animate-fadeIn">

//             <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
//                 Prompt Analyzer
//             </h1>

//             <p className="text-dark-grey text-center mb-8">
//                 Enter any AI prompt to check whether it’s safe or suspicious.
//             </p>

//             <textarea
//                 className="w-full p-4 border border-grey rounded-xl bg-light-grey resize-none focus:outline-blue h-40"
//                 placeholder="Type your prompt here..."
//                 value={prompt}
//                 onChange={(e) => setPrompt(e.target.value)}
//             />

//             <button
//                 onClick={analyzePrompt}
//                 className="mt-5 w-full py-3 bg-blue text-white rounded-xl text-lg hover:bg-blue/90 transition-all"
//             >
//                 Analyze Prompt
//             </button>

//             {loading && (
//                 <p className="mt-5 text-center text-lg text-dark-grey animate-pulse">
//                     Analyzing...
//                 </p>
//             )}

//             {result && (
//                 <div className="mt-8 p-6 bg-grey rounded-xl shadow-lg border-l-4 border-blue">
//                     <h2 className="text-xl font-semibold mb-3">Analysis Result</h2>
//                     <pre className="whitespace-pre-wrap text-dark-grey">{result}</pre>
//                 </div>
//             )}

//         </div>
//     );
// }




// import { useState } from "react";
// import axios from "axios";

// export default function PromptAnalyzer() {
//     const [prompt, setPrompt] = useState("");
//     const [result, setResult] = useState(null);

//     const analyzePrompt = async () => {
//         if (!prompt.trim()) return;

//         const { data } = await axios.post(
//             import.meta.env.VITE_SERVER_DOMAIN + "/analyze/save",
//             { prompt }
//         );

//         setResult(data.analysis);
//     };

//     return (
//         <section>
//             <div className="analyze-card">
//                 <h1 className="analyze-title">Prompt Analyzer</h1>

//                 <textarea
//                     className="analyze-textarea"
//                     placeholder="Enter your prompt here…"
//                     value={prompt}
//                     onChange={(e) => setPrompt(e.target.value)}
//                 />

//                 <button className="analyze-button" onClick={analyzePrompt}>
//                     Analyze Prompt
//                 </button>

//                 {result && (
//                     <div className={`analyze-result ${
//                         result.level === "safe"
//                             ? "result-safe"
//                             : result.level === "warning"
//                             ? "result-warning"
//                             : "result-danger"
//                     }`}>
//                         <h2 className="text-xl font-bold mb-2">Analysis Result:</h2>
//                         <p>{result.message}</p>
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// }



// import { useState } from "react";

// export default function PromptAnalyzer() {
//     const [text, setText] = useState("");
//     const [result, setResult] = useState(null);

//     const analyzePrompt = () => {
//         if (!text.trim()) {
//             setResult({ type: "warning", message: "Please enter a prompt first." });
//             return;
//         }

//         // Simple fake analyzer for UI testing
//         if (text.toLowerCase().includes("hack") || text.toLowerCase().includes("bypass")) {
//             setResult({ type: "danger", message: "This prompt looks harmful or unsafe." });
//         } else {
//             setResult({ type: "safe", message: "This prompt looks safe and normal." });
//         }
//     };

//     return (
//         <section className="py-10 px-[5vw]">
//             <div className="analyze-card">

//                 <h1 className="analyze-title">Prompt Analyzer</h1>

//                 <textarea
//                     className="analyze-textarea"
//                     placeholder="Type your AI prompt here..."
//                     value={text}
//                     onChange={(e) => setText(e.target.value)}
//                 />

//                 <button
//                     onClick={analyzePrompt}
//                     className="analyze-button"
//                 >
//                     Analyze Prompt
//                 </button>

//                 {result && (
//                     <div className={`analyze-result result-${result.type}`}>
//                         {result.message}
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// }


// import { useState } from "react";
// import axios from "axios";

// export default function PromptAnalyzer() {
//     const [text, setText] = useState("");
//     const [result, setResult] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const analyzePrompt = async () => {
//         if (!text.trim()) return;

//         setLoading(true);
//         setResult(null);

//         try {
//             const res = await axios.post(
//                 import.meta.env.VITE_SERVER_DOMAIN + "/analyze-prompt",
//                 { prompt: text }
//             );
//             setResult(res.data.result);
//         } catch (err) {
//             console.log(err);
//             setResult("Something went wrong.");
//         }

//         setLoading(false);
//     };

//     return (
//         <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">

//             {/* Title */}
//             <h1 className="text-white text-5xl font-bold mb-10 tracking-wide">
//                 Prompt Analyzer
//             </h1>

//             {/* Card */}
//             <div className="bg-[#1A1A1A] w-full max-w-2xl rounded-2xl p-8 shadow-lg">

//                 {/* Textarea */}
//                 <textarea
//                     value={text}
//                     onChange={(e) => setText(e.target.value)}
//                     className="w-full h-40 bg-[#2A2A2A] text-white p-5 rounded-xl resize-none outline-none border border-grey focus:border-purple"
//                     placeholder="Type or paste your prompt here..."
//                 ></textarea>

//                 {/* Analyze Button */}
//                 <button
//                     onClick={analyzePrompt}
//                     className="w-full mt-6 bg-purple text-white py-3 rounded-xl text-xl hover:bg-opacity-80"
//                 >
//                     {loading ? "Analyzing..." : "Analyze Prompt"}
//                 </button>

//                 {/* Result Box */}
//                 {result && (
//                     <div className="mt-6 p-5 rounded-xl bg-[#2A2A2A] text-white text-base leading-relaxed border border-grey">
//                         {result}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

/*
import { useState } from "react";
import axios from "axios";

export default function PromptAnalyzer() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzePrompt = async () => {
    if (!text.trim()) {
      setResult("Please enter a prompt to analyze.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      // Call your backend analyze route (adjust path if needed)
      const res = await axios.post(
        import.meta.env.VITE_SERVER_DOMAIN + "/analyze-prompt",
        { prompt: text }
      );

      // Backend expected to return { result: "..." }
      setResult(res.data?.result ?? "No result returned.");
    } catch (err) {
      console.error(err);
      setResult("Error analyzing prompt. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Inline styles ensure dark background + visible white text
  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#0b0b0c", // very dark gray/black
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4rem 1.25rem",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "900px",
    background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
    border: "1px solid rgba(255,255,255,0.04)",
    borderRadius: "18px",
    padding: "2rem",
    boxShadow: "0 10px 30px rgba(2,6,23,0.6)",
  };

  const textareaStyle = {
    width: "100%",
    minHeight: 160,
    padding: "1.05rem",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.06)",
    backgroundColor: "#111315", // dark textarea background
    color: "#FFFFFF", // visible text color
    fontSize: 16,
    resize: "vertical",
    outline: "none",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    marginTop: 18,
    padding: "0.9rem",
    borderRadius: 12,
    backgroundColor: "#8B46FF", // your purple
    color: "#fff",
    fontSize: 18,
    border: "none",
    cursor: "pointer",
  };

  const resultStyle = {
    marginTop: 16,
    padding: "1rem",
    borderRadius: 10,
    backgroundColor: "#121212",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.04)",
    whiteSpace: "pre-wrap",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1
          style={{
            color: "#fff",
            fontSize: 40,
            marginBottom: 14,
            textAlign: "center",
            fontWeight: 700,
            letterSpacing: -0.5,
          }}
        >
          Prompt Analyzer
        </h1>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your prompt here..."
          style={textareaStyle}
        />

        <button onClick={analyzePrompt} style={buttonStyle} disabled={loading}>
          {loading ? "Analyzing…" : "Analyze Prompt"}
        </button>

        {result && <div style={resultStyle}>{result}</div>}
      </div>
    </div>
  );
}
*/

import { useState } from "react";

export default function PromptAnalyzer() {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState(null);

    const analyze = () => {
        if (!prompt.trim()) return;
        setResult("Analyzing...");
        setTimeout(() => {
            setResult(
                prompt.toLowerCase().includes("hack")
                    ? "⚠ Suspicious Prompt Detected"
                    : "✔ This prompt seems safe"
            );
        }, 800);
    };

    return (
        <div className="min-h-[calc(100vh-80px)] bg-grey flex items-center justify-center px-6">

            {/* Card */}
            <div className="bg-white shadow-md rounded-2xl p-10 w-full max-w-3xl border border-grey">

                {/* Title */}
                <h1 className="text-4xl font-bold text-center mb-8">
                    Prompt Analyzer
                </h1>

                {/* Search-like Input Box */}
                <div className="bg-grey rounded-2xl p-6 mb-6 border border-grey">
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Type a prompt to analyze..."
                        className="w-full bg-transparent resize-none h-40 text-xl outline-none font-inter text-black placeholder:text-dark-grey"
                    ></textarea>
                </div>

                {/* Analyze Button */}
                <button
                    onClick={analyze}
                    className="w-full bg-black text-white py-4 rounded-xl text-xl font-medium hover:bg-opacity-80 transition"
                >
                    Analyze Prompt
                </button>

                {/* Result Section */}
                {result && (
                    <div className="mt-6 p-5 rounded-xl text-xl text-center font-medium
                        bg-grey text-black border border-dark-grey">
                        {result}
                    </div>
                )}
            </div>
        </div>
    );
}
