import { useRouter } from "next/router";

export default function Account() {
  const router = useRouter();

  function login() {
    setTimeout(() => router.push("/"), 3000);
  }
  return <button onClick={login}>Sign in</button>;
}
