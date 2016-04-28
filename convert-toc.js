nameToId = {
  "Meteor.isClient": "meteor_isclient",
  "Meteor.isServer": "meteor_isserver",
  "Meteor.startup": "meteor_startup",
  "Meteor.users": "meteor_users",
  "Tracker.autorun": "tracker_autorun",
  "Mongo.Collection#find": "find",
  "Meteor.status": "meteor_status",
  "Meteor.user": "meteor_user",
  "Meteor.userId": "meteor_userid",
  "Meteor.loggingIn": "meteor_loggingin",
  "Mongo.Cursor#observe": "observe",
  "Mongo.Cursor#observeChanges": "observe_changes",
  "Subscription#added": "publish_added",
  "Subscription#changed": "publish_changed",
  "Subscription#removed": "publish_removed",
  "Subscription#ready": "publish_ready",
  "Meteor.Error": "meteor_error",
  "Meteor.onConnection": "meteor_onconnection",
  "Mongo.Collection": "mongo_collection",
  "Mongo.Collection#insert": "insert",
  "Mongo.Collection#update": "update",
  "Mongo.Collection#remove": "remove",
  "Meteor.reconnect": "meteor_reconnect",
  "Meteor.methods": "meteor_methods",
  "Meteor.disconnect": "meteor_disconnect",
  "DDP.connect": "ddp_connect",
  "Mongo.ObjectID": "mongo_object_id",
  "Mongo.Collection#allow": "allow",
  "Meteor.publish": "meteor_publish",
  "Mongo.Collection#deny": "deny",
  "Mongo.Collection#upsert": "upsert",
  "Mongo.Cursor#forEach": "foreach",
  "Mongo.Cursor#map": "map",
  "Mongo.Cursor#fetch": "fetch",
  "EJSON.equals": "ejson_equals",
  "Mongo.Collection#findOne": "findone",
  "Session.get": "session_get",
  "Session.set": "session_set",
  "Subscription#userId": "publish_userId",
  "DDPCommon.MethodInvocation#userId": "method_userId",
  "AccountsClient": "accountsclient",
  "AccountsServer": "accountsserver",
  "Accounts.verifyEmail": "accounts_verifyemail",
  "Accounts.forgotPassword": "accounts_forgotpassword",
  "Accounts.createUser": "accounts_createuser",
  "AccountsCommon#userId": "accounts_userid",
  "AccountsCommon#user": "accounts_user",
  "AccountsCommon#config": "accounts_config",
  "AccountsCommon#onLogin": "accounts_onlogin",
  "AccountsCommon#onLoginFailure": "accounts_onloginfailure",
  "AccountsClient#loggingIn": "accounts_loggingin",
  "AccountsServer#validateLoginAttempt": "accounts_validateloginattempt",
  "AccountsServer#validateNewUser": "accounts_validatenewuser",
  "Accounts.setPassword": "accounts_setpassword",
  "Accounts.sendEnrollmentEmail": "accounts_sendenrollmentemail",
  "AccountsServer#onCreateUser": "accounts_oncreateuser",
  "Accounts.sendResetPasswordEmail": "accounts_sendresetpasswordemail",
  "Accounts.resetPassword": "accounts_resetpassword",
  "Accounts.sendVerificationEmail": "accounts_sendverificationemail",
  "Accounts.emailTemplates": "accounts_emailtemplates",
  "Accounts.onResetPasswordLink": "Accounts-onResetPasswordLink",
  "Accounts.onEnrollmentLink": "Accounts-onEnrollmentLink",
  "Accounts.onEmailVerificationLink": "Accounts-onEmailVerificationLink",
  "Tracker.flush": "tracker_flush",
  "Tracker.afterFlush": "tracker_afterflush",
  "Tracker.active": "tracker_active",
  "Tracker.Dependency#depend": "dependency_depend",
  "Tracker.onInvalidate": "tracker_oninvalidate",
  "Tracker.Computation#onInvalidate": "computation_oninvalidate",
  "Tracker.Computation#onStop": "computation_onstop",
  "Tracker.Computation#stop": "computation_stop",
  "Tracker.currentComputation": "tracker_currentcomputation",
  "Session.equals": "session_equals",
  "EJSON.newBinary": "ejson_new_binary",
  "EJSON.addType": "ejson_add_type",
  "DDPCommon.MethodInvocation#unblock": "method_unblock",
  "Accounts.ui.config": "accounts_ui_config",
  "Meteor.settings": "meteor_settings",
  "undefined": "meteorpublishforarch",
  "Meteor.wrapAsync": "meteor_wrapasync",
  "Meteor.absoluteUrl": "meteor_absoluteurl",
  "Meteor.release": "meteor_release",
  "Subscription#onStop": "publish_onstop",
  "Subscription#error": "publish_error",
  "Subscription#stop": "publish_stop",
  "Subscription#connection": "publish_connection",
  "DDPCommon.MethodInvocation#setUserId": "method_setUserId",
  "DDPCommon.MethodInvocation#isSimulation": "method_issimulation",
  "DDPCommon.MethodInvocation#connection": "method_connection",
  "Mongo.Cursor#count": "count",
  "Session.setDefault": "session_set_default",
  "AccountsClient#logout": "accounts_logout",
  "AccountsClient#logoutOtherClients": "accounts_logoutotherclients",
  "Meteor.logout": "meteor_logout",
  "Meteor.logoutOtherClients": "meteor_logoutotherclients",
  "Meteor.loginWithPassword": "meteor_loginwithpassword",
  "Accounts.changePassword": "accounts_changepassword",
  "Meteor.setTimeout": "meteor_settimeout",
  "Meteor.setInterval": "meteor_setinterval",
  "Meteor.clearTimeout": "meteor_cleartimeout",
  "Meteor.clearInterval": "meteor_clearinterval",
  "Tracker.nonreactive": "tracker_nonreactive",
  "Tracker.Computation#invalidate": "computation_invalidate",
  "Tracker.Computation#stopped": "computation_stopped",
  "Tracker.Computation#invalidated": "computation_invalidated",
  "Tracker.Computation#firstRun": "computation_firstrun",
  "Tracker.Dependency#changed": "dependency_changed",
  "Tracker.Dependency#hasDependents": "dependency_hasdependents",
  "EJSON.parse": "ejson_parse",
  "EJSON.stringify": "ejson_stringify",
  "EJSON.fromJSONValue": "ejson_from_json_value",
  "EJSON.toJSONValue": "ejson_to_json_value",
  "EJSON.clone": "ejson_clone",
  "EJSON.isBinary": "ejson_is_binary",
  "HTTP.call": "http_call",
  "Meteor.isCordova": "meteor_iscordova",
  "Template#events": "template_events",
  "Template#helpers": "template_helpers",
  "Template#rendered": "template_rendered",
  "Template#created": "template_created",
  "Template#destroyed": "template_destroyed",
  "Template#onRendered": "template_onRendered",
  "Template#onCreated": "template_onCreated",
  "Template#onDestroyed": "template_onDestroyed",
  "Blaze.TemplateInstance#findAll": "template_findAll",
  "Blaze.TemplateInstance#$": "template_$",
  "Blaze.TemplateInstance#find": "template_find",
  "Blaze.TemplateInstance#firstNode": "template_firstNode",
  "Blaze.TemplateInstance#lastNode": "template_lastNode",
  "Blaze.TemplateInstance#data": "template_data",
  "Blaze.TemplateInstance#autorun": "template_autorun",
  "Blaze.TemplateInstance#view": "template_view",
  "Template.registerHelper": "template_registerhelper",
  "Template.instance": "template_instance",
  "Template.currentData": "template_currentdata",
  "Template.parentData": "template_parentdata",
  "Template.body": "template_body",
  "ReactiveVar": "reactivevar",
  "ReactiveVar#get": "reactivevar_get",
  "ReactiveVar#set": "reactivevar_set",
  "HTTP.get": "http_get",
  "HTTP.post": "http_post",
  "HTTP.put": "http_put",
  "HTTP.del": "http_del",
  "Email.send": "email_send",
  "Assets.getText": "assets_getText",
  "Assets.getBinary": "assets_getBinary",
  "Blaze.render": "blaze_render",
  "Blaze.renderWithData": "blaze_renderwithdata",
  "Blaze.View": "blaze_view",
  "Blaze.remove": "blaze_remove",
  "Blaze.getData": "blaze_getdata",
  "Blaze.toHTML": "blaze_tohtml",
  "Blaze.toHTMLWithData": "blaze_tohtmlwithdata",
  "Blaze.currentView": "blaze_currentview",
  "Blaze.getView": "blaze_getview",
  "Blaze.With": "blaze_with",
  "Blaze.If": "blaze_if",
  "Blaze.Unless": "blaze_unless",
  "Blaze.Each": "blaze_each",
  "Blaze.Template": "blaze_template",
  "Blaze.isTemplate": "blaze_istemplate",
  "Meteor.subscribe": "meteor_subscribe",
  "Meteor.call": "meteor_call",
  "Meteor.apply": "meteor_apply",
  "PackageAPI#versionsFrom": "pack_versions",
  "PackageAPI#imply": "pack_api_imply",
  "PackageAPI#export": "pack_export",
  "PackageAPI#addFiles": "pack_addFiles",
  "PackageAPI#use": "pack_use",
  "Package.onUse": "pack_onUse",
  "Meteor.loginWith<ExternalService>": "meteor_loginwithexternalservice",
  "EJSON.CustomType#typeName": "ejson_type_typeName",
  "EJSON.CustomType#toJSONValue": "ejson_type_toJSONValue",
  "EJSON.CustomType#clone": "ejson_type_clone",
  "EJSON.CustomType#equals": "ejson_type_equals",
  "Match.test": "match_test",
  "Template.dynamic": "template_dynamic",
  "currentUser": "template_currentuser",
  "loggingIn": "template_loggingin"
};

