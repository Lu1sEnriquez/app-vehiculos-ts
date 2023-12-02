import { NextResponse } from "next/server";


export function GET(req: Request) {
    console.log('cuerpo: ' +req.body);
    return NextResponse.json({message:'si jala'},{status:200})
    
}