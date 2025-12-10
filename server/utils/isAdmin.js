// server/utils/isAdmin.js

import User from "../Schema/User.js";

const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user);  // req.user comes from verifyJWT()

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        if (!user.isAdmin) {
            return res.status(403).json({ error: "Access denied. Admins only." });
        }

        next(); // allow route execution
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

export default isAdmin;
