import React from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const DashboardPage = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real application, this is where you would clear authentication tokens or session data.
    console.log('User logging out...');
    navigate('/'); // Navigate to the LoginPage, which is the root route in App.tsx
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
            </div>
            <CardTitle className="text-2xl">Welcome Back!</CardTitle>
            <CardDescription>You have successfully logged in to QuickLogin.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4 p-6">
            <p className="text-muted-foreground text-center text-sm">
              This is a protected dashboard area. In a real application, your content would be displayed here.
            </p>
            <Button onClick={handleLogout} className="w-full" variant="destructive">
              Logout
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;