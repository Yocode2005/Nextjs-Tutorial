import {NextRequest, NextResponse} from "next/server";

// export function middleware(request : NextRequest) {
//     return NextResponse.redirect(new URL("/categories",request.url));
// }

// export const config = { // This matcher tells Next.js to apply this middleware only to requests that match the specified path. In this case, the middleware will only be applied to requests made to the "/profile" path. This allows us to control which routes are affected by the middleware and ensures that it only runs when necessary.
//     matcher: "/profile",
// }

export function middleware(request : NextRequest) {
    if(request.nextUrl.pathname === "/profile"){
        return NextResponse.redirect(new URL("/hello",request.nextUrl));
    }
}