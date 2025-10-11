import { TUserDB } from "@/app/type";
import { readFileSync } from "fs";
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
