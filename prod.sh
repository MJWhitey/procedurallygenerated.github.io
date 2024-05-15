rm -r ./docs
cp -f _styles_prod.css styles.css &&
next build &&
touch ./docs/.nojekyll;
