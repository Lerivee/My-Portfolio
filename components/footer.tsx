export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Valerie Onoja Amarachi. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm">
          Built with <span className="text-primary">Next.js</span> & <span className="text-primary">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  )
}
