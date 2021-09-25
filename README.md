

<h2>KMS Server Docker stack example</h2>

```yaml
version: "3"
services:
  kms:
    hostname: kms_server
    image: bdhwan/kms-server:0.0.1
    environment:
      - PORT=8080
      - DB_HOST=rdsaddress.ap-northeast-2.rds.amazonaws.com
      - DB_USER=dbusername
      - DB_PASSWORD=dbuserpassword
      - DB_PORT=dbport
      - DB_DATABASE=databasename
      - ENCRYPT_PASSWORD=ayataba4aaDNxNsyibVw~hGH1ZQcYI25
      - ENCRYPT_IV=fdgffd1b3b5sat8a
    ports:
      - "8990:8080"
    volumes:
      - /etc/localtime:/etc/localtime:ro
    logging:
      driver: "json-file"
      options:
        max-size: "10MB"
        max-file: "10"  
    deploy:
      replicas: 1    
```

* you can use server database in project kms/kms_db.sql




<h2>
kms client env key
</h2>

```bash
ACCESS_KEY = access_key
SECRET_KEY = secret_key
KMS_URL = kms 서버주소
ENCRYPT_PASSWORD = encrypt PASSWORD
ENCRYPT_IV = decrypt IV
ENV_FILE_PATH = key download path 
```



<h2>
Ex) usage
</h2>

```bash

curl http://kms-server.com/get_env/access_key/secret_key

```


then you can download aes-256 encrypted key data.
You have to decrypt the key data.



```
node dist/kms/get_env.js   

```


Now you have key data and use it like


```
env-cmd -f ${ENV_FILE_PATH} pm2-docker process.yml
```


