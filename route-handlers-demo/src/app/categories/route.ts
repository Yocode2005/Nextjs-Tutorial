export const dynamic = "force-dynamic"; // This forces the route to be dynamic and not statically optimized by Next.js, allowing us to use features like request headers and cookies.

// cashing is using in next.js to store the response of a request for a certain period of time, so that if the same request is made again, the response can be served from the cache instead of making a new request to the server. This can improve performance and reduce server load. However, in some cases, we may want to disable caching for a route, such as when we want to ensure that the response is always fresh and up-to-date. By setting the dynamic export to "force-dynamic", we can disable caching for this route and ensure that every request is processed dynamically by the server.

// caching only works for GET requests, so if we want to disable caching for other HTTP methods like POST, PATCH, DELETE, we can use the dynamic export to force the route to be dynamic and not statically optimized by Next.js. This way, every request to the route will be processed dynamically by the server, regardless of the HTTP method used.

export async function GET(){

    const categories = [
        {id: 1, name: "Electronics"},
        {id: 2, name: "Books"},
        {id: 3, name: "Clothing"},
        {id: 4, name: "Home & Garden"},
    ]
    return Response.json(categories);
}