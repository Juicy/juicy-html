# Contributing

We welcome and truly appreciate contribution in all forms - issues, pull requests, questions, or fancy examples of apps/elements build on to of your elements.

## Filing bugs

Our team heavily uses Github for all of our software management. We use Github issues to track all bugs and features.

If you find an issue, please do file it on the repository.

We love examples for addressing issues - issues with a Plunkr, [jsFiddle](http://jsfiddle.net), or [jsBin](http://jsbin.com) will be much easier for us to work on quickly. You can start with [this jsbin](http://jsbin.com/capequ/edit?html,output) which sets up the basics to demonstrate a Juicy element.

Occasionally we'll close issues if they appear stale or are too vague - please don't take this personally! Please feel free to re-open issues we've closed if there's something we've missed and they still need to be addressed.

## Developing the element

If you would like to start to fiddle with element's code, here is the flow we use.

- Make a local clone of this repo: `git clone git@github.com:Juicy/juicy-html.git`

In order to develop it locally we suggest to use [polyserve](https://npmjs.com/polyserve) tool to handle bower paths gently.

0. Go to the repo's directory: `cd juicy-html`
1. Install [bower](http://bower.io/) & [polyserve](https://npmjs.com/polyserve): `$ npm install -g bower polyserve`
2. Install local dependencies: `$ bower install`
3. Start development server `$ polyserve -p 8000`
4. Open the demo/preview: [http://127.0.0.1:8001/components/juicy-html/examples/](http://127.0.0.1:8001/components/juicy-html/examples/)
5. Open the test suite: [http://localhost:8000/components/juicy-html/test/](http://localhost:8000/components/juicy-html/test/)

## Contributing Pull Requests

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Open corresponding issue if needed
6. Submit a pull request :D


### Styleguide

`.jscs.json`/`.jscsrc`/`package.json` to be linked

## Unit tests

All Juicy custom elements projects use [`web-component-tester`](https://github.com/Polymer/web-component-tester) for unit tests.
The [`polyserve`](https://github.com/PolymerLabs/polyserve) utility is helpful for [running tests in the browser](#developing-the-element).



### Running element unit tests from CLI

To run the element unit tests from CLI, you need to:

0.  Install `web-component-tester` globally: `npm install -g web-component-tester`
1.  Clone the element repo.
2.  Install the dependencies. `bower install`
3.  Run the tests: `wct`

#### Configuring `web-component-tester`

By default, `web-component-tester` runs tests on all installed browsers. You can configure it
to run tests on a subset of available browsers, or to run tests remotely using Sauce Labs.

See the [`web-component-tester` README](https://github.com/Polymer/web-component-tester) for
information on configuring the tool.

## Releasing a new version

**The release is done from `master` branch.**

1. Make sure that the browser tests pass in Chrome, Firefox, Edge and IE. This can be done manually or using `npm run test` (see instructions above).
2. Call `git status` to verify that there are no uncommited files in the directory
3. Call `grunt bump:patch`, `grunt bump:minor` or `grunt bump:major`. This command:
 - increments the version number in the relevant files
 - commits changes to Git with the version number as the commit message
 - creates a Git tag wit the version
4. Call `git push` to push the changes to `origin master`
5. Call `git push --tags` to push the tag to `origin master`
6. Explain the changes (at least an summary of the commit log) in [GitHub Releases](https://github.com/Juicy/juicy-html/releases).
