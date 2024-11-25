# Getting Started with react-claims-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Generating Static Artifacts

To generate static artifacts for deployment, follow these steps:

1. Build the application:

   ```sh
   npm run build
   ```

2. This will create a build directory with the production build of your application.

Serve the static files:

You can use a static server to serve the files in the build directory. For example, you can use the serve package:
```sh
npm install -g serve
serve
```
This will start a server and serve your static files on http://localhost:5000.

Deployment
You can deploy the contents of the build directory to any static hosting service, such as:

- Netlify
- Vercel
- GitHub Pages
- Amazon S3

## Deploying Static Web Artifacts to Azure Storage Account

1. Log in to Azure

First, log in to your Azure account using the Azure CLI.

```sh
az login
```

2. Create a Resource Group

Create a resource group if you don't already have one. Replace react-claims-app with your desired resource group name and eastasia with your preferred region.

```sh
az group create --name react-claims-app --location eastasia
```

3. Create a Storage Account

Create a storage account. Replace reactclaimsapp with your desired storage account name.

```sh
az storage account create --name reactclaimsapp --resource-group react-claims-app --location eastasia --sku Standard_LRS --kind StorageV2
```

4. Enable Static Website Hosting

Enable static website hosting on the storage account.

```sh
az storage blob service-properties update --account-name reactclaimsapp --static-website --index-document index.html --404-document 404.html
```

5. Build Your React App

Build your React app to generate the static files.

```sh
npm run build
```

6. Upload Your Files

Upload the generated files from the build directory to the $web container in your storage account.

```sh
az storage blob upload-batch -d '$web' --account-name reactclaimsapp -s ./build
```

7. Ensure All Files Are Publicly Accessible

Set the permissions for the $web container to allow public access.

```sh
az storage blob set-permission --container-name '$web' --account-name reactclaimsapp --public-access blob
```

8. Get the URL of Your Static Website

Retrieve the URL where your static website is hosted.

```sh
az storage account show --name reactclaimsapp --resource-group react-claims-app --query "primaryEndpoints.web" --output tsv
```

The output will be the URL where your static website is hosted, for example: https://reactclaimsapp.z7.web.core.windows.net


