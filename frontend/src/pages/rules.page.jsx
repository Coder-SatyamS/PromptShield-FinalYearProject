import AnimationWrapper from "../common/page-animation";

const RulesPage = () => {
    return (
        <AnimationWrapper>
            <section className="max-w-7xl mx-auto py-10 px-[5vw]">

                <h1 className="text-5xl font-bold mb-6">Community Guidelines</h1>

                <p className="text-xl leading-7 text-dark-grey mb-6">
                    To maintain a safe, respectful, and educational environment, PromptShield 
                    follows these community rules. All users must follow them when interacting 
                    with the platform.
                </p>

                <h3 className="text-2xl font-semibold mb-2">1. Share Educational & Responsible Content</h3>
                <p className="text-xl leading-7 text-dark-grey mb-6">
                    Blogs must focus on AI safety, ethical prompting, technology awareness, 
                    or related educational topics.
                </p>

                <h3 className="text-2xl font-semibold mb-2">2. No Harmful or Malicious Prompts</h3>
                <p className="text-xl leading-7 text-dark-grey mb-6">
                    Do not share prompts intended to exploit, bypass, or misuse AI systems.  
                    Examples: violence, hate, self-harm, illegal activities, malware prompts.
                </p>

                <h3 className="text-2xl font-semibold mb-2">3. Respect Others</h3>
                <ul className="list-disc pl-6 text-dark-grey leading-7 mb-6">
                    <li className="text-xl">No harassment or personal attacks</li>
                    <li className="text-xl">No discriminatory or hateful behavior</li>
                    <li className="text-xl">No impersonation</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-2">4. Original & Safe Content Only</h3>
                <ul className="list-disc pl-6 text-dark-grey leading-7 mb-6">
                    <li className="text-xl">No plagiarism</li>
                    <li className="text-xl">No copyrighted material without permission</li>
                    <li className="text-xl">No private data leaks</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-2">5. Follow Admin Decisions</h3>
                <p className="text-xl leading-7 text-dark-grey mb-6">
                    Admins may hide or delete blogs that violate safety rules.  
                    Repeated violations may lead to account suspension.
                </p>

                <p className="text-xl leading-7 text-dark-grey">
                    These guidelines help us maintain a safe and trustworthy educational space 
                    for everyone learning about AI safety.
                </p>

            </section>
        </AnimationWrapper>
    );
};

export default RulesPage;
