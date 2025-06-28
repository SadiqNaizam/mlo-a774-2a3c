import { AuthFormWrapper } from "@/components/AuthFormWrapper";
import { SocialLoginButtons } from "@/components/SocialLoginButtons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <AuthFormWrapper
      title="Create an account"
      description="Enter your information to create an account."
      footerContent={
        <p className="px-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="underline underline-offset-4 hover:text-primary">
            Login
          </Link>
        </p>
      }
    >
      <form className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">Create account</Button>
        <SocialLoginButtons />
      </form>
    </AuthFormWrapper>
  );
}