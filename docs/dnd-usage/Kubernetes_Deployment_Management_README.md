---
id: Kubernetes_Deployment_Management_README
title: Kubernetes Deployment Management for Trial and Subscribed Services
sidebar_position: 6
---

# Kubernetes Deployment Management for Trial and Subscribed Services

This guide outlines the process for managing trial and subscribed deployments within a Kubernetes environment, including the cleanup of expired trial deployments and the management of node pools.

## Overview

The system differentiates between trial and subscribed deployments, automatically handling the cleanup of expired trials and ensuring subscribed services are efficiently managed across node pools.

## Prerequisites

- Kubernetes cluster
- `kubectl` configured to communicate with your cluster
- Basic understanding of Kubernetes concepts (Deployments, Namespaces, Labels, Nodes)

## Getting Started

### Warning Users

Inform users about the trial policy via the application's UI:

```
Notice: Trial servers are reset after 6 hours of inactivity. Please redeploy if necessary. No data loss will occur.
```

### Deployment Tags

Deployments are tagged according to their type and environment:

- Trial Development: `trial-dev`
- Trial Production: `trial-prod`
- Subscribed Development: `subscribed-dev`
- Subscribed Production: `subscribed-prod`

### Organizing Deployments

Deployments are organized in namespaces corresponding to their type:

- `trial`
- `subscribed`

## `kubectl` Commands

### Listing Deployments

- **All Namespaces:**

  ```bash
  kubectl get deployments --all-namespaces
  ```

- **Specific Namespace with Labels:**
  ```bash
  kubectl get deployments -n <namespace> -l <label>=<value>
  ```

### Deleting Expired Trials

- **Delete Deployment:**
  ```bash
  kubectl delete deployment <deployment-name> -n <namespace>
  ```

### Node Management

- **Label Nodes:**

  ```bash
  kubectl label nodes <node-name> <label>=<value>
  ```

- **List Nodes by Label:**
  ```bash
  kubectl get nodes -l <label>=<value>
  ```

### Namespace Management

- **Create Namespace:**
  ```bash
  kubectl create namespace <namespace-name>
  ```

### CronJob for Cleanup

- **CronJob Definition Example:**

  ```yaml
  apiVersion: batch/v1
  kind: CronJob
  metadata:
    name: cleanup-expired-trials
    namespace: default
  spec:
    schedule: "0 * * * *"
    jobTemplate:
      spec:
        template:
          spec:
            containers:
              - name: cleanup
                image: cleanup-image
                command: ["./cleanup-script"]
            restartPolicy: OnFailure
  ```

  Apply the CronJob:

  ```bash
  kubectl apply -f cronjob-file.yaml
  ```

### Monitoring and Logs

- **Deployment Logs:**
  ```bash
  kubectl logs deployment/<deployment-name> -n <namespace>
  ```

## Cluster and Resource Status

- **Cluster Info:**

  ```bash
  kubectl cluster-info
  ```

- **Resource Status:**
  ```bash
  kubectl get all -n <namespace>
  ```

## Conclusion

This guide provides the foundation for managing trial and subscribed deployments within Kubernetes, leveraging `kubectl` for deployment and node management. Adjust and expand these instructions as necessary to fit your specific infrastructure and operational needs.
