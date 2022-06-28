type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20">
      <main className="w-full min-h-screen">{children}</main>
    </div>
  );
}
