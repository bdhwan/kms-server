const fs = require('fs-extra');
import * as crypto from 'crypto';

const access_key = process.env.ACCESS_KEY;
const secret_key = process.env.SECRET_KEY;
const url = process.env.KMS_URL;
const password = process.env.ENCRYPT_PASSWORD;
const iv = process.env.ENCRYPT_IV;
const file_path = process.env.ENV_FILE_PATH;

function decryptProcess(text, password, iv) {
  let encryptedText = Buffer.from(text, 'hex');
  let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(password), Buffer.from(iv));
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

const getScript = (url) => {
  return new Promise((resolve, reject) => {
    const http = require('http'),
      https = require('https');
    let client = http;
    if (url.toString().indexOf('https') === 0) {
      client = https;
    }
    client
      .get(url, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
          data += chunk;
        });
        resp.on('end', () => {
          resolve(data);
        });
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};

async function start() {
  try {
    var result = (await getScript(`${url}/${access_key}/${secret_key}`)) + '';
    const trim_data = result.replace(`"`, ``).trim();
    const data = decryptProcess(trim_data, password, iv);
    fs.writeFileSync(file_path, data);
    process.exit(0);
  } catch (error) {
    process.exit(1);
  }
}

start();
