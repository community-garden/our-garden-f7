## Setup

### Git-Server

To setup a git-server you can follow [this instructions](https://git-scm.com/book/en/v2/Git-on-the-Server-Setting-Up-the-Server).

The ci expects the live-system to be at `deploy-pergola@live.pergola.gra.one:~/live/$REPO`

To be able to deploy, the user needs be added to group `docker`:

```
adduser deploy-pergola docker
```

### Repositories

We don't use bare-repositories, so the Dockerbuild has direct access to the repos content.
Pushing into the repo requires the following setting:

```
cd ~/live
git init frontend
cd frontend
git config receive.denyCurrentBranch ignore
```

### Git-Hooks

Copy, don't link!

```
cp frontend/.circleci/deployment/hooks/post-receive frontend/.git/hooks/
```

### Docker-compose

For security-reasons we don't allow git-users to alter the docker-compose.yml and the environment-variables. Instead copy the files in the directory above the repositories:

```
cd ~/live
cp frontend/.circleci/deployment/docker-compose.yml .
cp frontend/.circleci/live.env .
```