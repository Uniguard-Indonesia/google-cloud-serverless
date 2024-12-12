const {sampleData} = require("../../configs/userDataSandbox");

class SandboxLoginHandler {
    static async validateRequest(req, res, next) {
        let {username, password} = req.body;
        if (!username || !password) {
            return res.status(422).send({success: false, error: {code: 1001, type: "UNPROCESSABLE_ENTITY", message: "parameter not complete"}});
        }
        next();
    }

    static async login(req, res) {
        let {username, password} = req.body;
        const userData = sampleData.find(x => x.username === username && x.password === password);
        if (!userData) {
            return res.status(422).send({success: false, error: {code: 1001, type: "UNPROCESSABLE_ENTITY", message: "credential not match"}});
        }

        return res.status(200).send({
            success: true,
            data: userData
        });
    }
}

module.exports = SandboxLoginHandler;