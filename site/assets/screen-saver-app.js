"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('screen-saver-app/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'screen-saver-app/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _screenSaverAppConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _screenSaverAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _screenSaverAppConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _screenSaverAppConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('screen-saver-app/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'screen-saver-app/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _screenSaverAppConfigEnvironment) {

  var name = _screenSaverAppConfigEnvironment['default'].APP.name;
  var version = _screenSaverAppConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('screen-saver-app/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('screen-saver-app/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('screen-saver-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'screen-saver-app/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _screenSaverAppConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_screenSaverAppConfigEnvironment['default'].APP.name, _screenSaverAppConfigEnvironment['default'].APP.version)
  };
});
define('screen-saver-app/initializers/export-application-global', ['exports', 'ember', 'screen-saver-app/config/environment'], function (exports, _ember, _screenSaverAppConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_screenSaverAppConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _screenSaverAppConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_screenSaverAppConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('screen-saver-app/router', ['exports', 'ember', 'screen-saver-app/config/environment'], function (exports, _ember, _screenSaverAppConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _screenSaverAppConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('videos');
  });

  exports['default'] = Router;
});
define('screen-saver-app/routes/videos', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var promise = _ember['default'].$.ajax('http://slide-show.wattydev.com/videoEmbeds.json', {
        method: 'GET'
      });

      promise = promise['catch'](function () {
        return _ember['default'].RSVP.resolve([{
          embed: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/rnI5iwsyM9U\" frameborder=\"0\" allowfullscreen></iframe>",
          duration: 239
        }]);
      });

      return promise;
    }
  });
});
define("screen-saver-app/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 10
          }
        },
        "moduleName": "screen-saver-app/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("screen-saver-app/templates/videos", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "screen-saver-app/templates/videos.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('screen-saver-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'screen-saver-app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("screen-saver-app/app")["default"].create({"name":"screen-saver-app","version":"0.0.0+8f7f6730"});
}

/* jshint ignore:end */
//# sourceMappingURL=screen-saver-app.map