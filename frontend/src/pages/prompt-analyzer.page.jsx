import React from "react";
import AnimationWrapper from "../common/page-animation";

const PromptAnalyzer = () => {
    return (
        <AnimationWrapper>
            <section className="w-full max-w-3xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">Prompt Analyzer</h1>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Enter a prompt below to analyze whether it is safe or suspicious.
                </p>

                <textarea 
                    className="w-full h-40 border p-3 rounded-md outline-none focus:border-black dark:bg-dark-secondary"
                    placeholder="Enter your prompt here..."
                ></textarea>

                <button className="btn-dark px-6 py-2 mt-4">
                    Analyze
                </button>
            </section>
        </AnimationWrapper>
    );
};

export default PromptAnalyzer;
