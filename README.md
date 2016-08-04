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

----------------------------------------------------

Auto Start after change-

	npm install -g nodemon

After this, u should run the app through this command-

	nodemon --debug ./bin/www

More-

http://nodemon.io/

Run Server Autometically in backend-

https://github.com/foreverjs/forever

Add auto restart in node.js in Ubuntu-

http://askubuntu.com/questions/2368/how-do-i-set-up-a-cron-job

http://stackoverflow.com/questions/38354822/nginx-configration-for-my-nodejs-app

http://stackoverflow.com/questions/5009324/node-js-nginx-what-now?rq=1


===============================

During Production, run this-

    $env:NODE_ENV = "production"

and run this-

    cp env.json.example env.json

And then set configurations in `env.json`.

## MongoDB

Most easy way to install mongoDB-

    npm install -g mongodb

In windows, u can install with installer and config like this-

Mongo DB Start (After Installation and setting Environment variables in Windows)-

    mongod --port 27017 --dbpath 'D:\MongoDB\db'

Running MongoDB as a service (should `Run as Administrator`)-

	mongod --remove
	mongod --port 27017 --dbpath='D:\MongoDB\db' --logpath='D:\MongoDB\log\log.txt' --install
    net start MongoDB


To see log-

    tail -f D:\MongoDB\log\log.txt

----------------------------------------------------------------------

For Asynchronus Call - use `yield`-

    https://strongloop.com/strongblog/how-to-generators-node-js-yield-use-cases/

Best Option can be-

    https://github.com/techpines/express.io

