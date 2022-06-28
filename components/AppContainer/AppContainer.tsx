import SearchInput from "@/components/SearchInput";

export default function AppContainer() {
  return (
    <div className="w-full h-screen bg-white">
      <div className="w-full py-4 px-4">
        <h1 className="logo-title text-center text-lg">Recipe Smith</h1>
      </div>

      <SearchInput />
    </div>
  );
}
