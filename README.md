# Uzay

Uzay is a neatly written API using Express and Mongo (^3.2) to serve as the basic backend for my personal blog.

### Installation

You can use this for your own purposes as well. Fork this repository right away!

Also, since Uzay uses Mongo DB, you must have it [installed](https://docs.mongodb.com/manual/installation/) on your sytsem. Once installed, run the `mongod` service in your shell, and then follow the steps below.

```
git clone https://github.com/YOUR_USERNAME/uzay.git
cd uzay
npm install
mongoimport --db uzay --collection blogposts --file samples/blogposts.json
mongoimport --db uzay --collection commentposts --file samples/commentposts.json
mongoimport --db uzay --collection users --file samples/users.json
mongoimport --db uzay --collection tags --file samples/tags.json
```

Once installed, edit the ```config.js``` suitably. 

Run the server with ```npm start```.

### License

MIT