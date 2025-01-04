import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useNavigate } from "@tanstack/react-router";


export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    setIsLoading(true);

    setTimeout(() => {
      if (username === "user" && password === "1234") {
        navigate({ to: "/home" });
      }

      setIsLoading(false);
    }, 500)
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-full px-5 flex flex-col justify-center items-center gap-y-10">
        <img src="sara-logo.png" className="w-44 h-36" />

        <div className="w-full flex flex-col gap-y-6">
          <div className="w-full flex flex-col gap-y-4">
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            loading={isLoading}
            onClick={submit}
            size="lg"
            className="w-full"
          >
            LOGIN
          </Button>
        </div>
      </div>
    </div>
  )
}
