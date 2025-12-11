import AnimationWrapper from "../common/page-animation";

const PrivacyPage = () => {
    return (
        <AnimationWrapper>
            <section className="max-w-7xl mx-auto py-10 px-[5vw]">

                <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>

                <p className="text-xl leading-7 text-dark-grey mb-6">
                    At PromptShield, your privacy is important to us. This Privacy Policy 
                    explains how we collect, use, and protect your information when you use 
                    our website.
                </p>

                <h3 className="text-2xl font-semibold mb-3">Information We Collect</h3>
                <ul className="list-disc pl-6 text-dark-grey leading-7 mb-6">
                    <li className="text-xl"><strong className="text-xl">Account Information:</strong> Email, username, profile details.</li>
                    <li className="text-xl"><strong className="text-xl">Content:</strong> Blogs, comments, tags, and public profile activity.</li>
                    <li className="text-xl"><strong className="text-xl">Analytics:</strong> Non-identifying usage data to improve our platform.</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3">How We Use Your Information</h3>
                <ul className="list-disc pl-6 text-dark-grey leading-7 mb-6">
                    <li className="text-xl">To run and improve the website’s features</li>
                    <li className="text-xl">To show your blogs, comments, and public profile</li>
                    <li className="text-xl">To personalize your experience</li>
                    <li className="text-xl">To maintain community safety and detect policy violations</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3">Data Sharing</h3>
                <p className="text-xl leading-7 text-dark-grey mb-6">
                    We do <strong className="text-xl">not</strong> sell or share your personal data with advertisers.  
                    We only disclose information when required by law or to enforce community safety.
                </p>

                <h3 className="text-2xl font-semibold mb-3">Your Rights</h3>
                <ul className="list-disc pl-6 text-dark-grey leading-7 mb-6">
                    <li className="text-xl">Update your profile information</li>
                    <li className="text-xl">Delete your blogs or comments</li>
                    <li className="text-xl">Request account deletion</li>
                </ul>

                <p className="text-xl leading-7 text-dark-grey">
                    By using PromptShield, you agree to this Privacy Policy.  
                    Updates to this policy will be posted on this page.
                </p>

            </section>
        </AnimationWrapper>
    );
};

export default PrivacyPage;
