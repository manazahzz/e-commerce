import Image from "next/image";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
    </main>
  );
}