
export type ConversionType = "dollars" | "rials";

export function converter(amount:string, rate: string, conversionType: ConversionType): number | null {

    const amountNum = Number(amount);
    const rateNum = Number(rate);

    if (amount === '' || amountNum < 0 || rateNum <= 0) return null;

    return conversionType === "dollars" ? amountNum * rateNum : amountNum / rateNum
}


export function formatResult(value: number , conversionType: string) :  string | number {

    return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: conversionType === 'dollars' ? 5 : 0
    }).format(value)
}