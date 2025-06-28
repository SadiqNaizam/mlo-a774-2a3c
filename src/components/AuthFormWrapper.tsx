import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface AuthFormWrapperProps {
  title: string;
  description: string;
  children: ReactNode;
  footerContent: ReactNode;
}

export function AuthFormWrapper({ title, description, children, footerContent }: AuthFormWrapperProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
        <CardFooter>
          {footerContent}
        </CardFooter>
      </Card>
    </div>
  );
}