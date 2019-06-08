import { JsonServiceClient, GetNavItems } from "@servicestack/client";

import { Hello, GetLinks, GetPost, Authenticate } from "./dtos";

export const client = new JsonServiceClient("/");
client.bearerToken = localStorage.getItem('bearerToken');

export const getNav = async () => await client.get(new GetNavItems());

export const checkAuth = async () => {
    try {
        return await client.post(new Authenticate());
    } catch (e) {
        return null;
    }
};

export const auth = async (request) => {
    localStorage.setItem('bearerToken', null);
    const response = await client.post(request);
    localStorage.setItem('bearerToken', client.bearerToken = response.bearerToken);
    return response;
}

export const register = async (request) => {
    localStorage.setItem('bearerToken', null);
    const response = await client.post(request);
    localStorage.setItem('bearerToken', client.bearerToken = response.bearerToken);
    return response;
}

export const signout = async () => {
    localStorage.setItem('bearerToken', null);
    await client.post(new Authenticate({ provider: 'logout' }));
};

export const hello = async (name) => (await client.get(new Hello({ name }))).result;

export const getLinks = async () => (await client.get(new GetLinks())).results;

export const getPost = async (id) => {
    const request = new GetPost();
    request.id = id;
    return await client.get(request)
}
