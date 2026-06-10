import {type NextRequest} from "next/server";
import {headers} from "next/headers"; // This is a server component, so we can use the headers() function to access the request headers directly.

export async function GET(request: NextRequest){
    // const requestHeaders = new Headers(request.headers);
    // console.log(requestHeaders.get("Authorization"));

    const headerList = await headers();
    console.log(headerList.get("Authorization"));
    return new Response("Profile API data");
}