type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500">
      <main>{children}</main>
    </div>
  );
}
