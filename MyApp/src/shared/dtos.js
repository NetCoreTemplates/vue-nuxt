"use strict";
/* Options:
Date: 2018-01-25 05:29:54
Version: 5.03
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:5000

//GlobalNamespace:
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion:
//AddDescriptionAsComments: True
//IncludeTypes:
//ExcludeTypes:
//DefaultImports:
*/
exports.__esModule = true;
var HelloResponse = /** @class */ (function () {
    function HelloResponse() {
    }
    return HelloResponse;
}());
exports.HelloResponse = HelloResponse;
var GetLinksResponse = /** @class */ (function () {
    function GetLinksResponse() {
    }
    return GetLinksResponse;
}());
exports.GetLinksResponse = GetLinksResponse;
var GetPostResponse = /** @class */ (function () {
    function GetPostResponse() {
    }
    return GetPostResponse;
}());
exports.GetPostResponse = GetPostResponse;
// @Route("/hello")
// @Route("/hello/{Name}")
var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.prototype.createResponse = function () { return new HelloResponse(); };
    Hello.prototype.getTypeName = function () { return "Hello"; };
    return Hello;
}());
exports.Hello = Hello;
// @Route("/links")
var GetLinks = /** @class */ (function () {
    function GetLinks() {
    }
    GetLinks.prototype.createResponse = function () { return new GetLinksResponse(); };
    GetLinks.prototype.getTypeName = function () { return "GetLinks"; };
    return GetLinks;
}());
exports.GetLinks = GetLinks;
// @Route("/posts")
var GetPost = /** @class */ (function () {
    function GetPost() {
    }
    GetPost.prototype.createResponse = function () { return new GetPostResponse(); };
    GetPost.prototype.getTypeName = function () { return "GetPost"; };
    return GetPost;
}());
exports.GetPost = GetPost;
