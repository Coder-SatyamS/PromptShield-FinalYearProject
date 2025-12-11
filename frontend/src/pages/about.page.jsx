import AnimationWrapper from "../common/page-animation";

const AboutPage = () => {
    return (
        <AnimationWrapper>
            <section className="max-w-7xl mx-auto py-10 px-[5vw]">

                <h1 className="text-5xl font-bold mb-6">About PromptShield</h1>

                <p className="text-xl leading-7 text-dark-grey mb-6">
                    PromptShield is an educational blogging platform designed to help users
                    understand the impact, risks, and ethical considerations of interacting 
                    with AI models. Our mission is to encourage responsible usage of AI 
                    systems by providing clear, accessible content on safe prompt 
                    construction, misuse prevention, and AI behavior awareness.
                </p>

                <p className="text-xl leading-7 text-dark-grey mb-6">
                    With the rise of powerful generative models, understanding how a simple
                    prompt can influence output has become more important than ever. 
                    Many users unknowingly craft harmful, biased, or unsafe prompts. 
                    PromptShield aims to fix that by enabling the community to share 
                    insights, examples, best practices, and safety guidelines.
                </p>

                <p className="text-xl leading-7 text-dark-grey mb-6">
                    Our upcoming <strong>Prompt Analyzer</strong> tool will offer users the 
                    ability to check whether their prompts may contain risks or violate 
                    safety norms. This feature is currently under development and will 
                    launch soon.
                </p>

                <h2 className="text-2xl font-semibold mt-10 mb-4">Our Vision</h2>
                <p className="text-xl leading-7 text-dark-grey mb-6">
                    We believe everyone should have access to reliable knowledge about AI safety.
                    PromptShield empowers people to:
                </p>

                <ul className="list-disc pl-6 text-dark-grey leading-7 mb-6">
                    <li className="text-xl">Write and explore blogs about ethical AI use</li>
                    <li className="text-xl">Learn about harmful prompting patterns</li>
                    <li className="text-xl">Share responsible prompting techniques</li>
                    <li className="text-xl">Stay updated on AI safety research</li>
                    <li className="text-xl">Promote a healthier relationship between humans and AI</li>
                </ul>

                <p className="text-xl leading-7 text-dark-grey">
                    Together, we can make AI usage safer, smarter, and more transparent.
                </p>

            </section>
        </AnimationWrapper>
    );
};

export default AboutPage;
