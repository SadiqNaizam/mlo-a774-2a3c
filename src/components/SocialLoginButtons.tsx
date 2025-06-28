import React from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

// A simple, self-contained SVG component for the Google icon.
const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" {...props}>
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.16c1.56 0 2.95.55 4.06 1.59l3.17-3.17C17.45 1.99 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
    <path d="M1 1h22v22H1z" fill="none" />
  </svg>
);

const SocialLoginButtons = () => {
  console.log('SocialLoginButtons loaded');

  const handleSocialLogin = (provider: 'google' | 'github') => {
    // This is a placeholder for the actual OAuth flow.
    // In a real application, this would redirect to the provider's login page.
    console.log(`Initiating ${provider} login...`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
      <Button variant="outline" type="button" onClick={() => handleSocialLogin('google')}>
        <GoogleIcon className="mr-2 h-4 w-4" />
        Google
      </Button>
      <Button variant="outline" type="button" onClick={() => handleSocialLogin('github')}>
        <Github className="mr-2 h-4 w-4" />
        GitHub
      </Button>
    </div>
  );
};

export default SocialLoginButtons;