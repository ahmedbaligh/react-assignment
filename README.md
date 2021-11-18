# GitHub Public Repos

This project allows you to log in using GitHub to view an infinitely scrollable list of your public repositories. You can also add comments to each of your repos.

## Getting started

Make sure to have `node` and `yarn` installed.

### Installing Dependencies

`cd` into the project's root directory and run:

```bash
yarn
```

### Setting up the API

This project uses the GitHub API, to be able to run the project, see instructions listed [here](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app).

**_Note: For this example, while creating the OAuth app, you can set your Homepage URL to [http://localhost:3000/](http://localhost:3000/) and Authorization callback URL to [http://localhost:3000/signin](http://localhost:3000/signin), if you are running your app locally._**

Now create a `.env.local` file in the root directory of the project and inside it set the following:

```env
REACT_APP_CLIENT_ID=<Your GitHub Client ID>
REACT_APP_CLIENT_SECRET=<Your GitHub Client Secret>
REACT_APP_REDIRECT_URL=http://localhost:3000/signin
PROXY_PORT=8000
REACT_APP_PROXY_URL=http://localhost:8000/authenticate
```

### Running the App

Run the proxy server by executing the following in the root directory:

```bash
node ./server
```

Now to the run the React server, run (in separate shell):

```bash
yarn start
```

The app should now be running at [localhost:3000](http://localhost:3000/).
