(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["array"] = factory();
	else
		root["CoCreate"] = root["CoCreate"] || {}, root["CoCreate"]["array"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../CoCreate-components/CoCreate-array/src/CoCreate-array.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../CoCreate-components/CoCreate-array/src/CoCreate-array.js":
/*!*******************************************************************!*\
  !*** ../CoCreate-components/CoCreate-array/src/CoCreate-array.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"../node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n\nvar arrayClass = 'arrayField';\ninitSocketsForArray();\ninitArrayForms(); //-2-1\n\nfunction initSocketsForArray() {\n  CoCreate.socket.listen('connect', function (data, room) {\n    console.log('socket connected');\n\n    if (room == CoCreate.socket.getGlobalScope()) {\n      socketConnectedForArray();\n    }\n  });\n  CoCreate.socket.listen('createDocument', function (data) {\n    insertCreatedIdToArray(data);\n  });\n  CoCreate.socket.listen('readDocument', function (data) {\n    fetchedDataForArray(data);\n  });\n  CoCreate.socket.listen('updateDocument', function (data) {\n    fetchedDataForArray(data);\n  }); // CoCreate.socket.listen('fetchedModuleActivity', function (data) {\n  //   fetchedDataForArray(data, 'module_activity');\n  // });\n  // CoCreate.socket.listen('fetchedModule', function(data) {\n  //   fetchedDataForArray(data, data['data-collection']);\n  // })\n}\n\nfunction initArrayForms() {\n  var forms = document.querySelectorAll('form');\n\n  for (var i = 0; i < forms.length; i++) {\n    var form = forms[i];\n    initArrayTags(form);\n  }\n}\n\nfunction initArrayTags(form) {\n  var arrayTags = form.querySelectorAll('[data-array_name]');\n\n  for (var i = 0; i < arrayTags.length; i++) {\n    var arrayTag = arrayTags[i];\n    initArrayTag(form, arrayTag);\n  }\n}\n\nfunction initArrayTag(form, arrayTag) {\n  var real_time = form.getAttribute('data-realtime');\n  var collection = form.getAttribute('data-collection') ? form.getAttribute('data-collection') : 'module_activity';\n\n  if (real_time != 'false') {\n    arrayTag.addEventListener('change', function (e) {\n      e.preventDefault();\n      var array_name = this.getAttribute('data-array_name');\n      var value = getArrayValue(form, arrayTag);\n      var id = collection == this.getAttribute('data-document_id');\n\n      if (id) {\n        CoCreate.crud.updateDocument({\n          'collection': collection,\n          'document_id': id,\n          'data': _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, array_name, value),\n          'metadata': \"\"\n        });\n      }\n    });\n\n    if (arrayTag.tagName != 'SELECT') {\n      var checkboxs = arrayTag.querySelectorAll('input[type=\"checkbox\"]');\n\n      for (var i = 0; i < checkboxs.length; i++) {\n        var checkbox = checkboxs[i];\n        checkbox.addEventListener('change', function (e) {\n          e.preventDefault(); //arrayTag.dispatchEvent(new Event('change'));\n        });\n      }\n    }\n  }\n}\n\nfunction socketConnectedForArray() {\n  fetchArrays();\n}\n\nfunction insertCreatedIdToArray(data) {\n  var form_id = data['element'];\n  var form = document.querySelector(\"form[data-form_id='\" + form_id + \"']\");\n\n  if (form) {\n    var arrayTags = form.getElementsByClassName('arrayField');\n    var collection = form.getAttribute('data-collection');\n    collection = collection ? collection : 'module_activity';\n\n    for (var i = 0; i < arrayTags.length; i++) {\n      var arrayTag = arrayTags[i];\n      var data_module_id = arrayTag.getAttribute('data-document_id');\n\n      if (!data_module_id) {\n        arrayTag.setAttribute('data-document_id', data['document_id']);\n      }\n    }\n  }\n}\n\nfunction getArrayValue(form, arrayTag) {\n  var arrayValue = [];\n\n  if (arrayTag.tagName == 'SELECT') {\n    var value = arrayTag.value;\n    arrayValue.push(value);\n  } else {\n    var checkboxs = arrayTag.querySelectorAll('input[type=\"checkbox\"]');\n\n    for (var i = 0; i < checkboxs.length; i++) {\n      var checkbox = checkboxs[i];\n\n      if (checkbox.checked) {\n        var value = checkbox.value;\n        arrayValue.push(value);\n      }\n    }\n  }\n\n  console.log(arrayValue);\n  return arrayValue;\n}\n\nfunction updateArray(form) {\n  var collection = form.getAttribute('data-collection') || 'module_activity';\n  var arrayTags = form.querySelectorAll('[data-array_name]');\n\n  for (var i = 0; i < arrayTags.length; i++) {\n    var arrayTag = arrayTags[i];\n    var array_name = arrayTag.getAttribute('data-array_name');\n    var value = getArrayValue(form, arrayTag);\n    var id = arrayTag.getAttribute('data-document_id');\n\n    if (id) {\n      CoCreate.crud.updateDocument({\n        'collection': collection,\n        'document_id': id,\n        'data': _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, array_name, value),\n        'metadata': \"\"\n      });\n    }\n  }\n}\n\nfunction fetchedDataForArray(data) {\n  var collection = data['collection'];\n  var forms = document.querySelectorAll('form');\n\n  for (var f = 0; f < forms.length; f++) {\n    var form = forms[f];\n    var form_collection = form.getAttribute('data-collection') ? form.getAttribute('data-collection') : 'module_activity';\n    if (form_collection != collection) continue;\n    var arrayTags = form.querySelectorAll('[data-array_name]');\n\n    for (var i = 0; i < arrayTags.length; i++) {\n      var arrayTag = arrayTags[i];\n      var module_id = arrayTag.getAttribute('data-document_id');\n\n      if (module_id === data['document_id']) {\n        updateArrayData(arrayTag, data['data']);\n      }\n    }\n  }\n}\n\nfunction updateArrayData(arrayTag, data) {\n  var array_name = arrayTag.getAttribute('data-array_name');\n\n  if (array_name in data) {\n    var value = data[array_name];\n\n    if (arrayTag.tagName == 'SELECT') {\n      if (value.length > 0) {\n        arrayTag.value = value[0];\n      } else {\n        arrayTag.value = null;\n      }\n    } else {\n      var checkboxs = arrayTag.querySelectorAll('input[type=\"checkbox\"]');\n\n      for (var i = 0; i < checkboxs.length; i++) {\n        var checkbox = checkboxs[i];\n\n        if (value.indexOf(checkbox.value) > -1) {\n          checkbox.checked = true;\n        } else {\n          checkbox.checked = false;\n        }\n      }\n    }\n  }\n}\n\nfunction fetchArrays() {\n  var fetchArray = [];\n  var forms = document.querySelectorAll('form');\n\n  for (var f = 0; f < forms.length; f++) {\n    var form = forms[f];\n    var data_collection = form.getAttribute('data-collection') ? form.getAttribute('data-collection') : 'module_activity';\n    var arrayTags = form.querySelectorAll('[data-array_name]');\n\n    for (var i = 0; i < arrayTags.length; i++) {\n      var arrayTag = arrayTags[i];\n      var data_module_id = arrayTag.getAttribute('data-document_id');\n\n      if (data_module_id) {\n        var exist = false;\n\n        for (var j = 0; j < fetchArray.length; j++) {\n          if (data_collection == fetchArray[j]['data-collection'] && data_module_id == fetchArray[j]['id']) {\n            exist = true;\n            continue;\n          }\n        }\n\n        if (!exist) {\n          fetchArray.push({\n            'data-collection': data_collection,\n            'id': data_module_id\n          });\n        }\n      }\n    }\n  }\n\n  fetchArray.forEach(function (item) {\n    CoCreate.crud.readDocument({\n      collection: item['data-collection'],\n      document_id: item['id'],\n      metadata: ''\n    });\n  });\n}\n\nvar CoCreateArray = {\n  fetchArrays: fetchArrays,\n  updateArrayData: updateArrayData,\n  fetchedDataForArray: fetchedDataForArray,\n  updateArray: updateArray,\n  getArrayValue: getArrayValue,\n  insertCreatedIdToArray: insertCreatedIdToArray,\n  socketConnectedForArray: socketConnectedForArray,\n  initArrayTag: initArrayTag,\n  initArrayTags: initArrayTags,\n  initArrayForms: initArrayForms,\n  initSocketsForArray: initSocketsForArray\n  /* define other function*/\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoCreateArray);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5hcnJheS8uLi9Db0NyZWF0ZS1jb21wb25lbnRzL0NvQ3JlYXRlLWFycmF5L3NyYy9Db0NyZWF0ZS1hcnJheS5qcz9kMWJlIl0sIm5hbWVzIjpbImFycmF5Q2xhc3MiLCJpbml0U29ja2V0c0ZvckFycmF5IiwiaW5pdEFycmF5Rm9ybXMiLCJDb0NyZWF0ZSIsInNvY2tldCIsImxpc3RlbiIsImRhdGEiLCJyb29tIiwiY29uc29sZSIsImxvZyIsImdldEdsb2JhbFNjb3BlIiwic29ja2V0Q29ubmVjdGVkRm9yQXJyYXkiLCJpbnNlcnRDcmVhdGVkSWRUb0FycmF5IiwiZmV0Y2hlZERhdGFGb3JBcnJheSIsImZvcm1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImZvcm0iLCJpbml0QXJyYXlUYWdzIiwiYXJyYXlUYWdzIiwiYXJyYXlUYWciLCJpbml0QXJyYXlUYWciLCJyZWFsX3RpbWUiLCJnZXRBdHRyaWJ1dGUiLCJjb2xsZWN0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFycmF5X25hbWUiLCJ2YWx1ZSIsImdldEFycmF5VmFsdWUiLCJpZCIsImNydWQiLCJ1cGRhdGVEb2N1bWVudCIsInRhZ05hbWUiLCJjaGVja2JveHMiLCJjaGVja2JveCIsImZldGNoQXJyYXlzIiwiZm9ybV9pZCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZGF0YV9tb2R1bGVfaWQiLCJzZXRBdHRyaWJ1dGUiLCJhcnJheVZhbHVlIiwicHVzaCIsImNoZWNrZWQiLCJ1cGRhdGVBcnJheSIsImYiLCJmb3JtX2NvbGxlY3Rpb24iLCJtb2R1bGVfaWQiLCJ1cGRhdGVBcnJheURhdGEiLCJpbmRleE9mIiwiZmV0Y2hBcnJheSIsImRhdGFfY29sbGVjdGlvbiIsImV4aXN0IiwiaiIsImZvckVhY2giLCJpdGVtIiwicmVhZERvY3VtZW50IiwiZG9j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dEJoQixlQUFhLEVBQWJBLGFBRnNCO0FBRVBwQix3QkFBc0IsRUFBdEJBLHNCQUZPO0FBRWlCRCx5QkFBdUIsRUFBdkJBLHVCQUZqQjtBQUd0QlksY0FBWSxFQUFaQSxZQUhzQjtBQUdSSCxlQUFhLEVBQWJBLGFBSFE7QUFHT2xCLGdCQUFjLEVBQWRBLGNBSFA7QUFHdUJELHFCQUFtQixFQUFuQkE7QUFDN0M7O0FBSnNCLENBQXRCO0FBS2U4RCw0RUFBZiIsImZpbGUiOiIuLi9Db0NyZWF0ZS1jb21wb25lbnRzL0NvQ3JlYXRlLWFycmF5L3NyYy9Db0NyZWF0ZS1hcnJheS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcnJheUNsYXNzID0gJ2FycmF5RmllbGQnO1xuXG5pbml0U29ja2V0c0ZvckFycmF5KCk7XG5pbml0QXJyYXlGb3JtcygpO1xuLy8tMi0xXG5mdW5jdGlvbiBpbml0U29ja2V0c0ZvckFycmF5KCkge1xuICBDb0NyZWF0ZS5zb2NrZXQubGlzdGVuKCdjb25uZWN0JywgZnVuY3Rpb24oZGF0YSwgcm9vbSkge1xuICAgIGNvbnNvbGUubG9nKCdzb2NrZXQgY29ubmVjdGVkJyk7XG4gICAgaWYgKHJvb20gPT0gQ29DcmVhdGUuc29ja2V0LmdldEdsb2JhbFNjb3BlKCkpIHtcbiAgICAgIHNvY2tldENvbm5lY3RlZEZvckFycmF5KCk7XG4gICAgfVxuICB9KVxuXG4gIENvQ3JlYXRlLnNvY2tldC5saXN0ZW4oJ2NyZWF0ZURvY3VtZW50JywgZnVuY3Rpb24oZGF0YSkge1xuICAgIGluc2VydENyZWF0ZWRJZFRvQXJyYXkoZGF0YSk7XG4gIH0pXG5cbiAgQ29DcmVhdGUuc29ja2V0Lmxpc3RlbigncmVhZERvY3VtZW50JywgZnVuY3Rpb24oZGF0YSkge1xuICAgIGZldGNoZWREYXRhRm9yQXJyYXkoZGF0YSk7XG4gIH0pXG5cbiAgQ29DcmVhdGUuc29ja2V0Lmxpc3RlbigndXBkYXRlRG9jdW1lbnQnLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgZmV0Y2hlZERhdGFGb3JBcnJheShkYXRhKTtcbiAgfSlcblxuICAvLyBDb0NyZWF0ZS5zb2NrZXQubGlzdGVuKCdmZXRjaGVkTW9kdWxlQWN0aXZpdHknLCBmdW5jdGlvbiAoZGF0YSkge1xuICAvLyAgIGZldGNoZWREYXRhRm9yQXJyYXkoZGF0YSwgJ21vZHVsZV9hY3Rpdml0eScpO1xuICAvLyB9KTtcblxuICAvLyBDb0NyZWF0ZS5zb2NrZXQubGlzdGVuKCdmZXRjaGVkTW9kdWxlJywgZnVuY3Rpb24oZGF0YSkge1xuICAvLyAgIGZldGNoZWREYXRhRm9yQXJyYXkoZGF0YSwgZGF0YVsnZGF0YS1jb2xsZWN0aW9uJ10pO1xuICAvLyB9KVxufVxuXG5mdW5jdGlvbiBpbml0QXJyYXlGb3JtcygpIHtcbiAgdmFyIGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZm9ybXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZm9ybSA9IGZvcm1zW2ldO1xuXG4gICAgaW5pdEFycmF5VGFncyhmb3JtKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0QXJyYXlUYWdzKGZvcm0pIHtcbiAgdmFyIGFycmF5VGFncyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYXJyYXlfbmFtZV0nKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5VGFncy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBhcnJheVRhZyA9IGFycmF5VGFnc1tpXTtcblxuICAgIGluaXRBcnJheVRhZyhmb3JtLCBhcnJheVRhZyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdEFycmF5VGFnKGZvcm0sIGFycmF5VGFnKSB7XG4gIHZhciByZWFsX3RpbWUgPSBmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1yZWFsdGltZScpO1xuICB2YXIgY29sbGVjdGlvbiA9IGZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLWNvbGxlY3Rpb24nKSA/IGZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLWNvbGxlY3Rpb24nKSA6ICdtb2R1bGVfYWN0aXZpdHknO1xuXG5cbiAgaWYgKHJlYWxfdGltZSAhPSAnZmFsc2UnKSB7XG5cbiAgICBhcnJheVRhZy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgYXJyYXlfbmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWFycmF5X25hbWUnKTtcblxuICAgICAgdmFyIHZhbHVlID0gZ2V0QXJyYXlWYWx1ZShmb3JtLCBhcnJheVRhZyk7XG5cbiAgICAgIHZhciBpZCA9IGNvbGxlY3Rpb24gPT0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZG9jdW1lbnRfaWQnKTtcbiAgICAgIGlmIChpZCkge1xuICAgICAgICBDb0NyZWF0ZS5jcnVkLnVwZGF0ZURvY3VtZW50KHtcbiAgICAgICAgICAnY29sbGVjdGlvbic6IGNvbGxlY3Rpb24sXG4gICAgICAgICAgJ2RvY3VtZW50X2lkJzogaWQsXG4gICAgICAgICAgJ2RhdGEnOiB7XG4gICAgICAgICAgICBbYXJyYXlfbmFtZV06IHZhbHVlIH0sXG4gICAgICAgICAgJ21ldGFkYXRhJzogXCJcIlxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGFycmF5VGFnLnRhZ05hbWUgIT0gJ1NFTEVDVCcpIHtcbiAgICAgIHZhciBjaGVja2JveHMgPSBhcnJheVRhZy5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGVja2JveHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrYm94ID0gY2hlY2tib3hzW2ldO1xuXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgLy9hcnJheVRhZy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzb2NrZXRDb25uZWN0ZWRGb3JBcnJheSgpIHtcbiAgZmV0Y2hBcnJheXMoKTtcbn1cblxuXG5cbmZ1bmN0aW9uIGluc2VydENyZWF0ZWRJZFRvQXJyYXkoZGF0YSkge1xuICB2YXIgZm9ybV9pZCA9IGRhdGFbJ2VsZW1lbnQnXTtcblxuICB2YXIgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtW2RhdGEtZm9ybV9pZD0nXCIgKyBmb3JtX2lkICsgXCInXVwiKTtcblxuICBpZiAoZm9ybSkge1xuXG4gICAgdmFyIGFycmF5VGFncyA9IGZvcm0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXJyYXlGaWVsZCcpO1xuICAgIHZhciBjb2xsZWN0aW9uID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGVjdGlvbicpO1xuXG4gICAgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb24gPyBjb2xsZWN0aW9uIDogJ21vZHVsZV9hY3Rpdml0eSc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5VGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGFycmF5VGFnID0gYXJyYXlUYWdzW2ldO1xuICAgICAgdmFyIGRhdGFfbW9kdWxlX2lkID0gYXJyYXlUYWcuZ2V0QXR0cmlidXRlKCdkYXRhLWRvY3VtZW50X2lkJyk7XG4gICAgICBpZiAoIWRhdGFfbW9kdWxlX2lkKSB7XG4gICAgICAgIGFycmF5VGFnLnNldEF0dHJpYnV0ZSgnZGF0YS1kb2N1bWVudF9pZCcsIGRhdGFbJ2RvY3VtZW50X2lkJ10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBcnJheVZhbHVlKGZvcm0sIGFycmF5VGFnKSB7XG5cblxuICB2YXIgYXJyYXlWYWx1ZSA9IFtdO1xuXG5cbiAgaWYgKGFycmF5VGFnLnRhZ05hbWUgPT0gJ1NFTEVDVCcpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVRhZy52YWx1ZTtcbiAgICBhcnJheVZhbHVlLnB1c2godmFsdWUpO1xuICB9XG4gIGVsc2Uge1xuXG4gICAgdmFyIGNoZWNrYm94cyA9IGFycmF5VGFnLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hlY2tib3hzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tib3ggPSBjaGVja2JveHNbaV07XG4gICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBjaGVja2JveC52YWx1ZTtcbiAgICAgICAgYXJyYXlWYWx1ZS5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cblxuICB9XG5cblxuICBjb25zb2xlLmxvZyhhcnJheVZhbHVlKTtcbiAgcmV0dXJuIGFycmF5VmFsdWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFycmF5KGZvcm0pIHtcbiAgdmFyIGNvbGxlY3Rpb24gPSBmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xsZWN0aW9uJykgfHwgJ21vZHVsZV9hY3Rpdml0eSc7XG4gIHZhciBhcnJheVRhZ3MgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFycmF5X25hbWVdJyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheVRhZ3MubGVuZ3RoOyBpKyspIHtcblxuICAgIHZhciBhcnJheVRhZyA9IGFycmF5VGFnc1tpXTtcblxuICAgIHZhciBhcnJheV9uYW1lID0gYXJyYXlUYWcuZ2V0QXR0cmlidXRlKCdkYXRhLWFycmF5X25hbWUnKTtcbiAgICB2YXIgdmFsdWUgPSBnZXRBcnJheVZhbHVlKGZvcm0sIGFycmF5VGFnKTtcblxuICAgIHZhciBpZCA9IGFycmF5VGFnLmdldEF0dHJpYnV0ZSgnZGF0YS1kb2N1bWVudF9pZCcpO1xuXG4gICAgaWYgKGlkKSB7XG4gICAgICBDb0NyZWF0ZS5jcnVkLnVwZGF0ZURvY3VtZW50KHtcbiAgICAgICAgJ2NvbGxlY3Rpb24nOiBjb2xsZWN0aW9uLFxuICAgICAgICAnZG9jdW1lbnRfaWQnOiBpZCxcbiAgICAgICAgJ2RhdGEnOiB7XG4gICAgICAgICAgW2FycmF5X25hbWVdOiB2YWx1ZSB9LFxuICAgICAgICAnbWV0YWRhdGEnOiBcIlwiXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmV0Y2hlZERhdGFGb3JBcnJheShkYXRhKSB7XG4gIHZhciBjb2xsZWN0aW9uID0gZGF0YVsnY29sbGVjdGlvbiddO1xuXG4gIHZhciBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKTtcblxuICBmb3IgKHZhciBmID0gMDsgZiA8IGZvcm1zLmxlbmd0aDsgZisrKSB7XG4gICAgdmFyIGZvcm0gPSBmb3Jtc1tmXTtcbiAgICB2YXIgZm9ybV9jb2xsZWN0aW9uID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGVjdGlvbicpID8gZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sbGVjdGlvbicpIDogJ21vZHVsZV9hY3Rpdml0eSc7XG5cbiAgICBpZiAoZm9ybV9jb2xsZWN0aW9uICE9IGNvbGxlY3Rpb24pIGNvbnRpbnVlO1xuXG4gICAgdmFyIGFycmF5VGFncyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYXJyYXlfbmFtZV0nKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlUYWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYXJyYXlUYWcgPSBhcnJheVRhZ3NbaV07XG5cbiAgICAgIHZhciBtb2R1bGVfaWQgPSBhcnJheVRhZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZG9jdW1lbnRfaWQnKTtcblxuICAgICAgaWYgKG1vZHVsZV9pZCA9PT0gZGF0YVsnZG9jdW1lbnRfaWQnXSkge1xuICAgICAgICB1cGRhdGVBcnJheURhdGEoYXJyYXlUYWcsIGRhdGFbJ2RhdGEnXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFycmF5RGF0YShhcnJheVRhZywgZGF0YSkge1xuXG4gIHZhciBhcnJheV9uYW1lID0gYXJyYXlUYWcuZ2V0QXR0cmlidXRlKCdkYXRhLWFycmF5X25hbWUnKTtcblxuICBpZiAoYXJyYXlfbmFtZSBpbiBkYXRhKSB7XG4gICAgdmFyIHZhbHVlID0gZGF0YVthcnJheV9uYW1lXTtcblxuICAgIGlmIChhcnJheVRhZy50YWdOYW1lID09ICdTRUxFQ1QnKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBhcnJheVRhZy52YWx1ZSA9IHZhbHVlWzBdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGFycmF5VGFnLnZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgY2hlY2tib3hzID0gYXJyYXlUYWcucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hlY2tib3hzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2JveCA9IGNoZWNrYm94c1tpXTtcbiAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoY2hlY2tib3gudmFsdWUpID4gLTEpIHtcbiAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmV0Y2hBcnJheXMoKSB7XG4gIHZhciBmZXRjaEFycmF5ID0gW107XG5cbiAgdmFyIGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpO1xuICBmb3IgKHZhciBmID0gMDsgZiA8IGZvcm1zLmxlbmd0aDsgZisrKSB7XG5cbiAgICB2YXIgZm9ybSA9IGZvcm1zW2ZdO1xuICAgIHZhciBkYXRhX2NvbGxlY3Rpb24gPSBmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xsZWN0aW9uJykgPyBmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xsZWN0aW9uJykgOiAnbW9kdWxlX2FjdGl2aXR5JztcblxuICAgIHZhciBhcnJheVRhZ3MgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFycmF5X25hbWVdJyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5VGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGFycmF5VGFnID0gYXJyYXlUYWdzW2ldO1xuXG4gICAgICB2YXIgZGF0YV9tb2R1bGVfaWQgPSBhcnJheVRhZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZG9jdW1lbnRfaWQnKTtcblxuICAgICAgaWYgKGRhdGFfbW9kdWxlX2lkKSB7XG4gICAgICAgIHZhciBleGlzdCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZmV0Y2hBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlmIChkYXRhX2NvbGxlY3Rpb24gPT0gZmV0Y2hBcnJheVtqXVsnZGF0YS1jb2xsZWN0aW9uJ10gJiYgZGF0YV9tb2R1bGVfaWQgPT0gZmV0Y2hBcnJheVtqXVsnaWQnXSkge1xuICAgICAgICAgICAgZXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFleGlzdCkge1xuICAgICAgICAgIGZldGNoQXJyYXkucHVzaCh7XG4gICAgICAgICAgICAnZGF0YS1jb2xsZWN0aW9uJzogZGF0YV9jb2xsZWN0aW9uLFxuICAgICAgICAgICAgJ2lkJzogZGF0YV9tb2R1bGVfaWRcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZmV0Y2hBcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgQ29DcmVhdGUuY3J1ZC5yZWFkRG9jdW1lbnQoe1xuICAgICAgY29sbGVjdGlvbjogaXRlbVsnZGF0YS1jb2xsZWN0aW9uJ10sXG4gICAgICBkb2N1bWVudF9pZDogaXRlbVsnaWQnXSxcbiAgICAgIG1ldGFkYXRhOiAnJ1xuICAgIH0pXG4gIH0pXG59XG5cbmNvbnN0IENvQ3JlYXRlQXJyYXkgPSB7IGZldGNoQXJyYXlzLFxudXBkYXRlQXJyYXlEYXRhLCBmZXRjaGVkRGF0YUZvckFycmF5LCB1cGRhdGVBcnJheSxcbmdldEFycmF5VmFsdWUsIGluc2VydENyZWF0ZWRJZFRvQXJyYXksIHNvY2tldENvbm5lY3RlZEZvckFycmF5LFxuaW5pdEFycmF5VGFnLCBpbml0QXJyYXlUYWdzLCBpbml0QXJyYXlGb3JtcywgaW5pdFNvY2tldHNGb3JBcnJheVxuLyogZGVmaW5lIG90aGVyIGZ1bmN0aW9uKi8gfTtcbmV4cG9ydCBkZWZhdWx0IENvQ3JlYXRlQXJyYXk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../CoCreate-components/CoCreate-array/src/CoCreate-array.js\n");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5hcnJheS8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcz8zYWYwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../node_modules/@babel/runtime/helpers/defineProperty.js\n");

/***/ })

/******/ })["default"];
});