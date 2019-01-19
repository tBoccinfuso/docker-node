# docker-node
Test running node inside docker

1. [Download / Install Docker](https://docs.docker.com)
2. Build image with: `sudo docker build -t node-docker-app`
3. Run app with `sudo run -p 7000:3000 -d node-docker-app`
4. Open browser to `localhost:7000`
5. Vist `/` and `/secret`
