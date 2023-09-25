import express, { json } from "express";
import cors from "cors";
import { auth_url } from "./config/url_config.js";
import { api_pkey } from "./config/config.js";
import axios from "axios";

const app = express();
app.use(json());
app.use(cors({ origin: true }));

app.post(auth_url, async (req, res) => {
    const { username } = req.body;

    try {
        const request = await axios.put(
            'https://api.chatengine.io/users/',
            {
                username: username,
                secret: username,
                first_name: username
            },
            {
                headers: { "private-key": api_pkey }
            }
        )
        return res.status(request.status).json(request.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data)
    }
});

app.listen(3001);