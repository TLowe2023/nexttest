import { User } from "@/rest/dtos";
import { getUser } from "@/rest/server.endpoints";
import { call } from "@/rest/rest.service";
import { NextResponse } from "next/server";

interface UserIdParams {
  params: {
    id: string;
  };
}

// tests out NextJS api endpoints
export async function GET(request: Request, { params }: UserIdParams) {
  const user = await call<User>(getUser(params.id));

  return NextResponse.json(user);
}
