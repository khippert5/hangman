# hangman

Init application run:

npm i

## First setup
At first setup it should install flow typescript. to start the server you would run npx flow. In VS code there are a bunch of add-ons available for viewing flow errors in real time.

### Move react hooks
When developing for the repo you should ensure that your react hooks are setup so that you can not push to the repo without ensuring tested/verified code.
This ensures code consistency with more than one developer is working on the source. This also ensures better CI/CD with the globals coverage thresholds.

In the repo you will find a "git-features" folder. Copy the hooks inside this folder into your local .git/hooks location.

### Updates
The application was modified a bit to ensure responsive view for mobile. The prev set was causing issues due to overflow restrictions and set widths/heights
