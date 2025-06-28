import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";

// Custom Components
import AuthFormWrapper from "@/components/AuthFormWrapper";
import SocialLoginButtons from "@/components/SocialLoginButtons";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// shadcn/ui Components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

// Define the form validation schema using Zod
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
});

const LoginPage = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  console.log('LoginPage loaded');

  // Initialize react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    console.log("Form submitted with values:", values);

    // Simulate an API call
    setTimeout(() => {
      // Simulate a successful login
      if (values.email === "user@example.com" && values.password === "password") {
        toast({
          title: "Login Successful",
          description: "Welcome back! Redirecting you to your dashboard.",
        });
        navigate("/dashboard"); // Navigate to dashboard on success
      } else {
        // Simulate a failed login
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <AuthFormWrapper
          title="Welcome Back"
          description="Enter your credentials to access your account."
          footerContent={
            <div className="text-center w-full">
              <Link
                to="/forgot-password" // Path from App.tsx
                className="text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
              >
                Forgot password?
              </Link>
              <p className="mt-2 text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link
                  to="/sign-up" // Path from App.tsx
                  className="font-semibold text-primary hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          }
        >
          <div className="grid gap-4">
            <SocialLoginButtons />
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="name@example.com"
                          type="email"
                          autoComplete="email"
                          {...field}
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="••••••••"
                          type="password"
                          autoComplete="current-password"
                          {...field}
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Log In
                </Button>
              </form>
            </Form>
          </div>
        </AuthFormWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;