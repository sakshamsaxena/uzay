# Uzay

Uzay is a neatly written API using Express and Mongo (^3.2) to serve as the basic backend for a blog.

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
mongoimport --db uzay --collection blogposts --file samples/blogposts.json
mongoimport --db uzay --collection commentposts --file samples/commentposts.json
mongoimport --db uzay --collection users --file samples/users.json
mongoimport --db uzay --collection tags --file samples/tags.json
```

Once installed, edit the ```config.js``` suitably. 

Run the server with ```npm start```.

### Contributing

Read the [Contributing Guide](./CONTRIBUTING.md) to get started.

### License

MIT