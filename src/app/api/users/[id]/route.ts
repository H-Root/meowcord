import { TUserDB } from "@/app/type";
import { readFileSync, writeFileSync } from "fs";
import { NextRequest } from "next/server";
import path from "path";
import { cwd } from "process";

const dbPath = path.join(cwd(), "src", "db.json");

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const readFile = readFileSync(dbPath);

  const db = JSON.parse(readFile.toString()) as TUserDB;

  const { id } = await params;

  const user = db.find((user) => user.id === id);

  if (!user) {
    return new Response(JSON.stringify({ message: "user not found" }), {
      status: 404,
    });
  }

  return Response.json(user);
}
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const readFile = readFileSync(dbPath);
  const db = JSON.parse(readFile.toString()) as TUserDB;
  const { id } = await params;
  const user = db.find((u) => u.id === id);
  const users = db.filter((user) => user.id !== id);

  try {
    writeFileSync(dbPath, JSON.stringify(users), "utf-8");
    return Response.json({ message: `Delete user : ${user!.first_name}` });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "something went wrong" }), {
      status: 500,
    });
  }
}
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const readFile = readFileSync(dbPath);
  const db = JSON.parse(readFile.toString()) as TUserDB;
  const { id } = await params;
  const user = db.find((u) => u.id === id);
  const body = await request.json();
  const { first_name } = body;
  if (user) {
    user.first_name = first_name;
  } else {
    return Response.json({ message: "User not found" }, { status: 404 });
  }
  try {
    writeFileSync(dbPath, JSON.stringify(db), "utf-8");
    return Response.json({ message: "User updated", user: { ...body } });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "something went wrong" }), {
      status: 500,
    });
  }
}
