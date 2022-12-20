

const AuthMiddleware = async (req, res, next) => {
    const token = req.headers.token;
    try {
        if (token) {
            let v = jwt.verify(token, process.env.TOKEN);
            if (v) {
                req.user = v;
                next();
            } else
                return res.status(401).send("bhago yaha se");
        } else
            return res.status(401).send("please provide token");
    }
    catch (e) {
        return res.status(401).send(e.message);
    }
}

module.exports = AuthMiddleware