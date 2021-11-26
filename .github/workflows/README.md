# ServiceStack mix GitHub Actions
`release.yml` generated from `x mix release-ghr-vanilla`, this template in designed to help with CI deployment to a dedicated server with SSH access.

## Overview
`release.yml` is designed to work with a ServiceStack app deploying directly to a single server via SSH. A docker image is built and stored on GitHub's `ghcr.io` docker registry when a GitHub Release is created.

GitHub Actions specified in `release.yml` then copy files remotely via scp and use `docker-compose` to run the app remotely via SSH.

## Deployment server setup
To get this working, a server needs to be setup with the following:

- SSH access
- docker
- docker-compose
- ports 443 and 80 for web access of your hosted application

This can be your own server or any cloud hosted server like Digital Ocean, AWS, Azure etc. 

When setting up your server, you'll want to use a dedicated SSH key for access to be used by GitHub Actions. GitHub Actions will need the *private* SSH key within a GitHub Secret to authenticate. This can be done via ssh-keygen and copying the public key to the authorized clients on the server.

To let your server handle multiple ServiceStack applications and automate the generation and management of TLS certificates, an additional docker-compose file is provided via the `x mix` template, `nginx-proxy-compose.yml`. This docker-compose file is ready to run and can be copied to the deployment server.

For example, once copied to remote `~/nginx-proxy-compose.yml`, the following command can be run on the remote server.

```
docker-compose -f ~/nginx-proxy-compose.yml up -d
```

This will run an nginx reverse proxy along with a companion container that will watch for additional containers in the same docker network and attempt to initialize them with valid TLS certificates.

## GitHub Repository setup
The `release.yml` assumes 6 secrets have been setup.

- CR_PAT - GitHub Personal Token with read/write access to packages.
- DEPLOY_HOST - hostname used to SSH to, this can either be an IP address or subdomain with A record pointing to the server.
- DEPLOY_PORT - SSH port, usually `22`.
- DEPLOY_USERNAME - the username being logged into via SSH. Eg, `ubuntu`, `ec2-user`, `root` etc.
- DEPLOY_KEY - SSH private key used to remotely access deploy server/app host.
- LETSENCRYPT_EMAIL - Email address, required for Let's Encrypt automated TLS certificates.

These secrets can use the [GitHub CLI](https://cli.github.com/manual/gh_secret_set) for ease of creation. Eg, using the GitHub CLI the following can be set.

```bash
gh secret set CR_PAT -b"<CR_PAT, Container Registry Personal Access Token>"
gh secret set DEPLOY_HOST -b"<DEPLOY_HOST, domain or subdomain for your application and server host.>"
gh secret set DEPLOY_PORT -b"<DEPLOY_PORT, eg SSH port, usually 22>"
gh secret set DEPLOY_USERNAME -b"<DEPLOY_USERNAME, the username being logged into via SSH. Eg, `ubuntu`, `ec2-user`, `root` etc.>"
gh secret set DEPLOY_KEY -b"<DEPLOY_KEY, SSH private key used to remotely access deploy server/app host.>"
gh secret set LETSENCRYPT_EMAIL -b"<LETSENCRYPT_EMAIL, Email address for your TLS certificate generation, eg me@example.com>"
```

These secrets are used to populate variables within GitHub Actions and other configuration files.

## What's the process of `release.yml`?

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/mix/release-ghr-vanilla-diagram.png)
