cp -f _styles_github.css styles.css &&
export NEXT_PUBLIC_DOMAIN='https://mjwhitey.github.io' &&
export NEXT_PUBLIC_BASE='/procedurallygenerated.github.io' &&
next build &&
touch ./docs/.nojekyll;
