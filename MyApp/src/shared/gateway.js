import { JsonServiceClient } from "@servicestack/client";

import { Hello, HelloResponse, GetLinks, GetPost } from "./dtos";

export const client = new JsonServiceClient("/");

export async function hello(name) {
    const request = new Hello();
    request.name = name;
    return (await client.get(request)).result;
}

export const getLinks = async () => (await client.get(new GetLinks())).results;

export const getPost = async (id) => {
    const request = new GetPost();
    request.id = id;
    return await client.get(request)
}
