FROM node:10.22
RUN apt-get -y update
RUN npm install -g npm
RUN npm install -g pm2
RUN npm install -g env-cmd
RUN npm install -g node-gyp typescript @nestjs/cli
RUN pm2 install pm2-logrotate
RUN pm2 set pm2-logrotate:max_size 101M
RUN npm install -g ts-node
RUN pm2 -v
WORKDIR /home

ADD . /home/giftistar-kms-server
WORKDIR /home/giftistar-kms-server

RUN ls
RUN npm install
RUN nest build

HEALTHCHECK --interval=5s --timeout=3s --retries=2000 CMD curl -f http://localhost:8080/health
EXPOSE 80 8080
ENTRYPOINT ["/bin/sh", "docker_init.sh"]
