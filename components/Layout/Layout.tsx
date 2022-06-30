import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r lg:flex lg:items-center lg:justify-center from-green-500 via-emerald-500 to-teal-500 lg:py-20">
      <div className="bg-white w-full min-h-screen lg:min-h-[80vh] lg:w-5/6 2xl:w-3/5 rounded-lg">
        <div className="w-full py-4 px-4">
          <Link href="/">
            <h1 className="logo-title text-center text-lg cursor-pointer">
              Recipe Smith
            </h1>
          </Link>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
