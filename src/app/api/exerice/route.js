import { NextResponse } from "next/server"


export const GET = async (request,res)=>{
   try {
    return NextResponse.json({"an":12});
   } catch (error) {
    console.log(error);
    return new NextResponse(error)
   }
}
export async function POST(request) {
    try {
      const json = await request.json();
  
      
  
      let json_response = {
        status: "success",
        json
      };
      return new NextResponse(JSON.stringify(json_response), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      if (error.code === "P2002") {
        let error_response = {
          status: "fail",
          message: "Feedback with title already exists",
        };
        return new NextResponse(JSON.stringify(error_response), {
          status: 409,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      let error_response = {
        status: "error",
        message: error.message,
      };
      return new NextResponse(JSON.stringify(error_response), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }