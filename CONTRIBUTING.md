# A Guide on How to Contribute to Uzay

## Development Setup and Guidelines

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
8. Right before committing changes, run `grunt` to check code quality.
9. Also, to stay up to date with my changes, you can do so by `git pull upstream WIP_v1.0`. 
10. If `grunt` didn't point out any issues, commit away! Keep your feature branch synced to GitHub. 
11. When the feature is complete, open a PR!

That's it!

## Understanding Architecture

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

### Request/Response Cycle

TBD

### Design Philosophy

TBD

## Roadmap

TBD