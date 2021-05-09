# https://gist.github.com/mihow/9c7f559807069a03e302605691f85572
if [ -f .env ]; then
  # shellcheck disable=SC2046
  export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
fi

# shellcheck disable=SC2086
# shellcheck disable=SC2077
if [[ $1 == "dev" || $1 == "" ]]; then
  MONGO_URI=$MONGO_LOCAL_URI
else
  MONGO_URI=$MONGO_ATLAS_URI
fi

./node_modules/.bin/seed -u "$MONGO_URI" --drop-collections ./server/seeders
