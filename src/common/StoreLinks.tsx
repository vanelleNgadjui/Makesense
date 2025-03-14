import AppleLogo from "../assets/logos/app_store.svg";
import GooglePlay from "../assets/logos/google_play.svg";
import StoreLink from "../common/StoreLink";

interface StoreLinksProps {
  type: BtnTypes;
}

export enum BtnTypes {
  Standard,
  Variant,
}

function StoreLinks({ type }: StoreLinksProps) {
  if (type === BtnTypes.Standard) {
    return (
      <div className="flex flex-col mb-4 items-center space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
        <StoreLink
          href="https://www.apple.com/app-store"
          upperText="Download on the"
          lowerText="App Store"
          logo={AppleLogo}
          target="_blank"
          className="flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800"
        />
        <StoreLink
          href="https://play.google.com"
          upperText="Get it on"
          lowerText="Google Play"
          logo={GooglePlay}
          target="_blank"
          className="flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800"
        />
      </div>
    );
  }
  if (type === BtnTypes.Variant) {
    return (
      <div className="flex flex-col items-center sm:space-y-2 pace-x-2 sm:space-y-0">
          <StoreLink
              href="https://www.apple.com/app-store"
              upperText="Download on the"
              lowerText="App Store"
              logo={AppleLogo}
              target="_blank"
              className="flex gap-3 rounded-lg bg-zinc-800 px-2 py-2 text-white hover:bg-zinc-950 active:bg-zinc-800"
          />
          <StoreLink
              href="https://play.google.com"
              upperText="Get it on"
              lowerText="Google Play"
              logo={GooglePlay}
              target="_blank"
              className="flex gap-3 rounded-lg bg-zinc-800 px-2 py-2 text-white hover:bg-zinc-950 active:bg-zinc-800"
          />
      </div>
    );
  }
}

export default StoreLinks;
