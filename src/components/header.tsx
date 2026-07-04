import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  onMobileMenuClick?: () => void;
}

export function Header({
  className,
  title = "Dashboard",
  onMobileMenuClick,
  ...props
}: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-4 z-30 mx-auto mt-4 flex h-14 w-[calc(100%-2rem)] max-w-3xl items-center gap-4 rounded-full border border-white/10 bg-white/5 px-5 backdrop-blur-md",
        className,
      )}
      {...props}
    >
      <div className="flex flex-1 items-center gap-2">
        <h1 className="text-base font-semibold tracking-tight">{title}</h1>
      </div>
      <nav className="hidden items-center gap-1 md:flex">
        <Button
          variant="ghost"
          className="rounded-full text-white/80 hover:bg-white/10 hover:text-white"
        >
          Work
        </Button>
        <Button
          variant="ghost"
          className="rounded-full text-white/80 hover:bg-white/10 hover:text-white"
        >
          About
        </Button>
      </nav>
      {onMobileMenuClick && (
        <Button
          variant="ghost"
          size="icon"
          className="mobile-menu-button rounded-full text-white/80 hover:bg-white/10 hover:text-white md:hidden"
          onClick={onMobileMenuClick}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      )}
    </header>
  );
}
