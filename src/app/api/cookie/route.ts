
import { COOKIENAME } from "@/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    // Verifica si el método de la solicitud es POST y si hay un cuerpo en la solicitud


    try {
       
        const cookieFound = req.cookies.get(COOKIENAME);
            console.log("cookieFound"+cookieFound);
            
        if (!cookieFound) {
            // Si la cookie no se encuentra, devuelve una respuesta con un código de estado 404
            return NextResponse.json({ message: 'Cookie not found' }, { status: 404 });
        }

        // Si la cookie se encuentra, devuelve una respuesta con la cookie y un código de estado 200
        return NextResponse.json({ token: cookieFound }, { status: 200 });
    } catch (error) {
        // Si ocurre un error al analizar el JSON, devuelve una respuesta con un código de estado 400
        return NextResponse.json({ message: 'Invalid JSON in the request body' }, { status: 400 });
    }




    // Si el método no es POST o no hay un cuerpo en la solicitud, devuelve una respuesta con un código de estado 405
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}