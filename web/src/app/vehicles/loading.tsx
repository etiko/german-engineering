export default function VehiclesLoading() {
  return (
    <div className="bg-[#f7f9fb] py-20">
      <div className="shell">
        <div className="h-14 w-80 max-w-full animate-pulse bg-[#dce5ec]" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="overflow-hidden border border-[#dce5ec] bg-white"
            >
              <div className="aspect-[4/3] animate-pulse bg-[#dce5ec]" />
              <div className="space-y-4 p-5">
                <div className="h-4 w-24 animate-pulse bg-[#dce5ec]" />
                <div className="h-8 w-48 animate-pulse bg-[#dce5ec]" />
                <div className="h-16 animate-pulse bg-[#eef3f6]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
