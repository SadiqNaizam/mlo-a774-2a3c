import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * Props for the AuthFormWrapper component.
 */
interface AuthFormWrapperProps {
  /**
   * The main title of the authentication form (e.g., "Log in" or "Create an account").
   */
  title: string;
  /**
   * A short description or subtitle displayed below the title.
   */
  description: string;
  /**
   * The main content of the form, typically including input fields and a submit button.
   */
  children: React.ReactNode;
  /**
   * The content to be displayed in the footer, usually for links like "Forgot password?" or "Don't have an account?".
   */
  footerContent: React.ReactNode;
}

/**
 * A reusable container component that provides a consistent layout for
 * authentication forms (e.g., Login, Sign Up, Forgot Password).
 * It uses a Card element to wrap the title, description, form content, and footer.
 */
const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
  title,
  description,
  children,
  footerContent,
}) => {
  console.log('AuthFormWrapper loaded');

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold tracking-tight">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {children}
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-center text-sm">
        {footerContent}
      </CardFooter>
    </Card>
  );
};

export default AuthFormWrapper;