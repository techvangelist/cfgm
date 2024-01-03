### Introduction
This project demonstrates the automation of deploying a ReactJS application on an AWS EC2 instance using Ansible. Tailored for beginners, this guide will walk you through the entire process, leveraging the Ansible playbooks found in https://github.com/rocrisp/cfgm/tree/main/ansible/playbook.


### Understanding the Key Components
- Amazon Web Services (AWS): A cloud computing platform offering an array of services including EC2 for hosting virtual servers.
- Ansible: An open-source tool for automating software provisioning, configuration management, and application deployment.
- ReactJS: A JavaScript library for building user interfaces, widely used for developing single-page web applications.

### Project Overview
Our project focuses on using Ansible to automate several key tasks:

- Setting up an AWS EC2 instance.
- Setting up DNS with AWS Route 53.
- Deploying a ReactJS application.
- Configuring a web server using Apache.

### Prerequisites
- An AWS account and basic understanding of its core services.
- Familiarity with ReactJS and its deployment process.
- Ansible installed on your local machine.
- Basic knowledge of version control with Git and GitHub.

### Deployment Process

#### EC2 Management
Provisioning of an AWS EC2 instance. This includes:

- Defining instance specifications (type, region, AMI).
- Configuring network settings and security groups.
- Establishing SSH key pairs for secure access.
- Route 53 is configured to manage the DNS for the application.
- DNS records are set up to link the domain to the EC2 instance.

#### EC2 Server Configuration
- Install git, yum-utils, device-mapper-persistent-data, lvm2, docker, httpd.
- Start services for docker, and httpd.
- Configuration of the Apache server.
- Setting up VirtualHost and proxy settings to direct web traffic to the ReactJS app.

#### Web Server Setup
The deployment of the ReactJS application:
- Clone the GitHub repository.
- Build the ReactJS application container image.
- Run the application as a Container image.


### Running the Ansible Playbook
To execute the automation, run the Ansible playbook:

````
ansible-playbook ansible/playbook/site.yml
````
This command will initiate the setup of the AWS environment, deploy the ReactJS application, configure the Apache server, and set up the DNS records.

### Accessing the Application
Post-deployment, the ReactJS application will be accessible via the configured domain. The automation ensures a seamless and error-free deployment process.

### Conclusion
By following this guide, you've learned how to automate the deployment of a ReactJS application in an AWS environment using Ansible. This approach illustrates the efficiency and reliability of using automation tools in modern cloud-based application deployment.

### Additional Learning Resources
Dive deeper into Ansible's capabilities through the Ansible Documentation.
Explore more about ReactJS from its official documentation.
Learn more about AWS services and management through the AWS Documentation.


