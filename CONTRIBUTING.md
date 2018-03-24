# A Guide on How to Contribute to Uzay

## 1. Development Setup and Guidelines

### Code Consistency

Grunt is configured to run style checks and code linting. Before committing, always make sure that you've run `grunt` once. If you've not used it before, you might need to install `grunt-cli` globally via NPM using `npm i -g grunt-cli`.

### Workflow

Contributors are requested to work only on their own forked clones of `sakshamsaxena/uzay`, and submit neat PRs after developing features or applying fixes. Here is a step by step guide on how to do that :

1. Fork `sakshamsaxena/uzay`. Now you've your own clone at `YOUR_USERNAME/uzay`.
2. Clone it locally by `git clone https://github.com/YOUR_USERNAME/uzay.git --branch WIP_v1.0`
3. `npm install` to get all dependencies.
4. Import database collections as mentioned in README.
5. Add an `upstream` remote in your repository by `git remote add upstream https://github.com/sakshamsaxena/uzay.git`. 
6. Checkout a new feature branch by `git checkout -b FEATURE_NAME`.
7. Hack away!
8. Write tests if it's a new feature! Run tests with `npm test` or `mocha`.
9. Right before committing changes, run `grunt` to check code quality.
10. Also, to stay up to date with my changes, you can do so by `git pull upstream WIP_v1.0`. 
11. If `grunt` didn't point out any issues, commit away! Keep your feature branch synced to GitHub. 
12. When the feature is complete, open a PR!

That's it!

## 2. Understanding Architecture

### Prerequisites

To understand the discussion which follows, as well as to be able to smoothly contribute to the project, you must be familiar with the following concepts :

1. Non-Relational Data Representation in MongoDB.
2. Concept of Modules in Node and Modular Pattern.
3. JavaScript Promises.
4. Basic Components of a Web Server : 
	1. Middlewares
	2. Routing
	3. Static and Dynamic Resources
5. REST Architecture
6. TDD/BDD

### Design Philosophy

Uzay (_uzz-aye_) is built on Node.js with Express as the bare framework, and MogoDB as the database engine with Mongoose as it's ODM.

MongoDB was chosen over Relational Databases like MySQL due to it's natural compatibility with Node.js as well as it's trait of allwing to use a structure which the application gels with most. Even though in our current design, it is fairly normalised like Relational Databases, yet, it is performed to the extent necessary to keep the application, which is aimed to be highly configurable, flow as smooth as possible. Due to this inherent flexibility of the application, MongoDB was used to utilise advantages of both NoSQL DBs as well as that of RDBMSs practices.

Mongoose follows a convention to represent a MongoDB Collection as a Schema. Mongoose Models are then created using this Schema which creates an interface to interact with that Collection. Uzay contains it's own set of "Models" which defines custom operations which are performed on each Collection.

All API endpoints are designed to be RESTful and represent resources in semantic URLs. All the endpoints use Models to obtain the necessary data as is. This is then consumed by a "Payload Generator" which uses this raw data from database and return a presentable JSON response, which is finally sent to the client.

Security layer can be easily plugged in via "middlewares" to each endpoint, as per case.

As a simple blog engine, Uzay can still scale well horizontally, mainly due to it's inheritance from Node.js and MongoDB's scaling capabilities. Further, since security layer is a "pluggable" service, it can scale independently without affecting existing architecture. MongoDB's Collections are normalised enough to act as the source of truth for any extra new analytics services with a different set of database, which still won't affect the core application's performance.

Finally, best practices in development process ensures least TTM (Time To Market) with quality code.

## 3. Roadmap

* Provide internal structure to Models
* Provide internal structure to Payload Generators
* Write Pending Routes as per TDD
* Set up a CI
* Write a security layer