import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="w-full border-t border-grey py-6 bg-white">
            <div className="flex justify-center gap-6 text-dark-grey text-sm flex-wrap">
                <Link to="/help" className="hover:text-black">Help</Link>
                <Link to="/about" className="hover:text-black">About</Link>
                <Link to="/privacy" className="hover:text-black">Privacy</Link>
                <Link to="/rules" className="hover:text-black">Rules</Link>
                <Link to="/terms" className="hover:text-black">Terms</Link>
            </div>
        </footer>
    );
};

export default Footer;
