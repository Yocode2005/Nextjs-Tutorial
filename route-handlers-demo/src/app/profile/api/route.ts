import {type NextRequest} from "next/server";
import {headers,cookies} from "next/headers"; // This is a server component, so we can use the headers() function to access the request headers directly.and cookies() function to access the cookies directly without needing to use the request object.

export async function GET(request: NextRequest){
    // const requestHeaders = new Headers(request.headers);
    // console.log(requestHeaders.get("Authorization"));

    const headerList = await headers();
    console.log(headerList.get("Authorization"));

    const theme = request.cookies.get("theme"); // use the cookies property of the request object to access cookies
    console.log(theme);

    const cookieStore = await cookies();
    cookieStore.set("resultsPerPage","20") // use the cookies() function to get a cookie store and set a cookie in the response
    console.log(cookieStore.get("resultsPerPage"));

    return new Response("<h1>Profile API data</h1>",{
        headers: {
            "Content-Type": "text/html",
            "set-cookie": "theme=dark", // Set a cookie in the response
        },
    });
}