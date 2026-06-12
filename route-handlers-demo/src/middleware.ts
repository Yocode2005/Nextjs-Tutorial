import {NextRequest, NextResponse} from "next/server";

// first approch using matcher to apply the middleware only to the "/profile" route. This way, we can ensure that the middleware is only executed for requests to the "/profile" route and not for any other routes in our application. This approach is more efficient as it avoids unnecessary execution of the middleware for routes that do not require it.
// export function middleware(request : NextRequest) {
//     return NextResponse.redirect(new URL("/categories",request.url));
// }

// export const config = { 
//     matcher: "/profile",
// }


// second approch using conditional statement in the middleware function to check the request path and redirect accordingly. This way, we can apply the middleware to all requests but only redirect when the path matches "/profile". This approach is more flexible as it allows us to handle multiple paths within the same middleware function if needed.
export function middleware(request : NextRequest) {
    if(request.nextUrl.pathname === "/profile"){
        return NextResponse.redirect(new URL("/hello",request.nextUrl));
    }
}