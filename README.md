# Uzay

Uzay is a neatly written API using Express and Mongo (^3.2) to serve as the basic backend for my personal blog.

### Features

Here's a list of some features included in the bundle :

* __Highly modular__ : All code is written neatly as separate independent modules, providing high flexibility for debugging and testing.
* __Highly anonymous__ : No Passport or any similar policies used to authenticate users. Usage of alias is encouraged, however, a working email is also required once to avoid bullshit.
* __Highly secure__ : A single passphrase heavily encrypted assures that Bloggers identity remains safe and with the Blogger only.
* __User Friendly Install__ : Post Install Script helps you set up the passphrase in the same go, for once and for all. No manually editing of the files required. Deploy ahoy!
* __Minimalistic Admin Page__ : The Admin Page (/) provides a simple yet attractive UI where you can write your blog post.
* __Accept Public Upvotes__ : Because at times, we just need to say a simple "Thank You!". Why log into whatever ? Just say! This does exactly that.

And many more !

### Installation

You can use this for your own purposes as well. Fork this repository right away!

Also, since Uzay uses Mongo DB, you must have it [installed](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-linux/) on your sytsem. Once installed, run the `mongod` service in your shell, and then follow the steps below.

```
git clone https://github.com/YOUR_USERNAME/uzay.git
cd uzay
npm install
```

That's it really ! It'll install, configure, and deploy too in the same go !

### License

MIT