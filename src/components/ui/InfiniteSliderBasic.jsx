import { InfiniteSlider } from "./InfiniteSlider";

export function InfiniteSliderBasic() {
  return (
    <InfiniteSlider gap={30} reverse>
      <img src="/nextjs.svg" alt="Prada logo" className="h-[40px] w-auto" />
      <img
        src="/react.svg"
        alt="Apple Music logo"
        className="h-[40px] w-auto"
      />
      <img src="/astro.svg" alt="Chrome logo" className="h-[40px] w-auto" />
      <img src="/html.svg" alt="Strava logo" className="h-[40px] w-auto" />
      <img src="/css.svg" alt="Nintendo logo" className="h-[40px] w-auto" />
      <img src="/tailwind.svg" alt="Prada logo" className="h-[40px] w-auto" />
      <img
        src="/javascript.svg"
        alt="Jquery logo"
        className="h-[40px] w-auto"
      />
      <img src="/figma.svg" alt="Prada logo" className="h-[40px] w-auto" />
    </InfiniteSlider>
  );
}
