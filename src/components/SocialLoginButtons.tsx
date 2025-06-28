import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa"; // Assuming react-icons is available, if not, we can use Lucide icons

export function SocialLoginButtons() {
  return (
    <div className="w-full">
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline">
          {/* Using text as icon fallback if lucide-react doesn't have brand icons */}
          Github
        </Button>
        <Button variant="outline">
          Google
        </Button>
      </div>
    </div>
  );
}