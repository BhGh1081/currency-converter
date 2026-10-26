import { useState } from "react"
import { converter, type ConversionType } from "./converter";


const radio: { value: ConversionType, label: string }[] = [
  { value: 'USD_TO_IRR', label: 'Dollars to Rials' },
  { value: 'IRR_TO_USD', label: 'Rials to Dollars' }
]

export default function App() {

  const [amount, setAmount] = useState<string>("");

  const [rate, setRate] = useState<string>("");

  const [conversionType, setConversionType] = useState<ConversionType>('USD_TO_IRR');

  const result = converter(amount, rate, conversionType);




  return (
    <main className="w-full h-dvh bg-black flex justify-center items-center">
      <div className="flex flex-col gap-10  p-15 rounded-lg shadow-2xl shadow-white/20">
        <h1 className="text-3xl self-center">Currency Converter</h1>

        <section className="flex gap-10">
          {radio.map(item =>
            <label key={item.value}>
              <input
                type="radio"
                name="conversionType"
                value={item.value}
                checked={conversionType === item.value}
                onChange={() => setConversionType(item.value)}
              /> {item.label}
            </label>
          )}
        </section>

        <section className="flex flex-col gap-4">
          <input
            type="number"
            name="rate"
            value={rate}
            placeholder="price of one dollar in rials, EX: 269000"
            onChange={(e) => setRate(e.target.value)}
            className="h-10 border border-solid rounded-md p-4 placeholder:text-sm" />

          <input
            type="number"
            name="amount"
            value={amount}
            placeholder="Enter amount, EX: 10000"
            onChange={(e) => setAmount(e.target.value)}
            className="h-10 border border-solid rounded-md p-4 placeholder:text-sm" />
        </section>

        <section className="space-y-2 text-center">
          {amount !== "" && rate !== "" && !result &&
            <p className="text-red-400 text-[14px]">Please enter valid number</p>
          }
          <div className="w-full flex justify-between items-center">
            <p id="result" className="text-2xl font-semibold">
              {result ?? 0}
            </p>
            <span className="text-2xl">{conversionType === 'USD_TO_IRR' ? 'Rials' : '$'}</span>
          </div>

        </section>
      </div>
    </main>
  )
}
