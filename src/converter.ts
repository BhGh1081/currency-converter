
export type ConversionType = "USD_TO_IRR" | "IRR_TO_USD";

export function converter(amount: string, rate: string, conversionType: ConversionType): number | null {

    const amountNum = Number(amount);
    const rateNum = Number(rate);

    if (amount === "" || rate === "" || amountNum <= 0 || rateNum <= 0) return null

    return conversionType === "USD_TO_IRR" ? amountNum * rateNum : amountNum / rateNum
}


export function formatResult(value: number , conversionType: string) :  string | number {

    return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: conversionType === 'USD_TO_IRR' ? 0 : 2
    }).format(value)
}