#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
<<<<<<< HEAD
git remote add origin git@gitee.com:frankfang/morney-13-website.git &&
git push -u origin master -f
=======
git branch -M main &&
git remote add origin git@github.com:Nevermore98/react-account-website.git &&
git push -u origin main -f
>>>>>>> temp
cd -
