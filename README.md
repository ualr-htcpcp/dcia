# DCIA

## Overview

The **D**epartment **C**ontinuous **I**mprovement **A**pplication is a web application developed for our coursework in UA Little Rock's CPSC 4392 Capstone Project course.

## Team

- Justin Cypret
- Dylan Johnson
- Scott White

## Application Stack

DCIA leverages a variation of the MERN stack through the following technologies:

- NextJS: JavaScript framework that packages a ReactJS driven frontend with an ExpressJS-like backend, providing support for hybrid rendering, API endpoints, and optimized bundling.
- MongoDB Atlas: Document-based database hosted in the cloud and accessed through the Mongoose client.

## Setup

### Prerequisites

- [NodeJS and NPM package manager](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads)
- _Optional_ [Postman](https://www.postman.com/) : Useful program for testing API endpoints.
- _Optional_ : [MongoDB local installation](https://docs.mongodb.com/manual/installation/) for testing.

### IDE Plugins

The below links are for VS Code, but the equivalent plugins/extensions should exist for most IDEs.

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): JavaScript code linting.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Opinionated JavaScript formatter.

Some optional plugins that improve developer experience:

- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments): Colorize comments by their type for easy visibility.
- [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2): Color matching brackets for improved visibility.
- [Local History](https://marketplace.visualstudio.com/items?itemName=xyz.local-history) : Creates a `.history` folder in case of catastrophe.

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

### Clone Repo

1. Clone the `dcia` repository locally by using the appropriate `git` command:

   - HTTPS: `git clone https://github.com/ualr-htcpcp/dcia.git`
   - SSH: `git clone git@github.com:ualr-htcpcp/dcia.git`

2. Once the repo has been cloned, enter the directory using the command: `cd dcia`
3. Run `npm install` to install the project's dependencies.

## Running

Once the project has been installed, you can run the development server using the command `npm run dev`. This server makes use of "hot reloading" so it updates automatically after a file has been saved.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Process

### Project Board

The [Project Board](https://github.com/ualr-htcpcp/dcia/projects/1) is used to visualize our current "sprint" tasks. Most feature-related development will specify the related use case from the functional requirements.

- **To Do**: Represents tasks to be done. A task that is unassigned is up for grabs and can be claimed by assigning it to yourself.
- \*_In Progress_: Represents tasks that are actively being worked on.
- **In Review**: Represents tasks that have been deemed complete by the assignee, but requires feedback from the team before merging.
- **Done**: Represents tasks that have been completed. In the case of development tasks, this usually means the feature branch has been merged into `main`.

### Feature Development

When working on a new feature (from its associated task on the project board), that code should remain isolated from the `main` branch during development.

To start, create a feature branch for your development.

First, it is probably a good idea to check for remote changes in `main`. In your local `dcia` repository run:

```bash
git pull
```

#### Creating a branch

Then, use the command below to create your branch:

```bash
git checkout -b <branch_name>
```

This will create your branch and automatically switch your context to that branch, likely reflected by your prompt in your terminal.

#### Adding files

As you develop, make sure your files are tracked by Git:

```bash
git add <file_name>
```

You can also check the status of your branch. This command will show what files have changed, and what files are not currently being tracked:

```bash
git status
```

#### Commiting changes

When you're ready to commit your changes, create a succinct message to describe your work. All files that have been added to Git will be included:

```bash
git commit -m <your_message_here>
```

#### Push changes to remote

Finally, you can push the code to your branch:

```bash
git push -u origin <branch_name>
```

#### Draft Pull Request

Once your feature is in a usable state, you can open a draft pull request to get feedback from the team.

On the Github repository page, you
