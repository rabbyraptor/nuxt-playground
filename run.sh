echo "*** Starting DOCKER containers... ***"
docker-compose build
docker-compose up -d

echo "*** Updating node dependencies... ***"
docker-compose exec nuxtapp node -v  > .nvmrc
docker-compose exec nuxtapp yarn install

#SASS Framework Donwload from boilerplate
if [ ! -f ./assets/sass/output/frontend.scss ]; then
    echo "*** Downloading SASS Framework ***"
    docker-compose exec nuxtapp wget https://github.com/Edentic/ProjectBoilerplate-PHP7/archive/master.zip -O boilerplate.zip
    docker-compose exec nuxtapp unzip boilerplate.zip -d boilerplate
    docker-compose exec nuxtapp rm boilerplate.zip
    docker-compose exec nuxtapp cp -r boilerplate/*/sass assets/sass
    docker-compose exec nuxtapp rm -rf boilerplate
fi

echo "*** Running Gulp .. ***"
docker-compose exec nuxtapp yarn run dev