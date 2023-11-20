## Overview

This template uses the deployment configurations for a ServiceStack .NET 8 application. The application is containerized using Docker and is set up to be automatically built and deployed via GitHub Actions. The recommended deployment target is a stand-alone Linux server running Ubuntu, with an NGINX reverse proxy also containerized using Docker, which a Docker Compose file is included in the template under the `.deploy` directory.

### Highlights
- 🌐 **NGINX Reverse Proxy**: Utilizes an NGINX reverse proxy to handle web traffic and SSL termination.
- 🚀 **GitHub Actions**: Leverages GitHub Actions for CI/CD, pushing Docker images to GitHub Container Registry and deploying them on a remote server.
- 🐳 **Dockerized ServiceStack App**: The application is containerized, with the image built using `.NET 8`.
- 🔄 **Automated Migrations**: Includes a separate service for running database migrations.

### Technology Stack
- **Web Framework**: ServiceStack
- **Language**: C# (.NET 8)
- **Containerization**: Docker
- **Reverse Proxy**: NGINX
- **CI/CD**: GitHub Actions
- **OS**: Ubuntu 22.04 (Deployment Server)



## Deployment Server Setup

To successfully host your ServiceStack applications, there are several components you need to set up on your deployment server. This guide assumes you're working on a standalone Linux server (Ubuntu is recommended) with SSH access enabled.

### Prerequisites

1. **SSH Access**: Required for GitHub Actions to communicate with your server.
2. **Docker**: To containerize your application.
3. **Docker-Compose**: For orchestrating multiple containers.
4. **Ports**: 80 and 443 should be open for web access.
5. **nginx-reverse-proxy**: For routing traffic to multiple ServiceStack applications and managing TLS certificates.

You can use any cloud-hosted or on-premises server like Digital Ocean, AWS, Azure, etc., for this setup.

### Step-by-Step Guide

#### 1. Install Docker and Docker-Compose

It is best to follow the [latest installation instructions on the Docker website](https://docs.docker.com/engine/install/ubuntu/) to ensure to have the correct setup with the latest patches.

#### 2. Configure SSH for GitHub Actions

Generate a dedicated SSH key pair to be used by GitHub Actions:

```bash
ssh-keygen -t rsa -b 4096 -f ~/.ssh/github_actions
```

Add the public key to the `authorized_keys` file on your server:

```bash
cat ~/.ssh/github_actions.pub >> ~/.ssh/authorized_keys
```

Then, add the *private* key to your GitHub Secrets as `DEPLOY_KEY` to enable GitHub Actions to SSH into the server securely.

#### 3. Set Up nginx-reverse-proxy

You should have a `docker-compose` file similar to the `nginx-proxy-compose.yml` in your repository. Upload this file to your server:

```bash
scp nginx-proxy-compose.yml user@your_server:~/
```

To bring up the nginx reverse proxy and its companion container for handling TLS certificates, run:

```bash
docker compose -f ~/nginx-proxy-compose.yml up -d
```

This will start an nginx reverse proxy along with a companion container. They will automatically watch for additional Docker containers on the same network and initialize them with valid TLS certificates.



## GitHub Repository Setup

Configuring your GitHub repository is an essential step for automating deployments via GitHub Actions. This guide assumes you have a `release.yml` workflow file in your repository's `.github/workflows/` directory, and your deployment server has been set up according to the [Deployment Server Setup](#Deployment-Server-Setup) guidelines.

### Secrets Configuration

Your GitHub Actions workflow requires the following secrets to be set in your GitHub repository:

1. **`DEPLOY_HOST`**: The hostname for SSH access. This can be either an IP address or a domain with an A-record pointing to your server.
2. **`DEPLOY_USERNAME`**: The username for SSH login. Common examples include `ubuntu`, `ec2-user`, or `root`.
3. **`DEPLOY_KEY`**: The SSH private key to securely access the deployment server. This should be the same key you've set up on your server for GitHub Actions.
4. **`LETSENCRYPT_EMAIL`**: Your email address, required for Let's Encrypt automated TLS certificates.

#### Using GitHub CLI for Secret Management

You can conveniently set these secrets using the [GitHub CLI](https://cli.github.com/manual/gh_secret_set) like this:

```bash
gh secret set DEPLOY_HOST --body="your-host-or-ip"
gh secret set DEPLOY_USERNAME --body="your-username"
gh secret set DEPLOY_KEY --bodyFile="path/to/your/ssh-private-key"
gh secret set LETSENCRYPT_EMAIL --body="your-email@example.com"
```

These secrets will populate environment variables within your GitHub Actions workflow and other configuration files, enabling secure and automated deployment of your ServiceStack applications.
