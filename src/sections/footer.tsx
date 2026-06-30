export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-sm text-neutral-400">
        <span>© {new Date().getFullYear()} YourBrand</span>

        <div className="flex gap-5">
          <a href="/about" className="hover:text-white transition">
            About
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}