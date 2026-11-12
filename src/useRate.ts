import { useQuery } from "@tanstack/react-query";

export const getRate = async (): Promise<string> => {

    const res = await fetch('/api/rate');

    if (!res.ok) throw new Error(`request faild: ${res.status}`);

    return res.json();
}



export function useRate() {

    return useQuery({
        queryKey: ['rate'],
        queryFn: getRate,
        staleTime: 5 * 60 * 1000,
        refetchInterval: 5 * 60 * 1000,
        refetchOnWindowFocus: false
    })

}