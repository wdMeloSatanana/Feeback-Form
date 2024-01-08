FROM node:18.16.1  

 
WORKDIR /app
COPY . .
# APM 
# WORKDIR /usr/src/app/apm
# RUN curl -L -O https://artifacts.elastic.co/downloads/beats/elastic-agent/elastic-agent-8.11.3-linux-x86_64.tar.gz


# APM 
#WORKDIR /usr/src/app/apm

# ja esta baixado
# RUN tar xzvf elastic-agent-8.11.3-linux-x86_64.tar.gz
#RUN cp elastic-agent.yml elastic-agent-8.11.3-linux-x86_64/elastic-agent.yml


WORKDIR /app
RUN npm install

