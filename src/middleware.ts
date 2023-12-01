
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";



// export function middleware(request: NextRequest){
//     const authTokens = request.cookies.get("authTokens")?.value;
//     console.log(authTokens);

//     if(!request.nextUrl.pathname.startsWith("/login") && !authTokens){   
//         const response = NextResponse.redirect(new URL("/login", request.url));
//         response.cookies.delete("authTokens")
//         return response;
//     }
//     if(authTokens && request.nextUrl.pathname.startsWith("/login")){


//         const response = NextResponse.redirect(new URL("/lobby",request.url))
//         return response
//     }
// }

export const COOKIENAME = 'auth-token'


export async function middleware(req: NextRequest) {
    const session = req.cookies.get(COOKIENAME);
    const url = req.nextUrl.clone();
  
    if (!session && !url.pathname.startsWith('/auth/login')) {
      const requestedPage = req.nextUrl.pathname;
      url.pathname = '/auth/login';
      url.search = `p=${requestedPage}`;
      //return NextResponse.next()
      return NextResponse.redirect(url.toString());
    }
  
    if (session && url.pathname.startsWith('/auth/login')) {
      url.pathname = '/lobby';
      return NextResponse.next()
     // return NextResponse.redirect(url.toString());
    }
  
    return NextResponse.next();
  }
  
  // Ver "Matching Paths" abajo para obtener más información
  export const config = {
    matcher: [
      "/lobby",
      "/apartados/:path*",
      "/salidas/:path*",
      "/llegadas/:path*",
      "/reportes/:path*",
      "/auth/:path*"
    ],
  };




// export function middleware(request: NextRequest){
//     NextResponse.next()
// }