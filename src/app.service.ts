import { Injectable } from '@nestjs/common';
const password = process.env.ENCRYPT_PASSWORD;
const iv = process.env.ENCRYPT_IV;
const fs = require('fs');
const crypto = require('crypto');
@Injectable()
export class AppService {
  encryptProcss(text) {
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(password), Buffer.from(iv));
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString('hex');
  }

  decryptProcess(text) {
    let encryptedText = Buffer.from(text, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(password), Buffer.from(iv));
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  }

  get_ip(req: any) {
    let ip;
    if (req.headers['x-forwarded-for']) {
      ip = req.headers['x-forwarded-for'].split(',')[0];
    } else if (req.connection && req.connection.remoteAddress) {
      ip = req.connection.remoteAddress;
    } else {
      ip = req.ip;
    }
    return ip;
  }
}
