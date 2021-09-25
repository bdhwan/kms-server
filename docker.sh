
#!/bin/bash
# version=$(docker images | awk '($1 == "bdhwan/giftistar-api-nest-oper") {print $2 += .01; exit}')
# echo 'version = bdhwan/giftistar-api-nest-oper:'$version
# docker build  --no-cache --tag bdhwan/giftistar-api-nest-oper:$version .
# docker push bdhwan/giftistar-api-nest-oper:$version


version=0.0.2
docker build --tag bdhwan/kms-server:$version .
docker push bdhwan/kms-server:$version
exit 0







