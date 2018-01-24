/* Options:
Date: 2018-01-23 18:20:14
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


export interface IReturn<T>
{
    createResponse() : T;
}

export interface IReturnVoid
{
    createResponse() : void;
}

export class HelloResponse
{
    result: string;
}

export class GetLinksResponse
{
    results: { [index:string]: string; };
}

// @Route("/hello")
// @Route("/hello/{Name}")
export class Hello implements IReturn<HelloResponse>
{
    name: string;
    createResponse() { return new HelloResponse(); }
    getTypeName() { return "Hello"; }
}

// @Route("/links")
export class GetLinks implements IReturn<GetLinksResponse>
{
    createResponse() { return new GetLinksResponse(); }
    getTypeName() { return "GetLinks"; }
}
