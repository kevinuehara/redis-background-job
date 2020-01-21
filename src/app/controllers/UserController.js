export default {
    async store(req, res) {
        const { name, email, password} = req.body;
        const user = { name, email, password };

        // Add job

        return res.json(user);
    }
}