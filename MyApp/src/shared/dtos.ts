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

export class GetPostResponse
{
    id: number;
    title: string;
    description: string;
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

// @Route("/posts")
export class GetPost implements IReturn<GetPostResponse>
{
    id: number;
    createResponse() { return new GetPostResponse(); }
    getTypeName() { return "GetPost"; }
}
