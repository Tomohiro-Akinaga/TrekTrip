import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export default async function POST(req: NextRequest) {
  const transporter = nodemailer.createTransport({
    host: "t.akinaga@extone.co.jp",
    port: 587,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASSWORD,
    },
  });

  const toHostMailData = {
    from: "○○○@gmail.com", // 送信元
    to: "○○○@gmail.com", // 送信先
    subject: `【お問合せ】様より`, // タイトル
    text: `Send from`,
    html: `
    <p>【名前】</p>
    <p>【メッセージ内容】</p>
    `,
  };

  transporter.sendMail(toHostMailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
}
