#! /usr/bin/env bash
set -euo pipefail
SERVER=falberdi@138.197.4.230
NODE_BIN="/home/falberdi/.nvm/versions/node/v24.16.0/bin"
REL=$(date +%Y%m%d%H%M%S)

# rm -rf dist
# docker build -f Dockerfile.build --platform linux/amd64 --output type=local,dest=./dist .
rsync -az --delete dist/ "$SERVER:/var/www/piano-melodies/releases/$REL/"
# ssh "$SERVER" "export PATH=$NODE_BIN:\$PATH \
#  && cd /var/www/piano-melodies \
#  && ln -sfnT /var/www/piano-melodies/releases/$REL current \
#  && pm2 startOrReload ecosystem.config.js --update-env \
#  && pm2 save \
#  && ls -1dt releases/* | tail -n +4 | xargs -r rm -rf"
# echo "Deployed $REL"
