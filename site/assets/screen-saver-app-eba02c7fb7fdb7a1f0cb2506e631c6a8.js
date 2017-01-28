"use strict";define("screen-saver-app/app",["exports","ember","ember/resolver","ember/load-initializers","screen-saver-app/config/environment"],function(e,n,r,t,a){var i=void 0;n.default.MODEL_FACTORY_INJECTIONS=!0,i=n.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:r.default}),(0,t.default)(i,a.default.modulePrefix),e.default=i}),define("screen-saver-app/components/app-version",["exports","ember-cli-app-version/components/app-version","screen-saver-app/config/environment"],function(e,n,r){var t=r.default.APP.name,a=r.default.APP.version;e.default=n.default.extend({version:a,name:t})}),define("screen-saver-app/controllers/array",["exports","ember"],function(e,n){e.default=n.default.Controller}),define("screen-saver-app/controllers/object",["exports","ember"],function(e,n){e.default=n.default.Controller}),define("screen-saver-app/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","screen-saver-app/config/environment"],function(e,n,r){e.default={name:"App Version",initialize:(0,n.default)(r.default.APP.name,r.default.APP.version)}}),define("screen-saver-app/initializers/export-application-global",["exports","ember","screen-saver-app/config/environment"],function(e,n,r){function t(){var e=arguments[1]||arguments[0];if(r.default.exportApplicationGlobal!==!1){var t;if("undefined"!=typeof window)t=window;else if("undefined"!=typeof global)t=global;else{if("undefined"==typeof self)return;t=self}var a,i=r.default.exportApplicationGlobal;a="string"==typeof i?i:n.default.String.classify(r.default.modulePrefix),t[a]||(t[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete t[a]}}))}}e.initialize=t,e.default={name:"export-application-global",initialize:t}}),define("screen-saver-app/router",["exports","ember","screen-saver-app/config/environment"],function(e,n,r){var t=n.default.Router.extend({location:r.default.locationType});t.map(function(){}),e.default=t}),define("screen-saver-app/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.12",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"screen-saver-app/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),r=e.createElement("h2");e.setAttribute(r,"id","title");var t=e.createTextNode("Welcome to Ember");e.appendChild(r,t),e.appendChild(n,r);var r=e.createTextNode("\n\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n");return e.appendChild(n,r),n},buildRenderNodes:function(e,n,r){var t=new Array(1);return t[0]=e.createMorphAt(n,2,2,r),t},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]]],locals:[],templates:[]}}())}),define("screen-saver-app/config/environment",["ember"],function(e){var n="screen-saver-app";try{var r=n+"/config/environment",t=e.default.$('meta[name="'+r+'"]').attr("content"),a=JSON.parse(unescape(t));return{default:a}}catch(e){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests||require("screen-saver-app/app").default.create({name:"screen-saver-app",version:"0.0.0+0d8f5f73"});