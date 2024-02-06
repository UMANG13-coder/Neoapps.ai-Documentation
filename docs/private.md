---
id: private
title: How to Increase the Capacity of Server for Microservices?
sidebar_position: 8
---

> Scaling your infrastructure is crucial for handling increased load on your microservices. Follow these steps to add more consumers and deployers.

### Step 1: Create New Droplet

1. Log in to your cloud provider's dashboard (e.g., DigitalOcean).
2. Navigate to the "Droplets" section and click "Create Droplet."
3. Choose an image (preferably one with Docker pre-installed) and select the desired size.
4. Configure additional options such as backups, SSH keys, and datacenter region.
5. Click "Create" to provision the new droplet.

### Step 2: Install Docker

> If Docker is not pre-installed:

1. Connect to your droplet via SSH.
2. Update your package manager: `sudo apt-get update`
3. Install Docker: `sudo apt install docker.io`
4. Start and enable Docker: `sudo systemctl start docker && sudo systemctl enable docker`

### Step 3: Deploy Consumer and Deployer

1. Pull your microservices' Docker images: `docker pull <your-consumer-image>` and `docker pull <your-deployer-image>`
2. Run the consumer: `docker run -d <your-consumer-image>`
3. Run the deployer: `docker run -d <your-deployer-image>`

### Monitoring and Alerts

#### Understand VM Space Usage

> Use `df -h` to check disk space usage.
> Monitor logs and temporary files: Check `/var/log` and `/tmp` for unexpected growth.

#### Monitoring CI/CD Pipeline Usage

> Integrate monitoring tools (e.g., Prometheus with Grafana) into your CI/CD pipelines to track resource usage and performance.
> Set up dashboard alerts for key metrics exceeding thresholds.

#### Setting Alerts for Scaling

- **Deployer and Consumer Scaling**: 
   - Use cloud provider or third-party monitoring services to set alerts based on CPU, memory, or request rate.
- **Hosted Agent Demand**: 
   - Monitor your CI/CD pipeline execution times and queued jobs to decide when to increase hosted agents.

#### Cleaning Up Resources

#### For Unsubscribed Clients

1. **Manual Kubernetes Cleanup**:
   - Run a cleanup pipeline manually within your CI/CD tool to remove resources (e.g., `kubectl delete ns <client-namespace>`).

2. **Automate Cleanup**:
   - Implement a webhook or an event listener within your subscription management system to trigger the cleanup pipeline upon subscription cancellation.

### SSL Renewal Process

- **Renewing SSL Certificates**

   - SSL certificates must be renewed periodically to maintain the security of your microservices.

- **Manual SSL Renewal Process**

   - Log in to your SSL certificate provider.
   - Navigate to your active certificates and select the one due for renewal.
   - Follow the provider's process for renewal, which may involve re-verifying domain ownership.
   - Once renewed, update your services with the new certificate details.

> Consider automating this process with tools like Certbot for Let's Encrypt certificates, which can automate renewals and installations.
