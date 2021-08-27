# reference: https://cli.vuejs.org/guide/deployment.html#github-pages

mkdir dist
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/brayce1996/brycehuang master:gh-page
cd ../