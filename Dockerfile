# Create a lightweight nigthwatchjs docker runner
FROM node:alpine

RUN apk add --update nodejs-npm && \
    npm install -g nightwatch && \
    rm -rf /tmp/* /root/.npm

# Copy your tests and your config to the containers
COPY . .

CMD nightwatch -c nightwatch.json