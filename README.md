&lt;x-html&gt;
==============

`<x-html>` is a custom element that lets you load HTML partials into your Web Components

If you have this:

```javascript
var model = {
  appdata: {
    username: "World"
  },
  html: "<h1>Hello {{ username }}</h1>"
}
```

You can put it on screen with this:

```html
<template is="x-html" bind="{{ appdata }}" content="{{ html }}"></template>
```

To produce that:

```html
<h1>Hello World</h1>
```

Usage examples can be found in [examples](http://puppetjs.github.io/x-html/examples/index.html).

### Rationale

`x-html` exists because in [Polymer](http://www.polymer-project.org/) there is no built-in way to insert a `<template>` model variable as HTML (Polymer inserts every string as plain text).

AngularJS has a way to do it ([ngBindHtml](http://docs.angularjs.org/api/ng.directive:ngBindHtml)) so hopefully one day Polymer gets that too and this project will become obsolete.

### Features

Your HTML partials can contain:
 - regular HTML
 - inline scripts using `<script>//JS code here</script>`
 - inline styles using `<style>/*CSS code here*/</style>`
 - external stylesheets using `<link rel="stylesheet" href="path/to/file.css">`, with `href` value relative to the document
 - external scripts using `<script src="path/relative/to/main/document.js"></script>`

Of course, the 2-way data binding provided by works within your partials as desired.

Pleas note, that `<script>` and `<style>` support is handled by `<template>` itself.

### Usage

Load HTML partial from a string:

```
<template is="x-html" content="{{ var }}"></template>
<!-- where {{ var }} equals "<b>some</b> HTML" -->
```

Load HTML partial from a URL:

```
<template is="x-html" content="{{ var }}"></template>
<!-- where {{ var }} equals "./path/to/file.html", a path relative to the document that must start with / or ./ -->
```

## Options/Attributes

Attribute    | Options       | Default          | Description
---          | ---           | ---              | ---
`content`    | *string*		 | `""`				| Safe HTML code, or path to partial to be loaded.


### Dependencies

`<x-html>` is dependent on [Polymer](http://www.polymer-project.org/) as a polyfill for Web Components APIs. In
future, it will be library-agnostic.

### Changelog

#### v0.0.20140429

- `x-html` now extends `<template>`, so use it as `<template is="x-html">`,
- Inherit from `HTMLTemplateElement.prototype`,
- Content is being added on `x-html` level (as a sibling),
- `x-html` no longer bother about `<script>`,`<style>`, and `<link type="import">` tags, it delagates this to `<template>`. So you should **be aware of execution order of inline and external scripts**.
If you still need blocking for dynamically added scripts consider [`<imported-template>`](https://github.com/PuppetJs/imported-template).

#### v0.0.20140326

- Compatibility changes for Polymer 0.2.2 (use element `templateInstance` property instead of `bindings`) (see ticket [#7](https://github.com/PuppetJs/x-html/issues/7))
- Add "web-components" keyword for [CustomElements.io](http://customelements.io/)

#### v0.0.20140221

- Compatibility changes for Polymer 0.2.0 and Canary
- Native `Node.prototype` is no longer modified

#### v0.0.20140210

- Compatibility changes for Polymer 0.1.4 and Canary (now works with native HTML Imports). See the [discussion](https://groups.google.com/d/topic/polymer-dev/pn1mhqLugVU/discussion)
- Allow [Polymer Expressions](http://www.polymer-project.org/docs/polymer/expressions.html) in partials (e.g. `<template if="{{val == 1}}">`)
- Updated `bower.json` to play well with Polymer 0.1.x (will resolve to most recent version if possible)
- Refactor some functions to be actual XHTMLPrototype methods (cleaner code)
- Add "Rationale" section to the readme

#### v0.0.20140122

- Compatibility fix with Polymer 0.1.3 (needed to change a way the container's data model is retrieved in the partial template)

#### v0.0.20131220

- Compatibility fix with Polymer 0.1.1 (only changes in the examples, no change in actual `x-html.html`)
- Moved the Polymer dependencies out of the repository for a better experience using Bower

#### v0.0.20131213

Compatibility fix with recent changes in Polymer and Chrome Canary (version of Polymer 0.1.0+ checked out using Bower and saved in examples/bower_components)

#### v0.0.20131126

Compatibility fix with recent changes in Polymer and Chrome Canary (see ticket [#1](https://github.com/PuppetJs/x-html/issues/1))

#### v0.0.20131118

Started its own repo: [PuppetJs/x-html](https://github.com/PuppetJs/x-html)
