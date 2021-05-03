import { Request, Response } from 'express';
import request from 'request';
import { findUniqueUserByLiffIdToken, createUser } from '../models/user';
import { User } from '@prisma/client';

export const authorize = (req: Request, res: Response) => {
  const liffIDToken = req.query.liffIDToken;

  // 1 UIDを獲得
  const options = {
    url: 'https://api.line.me/oauth2/v2.1/verify',
    method: 'POST',
    json: true,
    form: {
      id_token: liffIDToken,
      client_id: process.env.CLIENT_ID,
    },
  };
  request(options, async function (error, response, body) {
    const { statusCode } = response;
    if (statusCode !== 200 || !body.sub) {
      return res.status(statusCode).json(body);
    }

    const uid = body.sub;

    // 2 DB からユーザを検索
    let user: User | null = await findUniqueUserByLiffIdToken(uid);

    // 3 DB にユーザを作成
    if (!user) {
      const data = {
        uid,
        displayName: body.name,
        profileImageUrl: body.picture,
      };
      user = await createUser(data);
    }

    // 4 ユーザ情報を返す
    res.status(200).json({
      user,
    });
  });
};
