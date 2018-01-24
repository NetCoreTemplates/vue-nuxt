import { JsonServiceClient } from "@servicestack/client";

import { Hello, HelloResponse, GetLinks } from "./dtos";

export const client = new JsonServiceClient("/");

export async function hello(name) {
    var request = new Hello();
    request.name = name;
    return (await client.get(request)).result;
}

export const getLinks = async () => (await client.get(new GetLinks())).results;
