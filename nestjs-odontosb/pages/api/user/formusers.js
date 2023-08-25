import {cadastro , verificaToken} from '../../../services/user'

import { getCookie } from 'cookies-next';

export default async function handler(req, res) {
    try {
        const token = getCookie('authorization', { req, res });
        if (!token) throw new Error('Token inválido');
        verificaToken(token);
        const newUser = await cadastro(req.body)
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json(err.message)
    }
}

