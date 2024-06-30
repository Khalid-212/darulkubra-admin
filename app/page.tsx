"use client";
import { UserButton, useStackApp } from "@stackframe/stack";
import { TableComponent } from "./components/tableComponent";

export default async function Home() {
  const app = useStackApp();
  const user = app.useUser();
  return (
    <main className="min-h-screen">
      <div>
        {user ? (
          <div className="flex p-4 ">
            <div className="">
              <UserButton />
            </div>
            <TableComponent />
          </div>
        ) : (
          <div>
            <p>You are not logged in</p>
            <button onClick={() => app.redirectToSignIn()}>Sign in</button>
            <button onClick={() => app.redirectToSignUp()}>Sign up</button>
          </div>
        )}
      </div>
    </main>
  );
}
