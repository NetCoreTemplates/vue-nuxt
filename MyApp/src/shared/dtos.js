/* Options:
Date: 2018-02-01 14:55:17
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
var HelloResponse = /** @class */ (function () {
    function HelloResponse() {
    }
    return HelloResponse;
}());
export { HelloResponse };
var GetLinksResponse = /** @class */ (function () {
    function GetLinksResponse() {
    }
    return GetLinksResponse;
}());
export { GetLinksResponse };
var GetPostResponse = /** @class */ (function () {
    function GetPostResponse() {
    }
    return GetPostResponse;
}());
export { GetPostResponse };
// @Route("/hello")
// @Route("/hello/{Name}")
var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.prototype.createResponse = function () { return new HelloResponse(); };
    Hello.prototype.getTypeName = function () { return "Hello"; };
    return Hello;
}());
export { Hello };
// @Route("/links")
var GetLinks = /** @class */ (function () {
    function GetLinks() {
    }
    GetLinks.prototype.createResponse = function () { return new GetLinksResponse(); };
    GetLinks.prototype.getTypeName = function () { return "GetLinks"; };
    return GetLinks;
}());
export { GetLinks };
// @Route("/posts")
var GetPost = /** @class */ (function () {
    function GetPost() {
    }
    GetPost.prototype.createResponse = function () { return new GetPostResponse(); };
    GetPost.prototype.getTypeName = function () { return "GetPost"; };
    return GetPost;
}());
export { GetPost };
