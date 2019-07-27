# Import Sample Database to Mongo
import:
	mongoimport --db uzay --drop --collection blogposts --file samples/blogposts.json
	mongoimport --db uzay --drop --collection commentposts --file samples/commentposts.json
	mongoimport --db uzay --drop --collection users --file samples/users.json
	mongoimport --db uzay --drop --collection usernames --file samples/usernames.json
	mongoimport --db uzay --drop --collection tags --file samples/tags.json
