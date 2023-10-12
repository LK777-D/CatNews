import { fetchCrypto } from "@/utils";
import { CryptoT } from "@/types/Types";

const Crypto = async () => {
  const cryptoData = await fetchCrypto();
  const coinList = cryptoData.coins;

  return (
    <section>
      <h1 className="text-blue-900 text-2xl fontbold mb-5">CryptoCurrency </h1>
      <table className="  w-[20rem]">
        <thead className="text-gray-600">
          <tr>
            <th className="text-left p-2">Name</th>
            <th className="text-right">Price(USD)</th>
            <th className="text-right">Change%</th>
          </tr>
        </thead>
        <tbody className="fontsemibold">
          {coinList.slice(0, 20).map((coin: CryptoT) => {
            return (
              <tr
                key={coin.name}
                className="  hover:bg-gray-300 transition duration-300 ease-in-out cursor-pointer "
              >
                <th className="text-left p-3">{coin.name}</th>
                <th className="text-green-600 text-right">
                  ${coin.price.toFixed(2)}
                </th>
                <th
                  className={`${
                    coin.priceChange1h <= 0 ? "text-red-600" : "text-green-600"
                  } text-right`}
                >
                  {coin.priceChange1h}%
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Crypto;
