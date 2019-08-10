#! /bin/bash

echo -e "Importing Docs"
mongoimport --host mongodb --db uzay --drop --collection blogposts --file /samples/blogposts.json
mongoimport --host mongodb --db uzay --drop --collection commentposts --file /samples/commentposts.json
mongoimport --host mongodb --db uzay --drop --collection users --file /samples/users.json
mongoimport --host mongodb --db uzay --drop --collection usernames --file /samples/usernames.json
mongoimport --host mongodb --db uzay --drop --collection tags --file /samples/tags.json
