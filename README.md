# Uzay

Uzay is a neatly written API using Express and Mongo (^3.2) to serve as the basic backend for a blog.

Uzay is centered around serving a perfectly neutral content which supports both favourable and unfavourable thoughts and content for a user. It encourages a user to browse a personalised feed rather than being served a feed according to their personal comfortable preference. This behaviour has proved to be fairly unhealthy and partisan promoting, which was never the true intent of the Internet.

Public feeds are much more carefully served to highlight the under-rated content in a subtle way, which would ideally promote an excellent variety of thoughts.

### Installation

* #### Prerequisites

1. [Node.js](https://nodejs.org/en/download/)
2. [MongoDB](https://docs.mongodb.com/manual/installation/)
3. `mongod` service running in your shell/background.
4. [Nodemon](https://www.npmjs.com/package/nodemon)

* #### Installing

Once you've cloned this/your forked repo, follow the steps below.

```
npm install
mongoimport --db uzay --drop --collection blogposts --file samples/blogposts.json
mongoimport --db uzay --drop --collection commentposts --file samples/commentposts.json
mongoimport --db uzay --drop --collection users --file samples/users.json
mongoimport --db uzay --drop --collection tags --file samples/tags.json
```

For Windows Users, `mongod` or `mongoimport` won't be added to the PATH by default. So, instead, you may have to mention full path to the executable, like `"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe"`. Argument patterns would remain exactly the same.

Once installed, edit the ```config.js``` suitably. 

Run the server with ```npm start```.

### Contributing

Read the [Contributing Guide](./CONTRIBUTING.md) to get started.

### License

MIT