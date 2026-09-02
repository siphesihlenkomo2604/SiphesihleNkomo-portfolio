import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-nude-400/15 dark:border-rose-400/15 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-nude-600/50 dark:text-rose-300/50 text-center sm:text-left">
          Designed with AI assistance <span className="mx-1">•</span> Siphesihle Nkomo © 2026
        </p>
        <a href="#hero" className="flex items-center gap-2 text-xs font-medium text-nude-400 dark:text-rose-400 hover:text-nude-600 dark:hover:text-rose-300 transition-colors">
          Back to top <ArrowUp className="w-3.5 h-3.5" />
        </a>
      </div>
    </footer>
  );
}
