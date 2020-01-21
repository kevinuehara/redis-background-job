import Mail from '../lib/Mail';

export default {
    async store(req, res) {
        const { name, email, password} = req.body;

        const user = { name, email, password };

        await Mail.sendMail({
            from: 'Queue Test <queue@queuetest.com.br>',
            to: `${name} <${email}>`,
            subject: 'User insert',
            html: `Hello, ${name}, just a test to send email`
        });

        return res.json(user);
    }
}