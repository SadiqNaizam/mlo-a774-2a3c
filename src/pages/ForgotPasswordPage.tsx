import { AuthFormWrapper } from "@/components/AuthFormWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  return (
    <AuthFormWrapper
      title="Forgot Password"
      description="Enter your email to receive a password reset link."
      footerContent={
         <p className="px-8 text-center text-sm text-muted-foreground">
          Remember your password?{" "}
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
        <Button type="submit" className="w-full">Send Reset Link</Button>
      </form>
    </AuthFormWrapper>
  );
}