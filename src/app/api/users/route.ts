import { TUserDB } from "@/app/type";
import data from "@/db.json";
import { randomUUID } from "crypto";
import { readFileSync, writeFileSync } from "fs";
import { NextRequest } from "next/server";
import path from "path";
import { cwd } from "process";

const dbPath = path.join(cwd(), "src", "db.json");

export async function GET() {
	return Response.json(data);
}

export async function POST(request: NextRequest) {
	const readFile = readFileSync(dbPath);

	const db = JSON.parse(readFile.toString()) as TUserDB;

	const newId = randomUUID();
	const body = await request.json();
	const newUser = {
		id: newId,
		...body,
	};

	db.push(newUser);

	try {
		writeFileSync(dbPath, JSON.stringify(db), "utf-8");

		return Response.json({ message: "generated new user", data: newUser });
	} catch (error) {
		console.log(error);

		return new Response(JSON.stringify({ message: "something went wrong" }), {
			status: 500,
		});
	}
}
