<h2 align="center">
  iChef - Your cooking partner :cookie:
</h2>


## :question: About the project
Recipes Mobile App where you can post your own recipe and interact (like, dislike, comment) with other peoples' recipes.<br /><br />
The purpose of this project is to put in practice the MERN development stack. And if you're wondering the heck is that, let me try to explain:<br />
***MERN*** is a JavaScript software development stack used to built hybrid applications using the following technologies:
* **MongoDB** - For constructing a database.
* **Express.js** - A JavaScript framework to facilitate the creation of APIs, routes, middlewares, etc.
* **React Native** - A framework for building native apps using *React*
* **Node.js** - For supporting the backend code, that is, the server.
<br /><br />And if you still don't get it, that's ok, you can take a look at the [detailed explanation here](https://www.geeksforgeeks.org/mern-stack/).


## :clipboard: Getting Started
* **Downloading the project** :inbox_tray: <br />
Clone this repository in a directory of your preference, but consider avoiding Desktop, otherwise your emulator may not work properly.

* **Setting up your environment** :wrench: <br />
In order to launch this app on your own computer, make sure you have installed all the necessary dependencies. Take a look at the official [react-native documentation](https://reactnative.dev/docs/environment-setup).

* **Configuring your credentials** :closed_lock_with_key: <br />
In order to properly use the app's funcionalities, you have to inform your own Mongo database credentials. For that, you can [create your MongoDB account for free here](https://www.mongodb.com/download-center).
If you already have an registered account, access the [database configuration file here](backend/src/database/index.js), replace the `<username>` and `<password>` tags in the mongoose connection string with your credentials, and save the file.

* **Launching the app** :rocket: <br />
**Windows:** Once you have your environment all set up, you can open your terminal and use the `cd` command to enter the project directory, then simply run `react-native  run-android`.<br /><br />
**Mac OS:** You can follow the same steps for windows, but change the `run` command for `react-native run-ios`


## :memo: License
This project is under MIT license. Check the file [LICENSE](LICENSE) for more information.
