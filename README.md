# twitter-app
Twitter-like application using Java back end (spring MVC, spring data JPA, MySQL) and Angular front end

# MySQL Set Up
MySQL needs to be set up with the following settings before being able to run the application:
Port: 3306
Username: root
Password: password
A SQL schema is provided to create the database. Create All of the passwords have been encyrpted using B-crypt.

#NPM Install
The twitter front end requires `npm install` for node_module imports before running.

# Development Server
1. To run the back end, run TwitterApplication.java as a Java Application in an IDE.
2. To run the front end, run `ng serve` in the terminal or in a cmd prompt window while at the front end directory: ..\twitter-app\twitter-front-end
3. Navigate to `http://localhost:4200/`
4. Browser will automatically navigate to sign in page. Sign in using username `kenji` and password `secret123`
5. Alternatively, create a new account by browsing to the sign up page

# Application Features
1. Create and delete users
2. Login to existing users
3. Post tweet messages
4. Follow and unfollow other users

## To Do List
1. Add login errors when user submits incorrect information
2. Retweet feature
3. CSS to improve visuals
4. Profile picture functionality
