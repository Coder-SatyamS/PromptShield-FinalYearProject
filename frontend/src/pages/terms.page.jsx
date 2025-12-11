import AnimationWrapper from "../common/page-animation";

const TermsPage = () => {
    return (
        <AnimationWrapper>
            <section className="max-w-7xl mx-auto py-10 px-[5vw]">

                <h1 className="text-5xl font-bold mb-6">Terms & Conditions</h1>

                <p className="text-xl leading-7 text-dark-grey mb-6">
                    By using PromptShield, you agree to comply with these Terms & Conditions. 
                    Please read them carefully.
                </p>

                <h3 className="text-2xl font-semibold mb-2">Use of the Platform</h3>
                <p className="text-xl leading-7 text-dark-grey mb-6">
                    You may use PromptShield to publish educational blogs, interact with 
                    community members, and learn about AI safety. Misuse of platform features 
                    is strictly prohibited.
                </p>

                <h3 className="text-2xl font-semibold mb-2">User Content</h3>
                <ul className="list-disc pl-6 text-dark-grey leading-7 mb-6">
                    <li className="text-xl">You retain ownership of the content you publish</li>
                    <li className="text-xl">By posting, you give PromptShield permission to display it publicly</li>
                    <li className="text-xl">Admins may remove content that violates our guidelines</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-2">Prohibited Activity</h3>
                <ul className="list-disc pl-6 text-dark-grey leading-7 mb-6">
                    <li className="text-xl">Posting unsafe or malicious prompts</li>
                    <li className="text-xl">Sharing harmful or illegal content</li>
                    <li className="text-xl">Attempting to bypass platform restrictions</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-2">Account Termination</h3>
                <p className="text-xl leading-7 text-dark-grey mb-6">
                    Users who repeatedly violate rules may have their accounts suspended 
                    or permanently removed.
                </p>

                <h3 className="text-2xl font-semibold mb-2">Changes to Terms</h3>
                <p className="text-xl leading-7 text-dark-grey mb-6">
                    These Terms may be updated occasionally. Continued use of the platform 
                    constitutes acceptance of the revised terms.
                </p>

                <p className="text-xl leading-7 text-dark-grey">
                    If you have questions about these Terms, feel free to contact our support team.
                </p>

            </section>
        </AnimationWrapper>
    );
};

export default TermsPage;
