## Ember Snippets

Ember.js ES6 snippets for Atom editor (ex: ember-cli, ember-app-kit)

## Installation

Run the following command:

```sh
apm install ember-snippets
```

Then reload your Atom.


## Usage

#### Modules

- `active-adapter` ⇥
- `active-serializer` ⇥
- `adapter` ⇥
- `arr-controller` ⇥
- `component` ⇥
- `controller` ⇥
- `helper` ⇥
- `initializer` ⇥
- `mixin` ⇥
- `model` ⇥
- `object` ⇥
- `route` ⇥
- `serializer` ⇥
- `transform` ⇥
- `utility` ⇥
- `view` ⇥

Example output for `controller` ⇥

```js
import Ember from 'ember';

export default Ember.ObjectController.extend({
	// body
});
```

#### Properties

Used inside Ember objects

- `property` ⇥
- `observes` ⇥
- `actions` ⇥
- `alias` ⇥

Example output for `observes` ⇥

```js
fooChanged: function() {
	// body
}.observes('foo'),
```

#### Functions

- `find` ⇥
- `find-id` ⇥
- `logger-debug` ⇥
- `logger-error` ⇥
- `logger-info` ⇥
- `logger-log` ⇥
- `logger-warn` ⇥

Example output for `find` ⇥

```js
this.store.find('post');
```
