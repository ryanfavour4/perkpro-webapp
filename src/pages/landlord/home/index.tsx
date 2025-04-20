import Input from "@/components/input";
import SearchMicroscope from "@/components/svg/search-microscope";
import SideNavbar from "@/layout/side-navbar";
import TopNavbar from "@/layout/top-navbar";
import TradingViewWidget from "@/widget/trading-view-widget";
import { useTheme } from "@/context/theme";
import BottomTabbar from "@/layout/bottom-tabbar";
import CoinPriceTrackerCard from "@/components/coin-price-tracker-card";
import CryptoHighlightCardWidget from "@/components/crypto-highlight-card-widget";
import { CRYPTOCURRENCIES } from "@/constants/crypto-currencies";
import { WatchListCard } from "@/components/watchlist-card";
import TierTradeCard from "@/components/tier-trade-card";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen bg-light-300">
      <TopNavbar />

      {/* DESKTOP VIEW */}
      <main className="mt-4 hidden w-full md:mt-0 md:block">
        <div className="mx-auto grid grid-cols-12 gap-5">
          <div className="h-full min-h-screen overflow-y-auto md:col-span-3 lg:col-span-2">
            <SideNavbar />
          </div>
          <div className="grid grid-cols-10 gap-5 overflow-hidden md:col-span-9 lg:col-span-10">
            <div className="col-span-7">
              <div className="pt-5">
                <div className="mb-3 flex gap-4 overflow-x-auto">
                  <CoinPriceTrackerCard coin="btcusdt" />
                  <CoinPriceTrackerCard coin="trxusdt" />
                  <CoinPriceTrackerCard coin="solusdt" />
                  <CoinPriceTrackerCard coin="xrpusdt" />
                </div>
              </div>
              <TradingViewWidget height={450} />

              <div
                className={`container mt-6 overflow-hidden rounded-xl px-5 py-7 shadow-sm ${theme === "dark" ? "bg-light-200" : "bg-light"}`}
              >
                <h1 className="pb-5 text-center text-2xl font-bold">Trade plans</h1>{" "}
                {/* Heading goes here */}
                <div className="flex justify-between overflow-x-auto pb-4 pt-2 gap-6">
                  <TierTradeCard
                    title="tier 1"
                    product="BTC/USD"
                    purchaseDuration="2hrs"
                    releaseDate="2024/12/09"
                    orderAmount="$0.9999"
                    expectedReturn="$2.9999"
                  />
                  <TierTradeCard
                    title="tier 2"
                    product="BTC/USD"
                    purchaseDuration="2hrs"
                    releaseDate="2024/12/09"
                    orderAmount="$0.9999"
                    expectedReturn="$2.9999"
                  />
                  <TierTradeCard
                    title="tier 3"
                    product="BTC/USD"
                    purchaseDuration="2hrs"
                    releaseDate="2024/12/09"
                    orderAmount="$0.9999"
                    expectedReturn="$2.9999"
                  />
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-span-3">
              <CryptoListHighlight />
            </div>
          </div>
        </div>
      </main>

      {/* MOBILE VIEW */}
      <section className="container block px-2 md:hidden">
        <div className="mt-8">
          <div className="m-auto flex w-full max-w-sm items-start justify-center">
            <Input
              type="text"
              name="search"
              placeholder="Search for coin / token"
              autoComplete="on"
              className="!rounded-[4rem]"
              state={{ value: "" }}
              setState={(value) => console.log(value)}
              icon={<SearchMicroscope className="h-6 w-6" />}
            />
          </div>
        </div>

        <div className="my-10 px-3">
          <h2 className="mb-6 flex flex-col justify-center text-base font-semibold tracking-wide text-primary md:text-lg">
            All
            <div className="w-full max-w-7 border-t-2 border-primary" />
          </h2>

          <h2 className="mb-6 text-base font-semibold text-dark md:text-lg">Watchlist</h2>

          <div className="flex gap-4 overflow-x-auto">
            <WatchListCard coin={CRYPTOCURRENCIES[0].ws} />
            <WatchListCard coin={CRYPTOCURRENCIES[1].ws} />
            <WatchListCard coin={CRYPTOCURRENCIES[2].ws} />
            <WatchListCard coin={CRYPTOCURRENCIES[3].ws} />
            <WatchListCard coin={CRYPTOCURRENCIES[4].ws} />
            <WatchListCard coin={CRYPTOCURRENCIES[5].ws} />
            <WatchListCard coin={CRYPTOCURRENCIES[6].ws} />
            <WatchListCard coin={CRYPTOCURRENCIES[7].ws} />
            <WatchListCard coin={CRYPTOCURRENCIES[8].ws} />
            <WatchListCard coin={CRYPTOCURRENCIES[9].ws} />
            <WatchListCard coin={CRYPTOCURRENCIES[10].ws} />
          </div>
        </div>

        <div
          className={`mt-10 rounded-t-3xl px-1 pt-3 ${theme === "dark" ? "bg-gradient-to-b from-light-100 to-light-200" : "bg-light"}`}
        >
          <CryptoListHighlight />
        </div>

        {/* BOTTOM TAB BAR */}
        <BottomTabbar />
      </section>

      {/*  */}
    </div>
  );
}

export function CryptoListHighlight() {
  const { theme } = useTheme();

  return (
    <div
      className={`h-full md:border-l md:shadow ${theme === "dark" ? "md:bg-light-200" : "md:bg-light"}`}
    >
      <div className="flex max-h-svh flex-col gap-4 overflow-y-auto px-1.5 py-5">
        <CryptoHighlightCardWidget coin="adausdt" usd={100} />
        <CryptoHighlightCardWidget coin="avaxusdt" usd={100} />
        <CryptoHighlightCardWidget coin="bnbusdt" usd={100} />
        <CryptoHighlightCardWidget coin="btcusdt" usd={100} />
        <CryptoHighlightCardWidget coin="dogeusdt" usd={100} />
        <CryptoHighlightCardWidget coin="dotusdt" usd={100} />
        <CryptoHighlightCardWidget coin="ethusdt" usd={100} />
        <CryptoHighlightCardWidget coin="solusdt" usd={100} />
        <CryptoHighlightCardWidget coin="trxusdt" usd={100} />
        <CryptoHighlightCardWidget coin="xrpusdt" usd={100} />
      </div>
    </div>
  );
}
