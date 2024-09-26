export const DecorativeTilesBackground = () => {
  const rows = 9;
  const columns = 20;

  return (
    <div className="pointer-events-none absolute overflow-x-hidden overflow-y-hidden inset-0 z-[-1] flex items-center justify-center select-none">
      <div
        className="grid grid-cols-[repeat(20,200px)] items-center justify-center"
        style={{
          width: "100vw",
          height: "100vh",
          maskImage:
            "radial-gradient(ellipse at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
      >
        {Array.from({ length: rows * columns }).map((_, index) => {
          return (
            <div
              className="relative border-white/10 border-r border-b  opacity-50"
              key={`tile-${index}`}
              style={{
                width: "100%",
                height: "100%",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
