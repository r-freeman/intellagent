# https://gist.github.com/mihow/9c7f559807069a03e302605691f85572
if [ -f .env ]; then
    export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
fi

seed -u $LOCAL_URI --drop-collections ./seeders