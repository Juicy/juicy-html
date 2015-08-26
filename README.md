&lt;juicy-html&gt;
==============

`<juicy-html>` is a custom element that lets you load HTML partials from JS objects and external files into your DOM. It acts more or less, as `include` statement known in many other languages. It also keep Polymer Template Binding work for your partial internals.

### External files
To load HTML from external file all you need is: 
```html
<template is="juicy-html" content="./path/to/file.html"></template>
```

### Markup provided by attribute
You can also provide markup inline via attribute. Polymer bindings are perserved for both cases.

If you have your data in JS:

```javascript
var model = {
  appdata: {
    username: "World"
  },
  html: "<h1>Hello {{ username }}</h1>" // or "./path/to/hello.html"
}
```

You can put it on screen with this:

```html
<template is="juicy-html" bind="{{ appdata }}" content="{{ html }}"></template>
```

To produce that:

```html
<h1>Hello World</h1>
```

## Demo

[Live examples](http://Juicy.github.io/juicy-html)

### Rationale

`juicy-html` exists because in [Polymer](http://www.polymer-project.org/) there is no built-in way to insert a `<template>` model variable as HTML (Polymer inserts every string as plain text).

AngularJS has a way to do it ([ngBindHtml](http://docs.angularjs.org/api/ng.directive:ngBindHtml)) so hopefully one day Polymer gets that too and this project will become obsolete.

### Features

Your HTML partials can contain:
 - regular HTML
 - inline scripts using `<script>//JS code here</script>`
 - inline styles using `<style>/*CSS code here*/</style>`
 - external stylesheets using `<link rel="stylesheet" href="path/to/file.css">`, with `href` value relative to the document
 - external scripts using `<script src="path/relative/to/main/document.js"></script>`
 - native, regular, inline `<template>` features (binding, attributes, etc.)

Of course, the 2-way data binding provided by works within your partials as desired.

Pleas note, that `<script>` and `<style>` support is handled by `<template>` itself.


## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/juicy-html/juicy-html.html">
    ```

3. Start using it!

	Load HTML partial from a string:

	```html
	<template is="juicy-html" content="{{ var }}"></template>
	<!-- where {{ var }} equals "<b>some</b> HTML" -->
	```

	Load HTML partial from a URL:

	```html
	<template is="juicy-html" content="{{ var }}"></template>
	<!-- where {{ var }} equals "./path/to/file.html", a path relative to the document that must start with / or ./ -->
	```

## Options/Attributes

Attribute    | Options       | Default          | Description
---          | ---           | ---              | ---
`content`    | *string*		 | `""`				| Safe HTML code, or path to partial to be loaded.


### Dependencies

`<juicy-html>` is dependent on [Polymer](http://www.polymer-project.org/) as a polyfill for Web Components APIs. In
future, it will be library-agnostic.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/Juicy/juicy-element/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