var TOC = [
  [
    "Meteor Guide",
  ],

  "API", [
    "Core", [
      "Meteor.isClient",
      "Meteor.isServer",
      "Meteor.isCordova",
      { name: "Meteor.isDevelopment", id: "Meteor-isDevelopment" },
      { name: "Meteor.isProduction", id: "Meteor-isProduction" },
      "Meteor.startup",
      "Meteor.wrapAsync",
      "Meteor.defer",
      "Meteor.absoluteUrl",
      "Meteor.settings",
      "Meteor.release"
    ],

    "pubsub", [
      "Meteor.publish", [
        {instance: "this", name: "userId", id: "publish_userId"},
        {instance: "this", name: "added", id: "publish_added"},
        {instance: "this", name: "changed", id: "publish_changed"},
        {instance: "this", name: "removed", id: "publish_removed"},
        {instance: "this", name: "ready", id: "publish_ready"},
        {instance: "this", name: "onStop", id: "publish_onstop"},
        {instance: "this", name: "error", id: "publish_error"},
        {instance: "this", name: "stop", id: "publish_stop"},
        {instance: "this", name: "connection", id: "publish_connection"}
      ],
      "Meteor.subscribe",
      {name: "DDPRateLimiter", id: "ddpratelimiter"}
    ],

    {name: "Methods", id: "methods_header"}, [
      "Meteor.methods", [
        {instance: "this", name: "userId", id: "method_userId"},
        {instance: "this", name: "setUserId", id: "method_setUserId"},
        {instance: "this", name: "isSimulation", id: "method_issimulation"},
        {instance: "this", name: "unblock", id: "method_unblock"},
        {instance: "this", name: "connection", id: "method_connection"}
      ],
      "Meteor.Error",
      "Meteor.call",
      "Meteor.apply",
      {name: "DDPRateLimiter", id: "ddpratelimiter"}
    ],

    {name: "Check", id: "check_package"}, [
      "check",
      "Match.test",
      {name: "Match patterns", style: "noncode"}
    ],

    {name: "connections", id: "connections"}, [
      "Meteor.status",
      "Meteor.reconnect",
      "Meteor.disconnect",
      "Meteor.onConnection",
      "DDP.connect"
    ],

    {name: "Collections", id: "collections"}, [
      "Mongo.Collection", [
        {instance: "collection", name: "find"},
        {instance: "collection", name: "findOne"},
        {instance: "collection", name: "insert"},
        {instance: "collection", name: "update"},
        {instance: "collection", name: "upsert"},
        {instance: "collection", name: "remove"},
        {instance: "collection", name: "allow"},
        {instance: "collection", name: "deny"},
        {instance: "collection", name: "rawCollection",
         id: "Mongo-Collection-rawCollection"},
        {instance: "collection", name: "rawDatabase",
         id: "Mongo-Collection-rawDatabase"}
      ],

      "Mongo.Cursor", [
        {instance: "cursor", name: "forEach"},
        {instance: "cursor", name: "map"},
        {instance: "cursor", name: "fetch"},
        {instance: "cursor", name: "count"},
        {instance: "cursor", name: "observe"},
        {instance: "cursor", name: "observeChanges", id: "observe_changes"}
      ],
      {type: "spacer"},
      {name: "Mongo.ObjectID", id: "mongo_object_id"},
      {type: "spacer"},
      {name: "Selectors", style: "noncode"},
      {name: "Modifiers", style: "noncode"},
      {name: "Sort specifiers", style: "noncode"},
      {name: "Field specifiers", style: "noncode"}
    ],

    "Session", [
      "Session.set",
      {name: "Session.setDefault", id: "session_set_default"},
      "Session.get",
      "Session.equals"
    ],

    {name: "Accounts", id: "accounts_api"}, [
      "Meteor.user",
      "Meteor.userId",
      "Meteor.users",
      "Meteor.loggingIn",
      "Meteor.logout",
      "Meteor.logoutOtherClients",
      "Meteor.loginWithPassword",
      {name: "Meteor.loginWith<Service>", id: "meteor_loginwithexternalservice"},
      {type: "spacer"},

      {name: "{{currentUser}}", id: "template_currentuser"},
      {name: "{{loggingIn}}", id: "template_loggingin"},
      {type: "spacer"},

      "Accounts.ui.config"
    ],

    {name: "Accounts-multi", id: "advanced_accounts_api"}, [
      "AccountsClient",
      "AccountsServer",
      {type: "spacer"},

      { name: "AccountsCommon#userId", id: "accounts_userid" },
      { name: "AccountsCommon#user", id: "accounts_user" },
      { name: "AccountsCommon#config", id: "accounts_config" },
      { name: "AccountsCommon#onLogin", id: "accounts_onlogin" },
      { name: "AccountsCommon#onLoginFailure", id: "accounts_onloginfailure" },
      {type: "spacer"},

      { name: "AccountsClient#loggingIn", id: "accounts_loggingin" },
      { name: "AccountsClient#logout", id: "accounts_logout" },
      { name: "AccountsClient#logoutOtherClients", id: "accounts_logoutotherclients" },
      {type: "spacer"},

      { name: "AccountsServer#onCreateUser",
        id: "accounts_oncreateuser" },
      { name: "AccountsServer#validateLoginAttempt",
        id: "accounts_validateloginattempt" },
      { name: "AccountsServer#validateNewUser",
        id: "accounts_validatenewuser" },
    ],

    {name: "Passwords", id: "accounts_passwords"}, [
      "Accounts.createUser",
      {type: "spacer"},

      {name: "Accounts.setUsername", id: "Accounts-setUsername"},
      {name: "Accounts.addEmail", id: "Accounts-addEmail"},
      {name: "Accounts.removeEmail", id: "Accounts-removeEmail"},
      {name: "Accounts.verifyEmail", id: "accounts_verifyemail"},
      {name: "Accounts.findUserByUsername", id: "Accounts-findUserByUsername"},
      {name: "Accounts.findUserByEmail", id: "Accounts-findUserByEmail"},
      {type: "spacer"},

      "Accounts.changePassword",
      "Accounts.forgotPassword",
      "Accounts.resetPassword",
      "Accounts.setPassword",
      {type: "spacer"},

      "Accounts.sendResetPasswordEmail",
      "Accounts.sendEnrollmentEmail",
      "Accounts.sendVerificationEmail",
      {type: "spacer"},

      {name: "Accounts.onResetPasswordLink", id: "Accounts-onResetPasswordLink"},
      {name: "Accounts.onEnrollmentLink", id: "Accounts-onEnrollmentLink"},
      {name: "Accounts.onEmailVerificationLink", id: "Accounts-onEmailVerificationLink"},
      {type: "spacer"},

      "Accounts.emailTemplates"
    ],

    {name: "Templates", id: "templates_api"}, [
      {prefix: "Template", instance: "myTemplate", id: "templates_api"}, [
        {name: "events", id: "template_events"},
        {name: "helpers", id: "template_helpers"},
        {name: "onRendered", id: "template_onRendered"},
        {name: "onCreated", id: "template_onCreated"},
        {name: "onDestroyed", id: "template_onDestroyed"}
      ],
      {name: "Template instances", id: "template_inst"}, [
        {instance: "template", name: "findAll", id: "template_findAll"},
        {instance: "template", name: "$", id: "template_$"},
        {instance: "template", name: "find", id: "template_find"},
        {instance: "template", name: "firstNode", id: "template_firstNode"},
        {instance: "template", name: "lastNode", id: "template_lastNode"},
        {instance: "template", name: "data", id: "template_data"},
        {instance: "template", name: "autorun", id: "template_autorun"},
        {instance: "template", name: "subscribe", id: "Blaze-TemplateInstance-subscribe"},
        {instance: "template", name: "view", id: "template_view"}
      ],
      "Template.registerHelper",
      "Template.instance",
      "Template.currentData",
      "Template.parentData",
      "Template.body",
      {name: "{{> Template.dynamic}}", id: "template_dynamic"},
      {type: "spacer"},
      {name: "Event maps", style: "noncode"},
      {name: "Spacebars", style: "noncode"}
    ],
    "Blaze", [
      "Blaze.render",
      "Blaze.renderWithData",
      "Blaze.remove",
      "Blaze.getData",
      "Blaze.toHTML",
      "Blaze.toHTMLWithData",
      "Blaze.View", [
        "Blaze.currentView",
        "Blaze.getView",
        "Blaze.With",
        "Blaze.If",
        "Blaze.Unless",
        "Blaze.Each"
      ],
      "Blaze.Template",
      "Blaze.isTemplate",
      {type: "spacer"},
      {name: "Renderable content", id: "renderable_content", style: "noncode"}
     ],

    "Timers", [
      "Meteor.setTimeout",
      "Meteor.setInterval",
      "Meteor.clearTimeout",
      "Meteor.clearInterval"
    ],

    "Tracker", [
      "Tracker.autorun",
      "Tracker.flush",
      "Tracker.nonreactive",
      "Tracker.active",
      "Tracker.currentComputation",
      "Tracker.onInvalidate",
      "Tracker.afterFlush",
      "Tracker.Computation", [
        {instance: "computation", name: "stop", id: "computation_stop"},
        {instance: "computation", name: "invalidate", id: "computation_invalidate"},
        {instance: "computation", name: "onInvalidate", id: "computation_oninvalidate"},
        {instance: "computation", name: "onStop", id: "computation_onstop"},
        {instance: "computation", name: "stopped", id: "computation_stopped"},
        {instance: "computation", name: "invalidated", id: "computation_invalidated"},
        {instance: "computation", name: "firstRun", id: "computation_firstrun"}
      ],
      "Tracker.Dependency", [
        {instance: "dependency", name: "changed", id: "dependency_changed"},
        {instance: "dependency", name: "depend", id: "dependency_depend"},
        {instance: "dependency", name: "hasDependents", id: "dependency_hasdependents"}
      ]
    ],

    {name: "ReactiveVar", id: "reactivevar_pkg"}, [
      "ReactiveVar",
      {instance: "reactiveVar", name: "get", id: "reactivevar_get"},
      {instance: "reactiveVar", name: "set", id: "reactivevar_set"}
    ],

    // "Environment Variables", [
    //   "Meteor.EnvironmentVariable", [
    //     {instance: "env_var", name: "get", id: "env_var_get"},
    //     {instance: "env_var", name: "withValue", id: "env_var_withvalue"},
    //     {instance: "env_var", name: "bindEnvironment", id: "env_var_bindenvironment"}
    //   ]
    //],

    {name: "EJSON", id: "ejson"}, [
      {name: "EJSON.parse", id: "ejson_parse"},
      {name: "EJSON.stringify", id: "ejson_stringify"},
      {name: "EJSON.fromJSONValue", id: "ejson_from_json_value"},
      {name: "EJSON.toJSONValue", id: "ejson_to_json_value"},
      {name: "EJSON.equals", id: "ejson_equals"},
      {name: "EJSON.clone", id: "ejson_clone"},
      {name: "EJSON.newBinary", id: "ejson_new_binary"},
      {name: "EJSON.isBinary", id: "ejson_is_binary"},
      {name: "EJSON.addType", id: "ejson_add_type"},
      [
        {instance: "customType", id: "ejson_type_typeName", name: "typeName"},
        {instance: "customType", id: "ejson_type_toJSONValue", name: "toJSONValue"},
        {instance: "customType", id: "ejson_type_clone", name: "clone"},
        {instance: "customType", id: "ejson_type_equals", name: "equals"}
      ]
    ],


    "HTTP", [
      "HTTP.call",
      {name: "HTTP.get"},
      {name: "HTTP.post"},
      {name: "HTTP.put"},
      {name: "HTTP.del"}
    ],
    "Email", [
      "Email.send"
    ],
    {name: "Assets", id: "assets"}, [
      {name: "Assets.getText", id: "assets_getText"},
      {name: "Assets.getBinary", id: "assets_getBinary"}
    ],

    {name: "package.js", id: "packagejs"}, [
      {name: "Package.describe", id: "packagedescription"},
      {name: "Package.onUse", id: "packagedefinition"}, [
        {name: "api.versionsFrom", id: "pack_versions"},
        {name: "api.use", id: "pack_use"},
        {name: "api.imply", id: "pack_api_imply"},
        {name: "api.export", id: "pack_export"},
        {name: "api.addFiles", id: "pack_addFiles"},
        {name: "api.addAssets", id: "PackageAPI-addAssets"}
      ],
      {name: "Package.onTest", id: "packagetests"},
      {name: "Npm.depends", id: "Npm-depends"},
      {name: "Npm.require", id: "Npm-require"},
      {name: "Cordova.depends", id: "Cordova-depends"},
      {name: "Package.registerBuildPlugin", id: "Package-registerBuildPlugin"}, [
        {name: "Plugin.registerSourceHandler", id: "Plugin-registerSourceHandler"}
      ]
    ],

    {name: "mobile-config.js", id: "mobileconfigjs"}, [
      {name: "App.info", id: "App-info"},
      {name: "App.setPreference", id: "App-setPreference"},
      {name: "App.accessRule", id: "App-accessRule"},
      {name: "App.configurePlugin", id: "App-configurePlugin"},
      {name: "App.icons", id: "App-icons"},
      {name: "App.launchScreens", id: "App-launchScreens"}
    ]
  ],

  "Packages", [ [
    "appcache",
    "accounts-ui",
    "audit-argument-checks",
    "coffeescript",
    "ecmascript",
    "jquery",
    "less",
    "markdown",
    "modules",
    "oauth-encryption",
    "random",
    {name: "spacebars", id: "pkg_spacebars"},
    {name: "spiderable", link: "https://atmospherejs.com/meteor/spiderable"},
    "underscore",
    "webapp"
  ] ],

  "Command line", [ [
    "meteor help",
    "meteor run",
    "meteor debug",
    "meteor create",
    "meteor login / logout",
    "meteor deploy",
    "meteor update",
    "meteor add",
    "meteor remove",
    "meteor list",
    "meteor mongo",
    "meteor reset",
    "meteor build",
    "meteor lint",
    "meteor search",
    "meteor show",
    "meteor publish",
    "meteor publish-for-arch",
    "meteor publish-release",
    "meteor test-packages",
    "meteor admin",
    "meteor shell"
  ] ]
];

apiIds = {};
_.each(TOC[2], a => {
  if (!_.isArray(a) && _.isObject(a)){
    a = a.name;
  }

  if (_.isString(a)) {
    currFile = `api/${a.toLowerCase()}.html`;
  } else {
    addIds = (ids) => {
      _.each(ids, (id) => {
        if (_.isArray(id)) {
          addIds(id);
        } else {
          if (_.isObject(id)) {
            if (id.type === 'spacer') {
              return;
            }
            id = id.id || id.name;
          }
          apiIds[nameToId[id] || id] = currFile;
        }
      });
    }
    addIds(a);
  }
});

JSON.stringify(apiIds, null, 2);
