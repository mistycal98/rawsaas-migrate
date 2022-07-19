# MongoDB Migration Instructions

- Your somename.tar.gz file
- If mongo installed on host
  - Unzip folder `tar -xvf somename.tar.gz`
  - Restore on local `mongorestore -d somedb ./somename`
- If mongo installed in docker instance
  - List docker instances `docker ps`


  - Output 
  ```shell
    CONTAINER ID   IMAGE          COMMAND                  CREATED      STATUS       PORTS                      NAMES
    f4099a8b51ad   mongo:latest   "docker-entrypoint.s…"   7 days ago   Up 2 hours   0.0.0.0:27017->27017/tcp   rawsaas
    ```

  - Copy zip file to mongo container `docker cp ./somename.tar.gz rawsaas:/`
  - Unzip folder `tar -xvf somename.tar.gz`
  - Restore on local `mongorestore -d somedb ./somename`
