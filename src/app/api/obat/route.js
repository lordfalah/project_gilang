import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const obat = await prisma.obat.findMany();

    return NextResponse.json(obat, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { name, ukuran, dosis, keterangan } = await req.json();
    if (!name || !ukuran || !keterangan) {
      return NextResponse.json(
        { message: "Isi semua fields !!!" },
        { status: 404 }
      );
    }

    const obat = await prisma.obat.create({
      data: {
        name,
        ukuran: parseInt(ukuran),
        dosis: parseFloat(dosis),
        keterangan,
      },
    });

    return NextResponse.json(obat, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
