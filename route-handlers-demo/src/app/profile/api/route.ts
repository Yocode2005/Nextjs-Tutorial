import {type NextRequest} from "next/server";
import {headers} from "next/headers"; // This is a server component, so we can use the headers() function to access the request headers directly.

export async function GET(request: NextRequest){
    // const requestHeaders = new Headers(request.headers);
    // console.log(requestHeaders.get("Authorization"));

    const headerList = await headers();
    console.log(headerList.get("Authorization"));

    const theme = request.cookies.get("theme");
    console.log(theme);

    return new Response("<h1>Profile API data</h1>",{
        headers: {
            "Content-Type": "text/html",
            "set-cookie": "theme=dark", // Set a cookie in the response
        },
    });
}