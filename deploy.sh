#!/bin/bash
set -e

INSTANCE_IP="44.222.80.227"
SSH_KEY="$HOME/.ssh/bibeebiz-key.pem"
REMOTE_REPO="/home/ubuntu/bibeebiz"
WEB_ROOT="/var/www/html"

echo "==> Pushing to GitHub..."
git push origin main

echo "==> Pulling latest code on server..."
ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no ubuntu@$INSTANCE_IP bash << EOF
  set -e
  cd $REMOTE_REPO
  git pull origin main
  rsync -a --delete \
    --exclude='.git' \
    $REMOTE_REPO/ $WEB_ROOT/
  echo "Deploy complete. Files in $WEB_ROOT updated."
EOF

echo ""
echo "==> Done! https://$INSTANCE_IP"
