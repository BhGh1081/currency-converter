import { useState } from "react"
import { converter, type ConversionType, formatResult } from "./converter";


const radio: { value: ConversionType, label: string }[] = [
  { value: 'USD_TO_IRR', label: 'Dollars to Rials' },
  { value: 'IRR_TO_USD', label: 'Rials to Dollars' }
]

export default function App() {

  const [amount, setAmount] = useState<string>("");

  const [rate, setRate] = useState<string>("");

  const [conversionType, setConversionType] = useState<ConversionType>('USD_TO_IRR');

  const result = (amount !== "" && rate !== "") ?
    converter(amount, rate, conversionType) : 0



  return (
    <main className="w-full h-dvh justify-items-center content-center p-4">
      <div className="sm:w-fit w-full flex flex-col gap-10 md:p-15 p-5 rounded-lg shadow-2xl shadow-white/20">
        <h1 className="text-2xl md:text-3xl self-center whitespace-nowrap">Currency Converter</h1>

        <section className="flex items-center md:items-start md:gap-10 gap-3">
          {radio.map(item =>
            <label key={item.value} className="max-md:border max-md:p-2 max-md:rounded-md max-md:w-full max-md:has-checked:bg-blue-900 max-md:text-center">
              <input
                type="radio"
                name="conversionType"
                value={item.value}
                checked={conversionType === item.value}
                onChange={() => setConversionType(item.value)}
                className="max-md:sr-only"
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

        <section className="w-full flex justify-between items-center">
          <p id="result" className="text-2xl font-semibold">
            {result === null ?
              <span className="text-red-400 text-[14px]">Please enter valid number</span> :
              formatResult(result, conversionType)
            }
          </p>
          <span className="text-2xl">{conversionType === 'USD_TO_IRR' ? 'Rials' : '$'}</span>
        </section>
      </div>
    </main>
  )
}
