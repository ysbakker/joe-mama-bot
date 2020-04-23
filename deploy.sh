#!/bin/bash
# Deploy to vectoric-s1
HOST=docker-manager@s1.vectoric.nl
BASE=$(basename $PWD)

echo "Archiving to /tmp/$BASE.tar.gz..."
cd ..
tar --exclude="$BASE/node_modules" --exclude="$BASE/.git" -czvf /tmp/$BASE.tar.gz $BASE
cd -

echo "Copying to remote ($HOST)..."
scp /tmp/$BASE.tar.gz $HOST:~/docker-projects/

ssh -T $HOST "
cd docker-projects
echo 'unpacking archive...'
tar -xzf $BASE.tar.gz && rm $BASE.tar.gz
echo 'docker-compose up...'
docker-compose -f $BASE/docker-compose.prod.yml up -d
docker system prune -f
"
