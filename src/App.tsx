import { useState } from "react"
import { converter, type ConversionType, formatResult } from "./converter";
import { NumericFormat } from "react-number-format";
import { useRate } from "./useRate";
import clsx from "clsx";



export default function App() {

  const { data, isPending, isError} = useRate();

  const [manualRate, setManualRate] = useState('')

  const rate = data ?? manualRate;

  const [amount, setAmount] = useState<string>("");

  const [conversionType, setConversionType] = useState<ConversionType>('dollars');

  const convert = converter(amount, rate, conversionType);

  const error = amount !== '' && convert === null;

  const usd = conversionType === 'dollars' ? amount : convert === null ? '' : formatResult(convert, 'dollars');

  const irr = conversionType === 'rials' ? amount : convert === null ? '' : formatResult(convert, 'rials');







  return (
    <main className="w-full h-dvh justify-items-center content-center p-4">
      <div className="sm:w-125 w-full flex flex-col items-center gap-10 sm:p-15 p-5 rounded-lg shadow-2xl shadow-white/20">
        <h1 className="text-2xl md:text-3xl self-center whitespace-nowrap">Currency Converter</h1>

        <section className="space-y-2">
        <div className="flex flex-col gap-3 text-center text-lg">
          <p> Rate of Dollar in Rial</p>
          <p
            className={clsx('text-sm', isError && 'text-red-400')}>{isPending ? 'Loading...' : isError && manualRate === '' ? 'Could not load the rate. Please enter it' : data}</p>
        </div>
        {isError &&
          <NumericFormat
            value={rate}
            placeholder="EX:269000"
            thousandSeparator=','
            onChange={e => setManualRate((e.target.value).replaceAll(',', ''))}
            className="border-t border-b h-10 px-4 text-center" />
        }
      </section>

      <section className="flex flex-col gap-4">
        <div className=" flex border rounded-md items-center px-4 has-focus:outline has-focus:outline-white">
          <NumericFormat
            name="rials"
            value={irr}
            thousandSeparator=','
            aria-label="Amount in rials"
            placeholder="EX: 20,000,000"
            onChange={(e) => {
              setAmount((e.target.value).replaceAll(',', ''))
              setConversionType('rials')
            }}
            className="flex-1 h-15 focus:outline-none" />
          <div className="w-[20%] text-center"><p>Rials</p></div>
        </div>

        <div>
          <div className="flex border rounded-md items-center px-4 has-focus:outline has-focus:outline-white">
            <NumericFormat
              name="dollars"
              value={usd}
              placeholder="EX: 100"
              thousandSeparator=','
              aria-label="Amount in dollar"
              onChange={(e) => {
                setAmount((e.target.value).replaceAll(',', ''))
                setConversionType('dollars')
              }}
              className="flex-1 h-15 focus:outline-none" />
            <div className="w-[30%] content-center text-end"><p>Dollars</p></div>
          </div>
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-blue-500 w-fit place-self-end hover:cursor-pointer"
            onClick={() => setConversionType(prev => prev === "dollars" ? 'rials' : 'dollars')}>
            <path d="M16 13V11.5H10V9.5H16V8L19 10.5L16 13Z" fill="currentColor" />
            <path d="M8 17V15.5H14V13.5H8V12L5 14.5L8 17Z" fill="currentColor" />
          </svg>
        </div>


      </section>
      <p className="text-red-400 text-sm">{error ? 'Please enter a valid number' : ''}</p>

    </div>
    </main >
  )
}
