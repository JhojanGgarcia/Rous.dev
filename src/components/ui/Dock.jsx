export const Dock = () => {
  return (
    <>
      <h2 class="h2 px-2 mt-20 text-white">Tech Stack.</h2>
      <div class="relative w-full mt-4 py-14 px-2 border-t bg-[radial-gradient(circle_at_top,rgba(100,100,100,0.1)_0%,transparent_60%)] mask border-white/20  rounded-3xl flex items-center justify-center flex-col text-white">
        <div class="absolute h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-5"></div>
        <span class="absolute  w-[96px] mx-auto inset-x-1 -top-[1px] h-px bg-gradient-to-r from-fuchsia-400/0 via-white/30 to-fuchsia-400/0"></span>
        <div class="-translate-x-1/2 absolute bottom-0 left-1/2 mx-auto max-w-full transform-gpu pt-4  ">
          <div class="relative ">
            <div class="pointer-events-none  absolute right-0 bottom-0 left-0 z-10 h-[72px] max-w-full rounded-3xl   shadow-sm border-white/20" />
            <div class="flex items-end overflow-x-auto cardScrool rounded-3xl pl-2">
              <AppIcon imgSrc={"react.svg"} withoutBackground={true} />
              <AppIcon imgSrc={"astro.svg"} withoutBackground={true} />
              <AppIcon imgSrc={"nextjs.svg"} withoutBackground={true} />
              <AppIcon imgSrc={"html.svg"} withoutBackground={true} />
              <AppIcon imgSrc={"css.svg"} withoutBackground={true} />
              <AppIcon imgSrc={"tailwind.svg"} withoutBackground={true} />
              <AppIcon imgSrc={"javascript.svg"} withoutBackground={true} />
              <AppIcon imgSrc={"figma.svg"} withoutBackground={true} />
              <AppIcon imgSrc={"git.svg"} withoutBackground={true} />
              <AppIcon imgSrc={"vercel.svg"} withoutBackground={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function AppIcon({ imgSrc, withoutBackground }) {
  return (
    <div class=" group z-20 grid w-fit place-items-center py-2 px-4 pl-0">
      <div
        class={`pointer-events-none z-20  relative  inline size-14 transform-gpu  rounded-2xl  shadow-inner transition-all duration-200 ",
          ${withoutBackground ? "p-2" : ""}`}
      >
        <image
          alt="dock"
          class={`size-full  pointer-events-none select-none opacity-70 ${withoutBackground ? "object-contain" : "object-cover"}`}
          height={256}
          loading="lazy"
          preserveAspectRatio="xMidYMid slice"
          referrerpolicy="no-referrer"
          role="img"
          src={imgSrc}
          width={256}
        />
      </div>
    </div>
  );
}
