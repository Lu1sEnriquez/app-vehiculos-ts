import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

interface Credential {
  usuario: string;
  password: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = {
    usuario: 'SYSTEM',
    password: '123',
    rol: 'admin'
  };

  const data = req.body as Credential | null;

  if (data) {
    const { usuario, password } = data;

    const userPassword = user.password;
    const userRol = user.rol;
    let token;

    if (password === userPassword) {
      // Generamos el token
      token = jwt.sign(
        {
          usuario,
          userRol,
        },
        process.env.SECRET_KEY!,
        {
          expiresIn: "30 days",
        }
      );

      const serialized = serialize('token', token, {
        httpOnly: false,
        secure: false,
        sameSite: 'none',
        maxAge: 1000 * 60 * 60 * 24 * 30,
      });

      res.setHeader('Set-Cookie', serialized);
      return res.status(200).json('okey');
    } else {
      return res.status(401).json('Contraseña incorrecta');
    }
  } else {
    return res.status(400).json('Datos de usuario no proporcionados');
  }
}


  