# Express.js - Start


Install Express Installer-

	npm install express-generator -g

Create Project-

	express <project_name> --hbs --git && cd <project_name> && npm install

Run the project-

	set DEBUG=<project_name>:*
	npm start

Now, code is running in-

	http://localhost:3000/

Default port is 3000.

To customize that, you can set it by-

	$env:PORT = 2222

and then run-

	npm start

Now, code is running in-

	http://localhost:2222/


	npm install mysqljs/mysql --save


https://github.com/mysqljs/mysql#escaping-query-values

Check Autometic Update-

	npm install -g npm-check-updates
	
	ncu -u

more-
https://www.npmjs.com/package/npm-check-updates

Auto Start after change-

	npm install -g nodemon

More-

http://nodemon.io/

Run Server Autometically in backend-

https://github.com/foreverjs/forever

Add auto restart in node.js in Ubuntu-

http://askubuntu.com/questions/2368/how-do-i-set-up-a-cron-job

http://stackoverflow.com/questions/38354822/nginx-configration-for-my-nodejs-app
