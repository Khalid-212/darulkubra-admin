"use client";
import { useUser } from "@stackframe/stack";

export default function Protected() {
  useUser({ or: "redirect" });
  return <h1>You can only see this if you are logged in</h1>;
}
