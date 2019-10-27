## Installation

Exercise1 runs on Reactjs with dependencies on nextjs and expressjs for server side rendering and node packages. Development is theoretically possible on any platform but requires react, node, npm. There are only one branch are maintained (master). I use the [gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) version control workflow.

To run a local development copy of frontend-assessment make a local clone of [https://github.com/ebuyco/frontend-assessment/](https://github.com/ebuyco/frontend-assessment/) then...

# Installation Instructions
In the repo on the exercises1 and Exercise2 folder . To start the application, all you need to do is run the following commands on your terminal copy then paste.

```
npm install 
or
yarn install
```

Although to make the process easier, you can simply run the app on your terminal and listen to the port 8081:

```
npm start or yarn start
npm dev or yarn dev
```

### I have also setup a cachebale response on the server using express 
The app will listen on port 4000 just run the commands on the terminal

```
yarn serve or npm serve
```

## Application structure

The application structure based on Nextjs documentation [https://github.com/zeit/next.js/tree/canary/examples, https://nextjs.org].

The bulk of the source is written in a series of interdependent ES6 modules divided into the following namespaces.

* **pages** _include all pages content on the components folder by using import from react to used all components_
* **components** _The main contents and layouts was put on these folder like styles and html and jsx on these folder also included the sass components._
* **static** _The images and fonts was include on this folder ._

### Note Bonus folder only have no packages because of the requirements based on instructions, but i included sample and explanation based on the instruction i forked from your repository