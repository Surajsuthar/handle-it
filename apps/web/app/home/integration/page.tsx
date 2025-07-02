import { auth } from "@/auth";

export default async function Home() {
  const user = await auth();
  return (
    <main className="w-full mt-2">
      <section className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {[...Array(6)].map((_, i) => (
          <section className="h-32 flex items-center border w-full justify-center">
            HELLO
          </section>
        ))}
      </section>
    </main>
  );
}
