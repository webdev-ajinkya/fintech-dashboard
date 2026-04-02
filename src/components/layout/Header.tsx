import ThemeToggle from "../controls/ThemeToggle";
import { ProfileMenu } from "./Profile";

export default function Header() {
  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-end px-4 md:px-6 gap-4">
      <ThemeToggle />
      <ProfileMenu />
    </header>
  );
}