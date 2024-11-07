import express from 'express';
import { json } from 'body-parser';
import { createTransport } from 'nodemailer';

const app = express();
const port = 80;

app.use(json());

app.post('/api/contact', (req, res) => {
    const { name, number, message } = req.body;

    // Здесь вы можете добавить логику для отправки данных по электронной почте
    // Используя пакет nodemailer или другие подобные пакеты

    const transporter = createTransport({
        // Настройки SMTP-сервера для отправки почты
    });

    const mailOptions = {
        from: number,
        to: 'sanya.pyatkov.89@mail.ru',
        subject: 'Новая форма обратной связи',
        text: `От: ${name}\nNumber: ${number}\nСообщение: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Ошибка отправки почты:', error);
            res.status(500).json({ error: 'Ошибка отправки формы' });
        } else {
            console.log('Почта успешно отправлена:', info.response);
            res.json({ message: 'Форма успешно отправлена' });
        }
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
