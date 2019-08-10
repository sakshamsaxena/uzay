# Uzay

[![Build Status](https://travis-ci.com/sakshamsaxena/uzay.svg?branch=master)](https://travis-ci.com/sakshamsaxena/uzay) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Uzay is a neatly written API using Express and Mongo to serve as the basic backend for a blog.

When complete, Uzay will be centered around serving perfectly neutral content which supports both favourable and unfavourable thoughts and content for a user. It encourages a user to browse a personalised feed rather than being served a feed according to their personal comfortable preference. This behaviour has proved to be fairly unhealthy and partisan promoting, which was never the true intent of the Internet.

Public feeds are much more carefully served to highlight the under-rated content in a subtle way, which would ideally promote an excellent variety of thoughts.

### Installation

* #### Prerequisites

1. [Docker](https://docs.docker.com/install/)

* #### Installing

Once you've cloned this/your forked repo, use `docker-compose` to bootstrap the environment.

```sh
# Development Version
docker-compose -f docker-compose-development.yml up --build
```

This will bootstrap your database and start Uzay.

### License

MIT