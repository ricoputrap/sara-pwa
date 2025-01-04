import MenuItem from "./menu-item";

export default function Home() {
  return (
    <main className="px-5 h-screen">
      <h4 className="text-sm mt-4">
        Hello <strong>Nicolas</strong>
      </h4>

      <h2 className="text-2xl mt-3">Let us help you enhance your stay!</h2>

      <div className="grid grid-cols-2 gap-5 mt-8">
        <MenuItem label="Food & Beverage" targetPath="/fnb" />
        <MenuItem label="Housekeeping" targetPath="/housekeeping" />
        <MenuItem label="Maintenance" targetPath="/maintenance" />
        <MenuItem label="Laundry" targetPath="/laundry" />
      </div>
    </main>
  )
}
