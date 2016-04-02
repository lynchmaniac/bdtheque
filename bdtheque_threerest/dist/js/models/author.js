"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

var _threerest = require("threerest");

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Author = (_dec = _threerest.Hal.halEntity("/authors/:id"), _dec2 = _threerest.Hal.resourceId(), _dec(_class = (_class2 = function Author(id, firstName, lastName, series) {
  _classCallCheck(this, Author);

  _initDefineProp(this, "id", _descriptor, this);

  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.series = series;
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class2)) || _class);
exports.default = Author;