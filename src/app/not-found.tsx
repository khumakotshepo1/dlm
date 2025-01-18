import Link from 'next/link';
import { CircleIcon } from 'lucide-react';
import { TypographyH1, TypographyP } from '@/components/Typography';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="max-w-lg p-6 space-y-8 text-center bg-white shadow-lg rounded-xl dark:bg-foreground dark:text-foreground">
        {/* Spinner Icon */}
        <div className="flex justify-center">
          <CircleIcon className="h-16 w-16 text-nordGreenSlg animate-spin border-dotted border-4 border-nordRed rounded-full" />
        </div>

        {/* Title */}
        <TypographyH1 className="text-4xl sm:text-5xl font-extrabold text-nordGreenSlg">
          Page Not Found
        </TypographyH1>

        {/* Description */}
        <TypographyP className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </TypographyP>

        {/* Button */}
        <Link
          href="/"
          className="inline-block px-6 py-3 text-sm font-semibold text-white bg-nordGreenSlg rounded-full shadow-md transition-all transform hover:scale-105 hover:bg-nordGreenSlg/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nordGreenSlg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
