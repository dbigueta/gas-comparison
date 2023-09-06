import { useState, useEffect } from 'react'

type ApiResponse = {
    conversion_rates: {
        CAD: number
    }
}

const useExchangeRate = () => {
    const [exchangeRate, setExchangeRate] = useState<ApiResponse | null>(null)
    
    useEffect(() => {
        const controller = new AbortController();

        fetch(
            `${process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_BASE_URL}/${process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY}/${process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_VERSION}/${process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_CURRENCY}`,
        {
            signal: controller.signal
        })
            .then(res => res.json())
            .then(data => setExchangeRate(data))
            .catch(() => new Error('Failed to fetch exchange rates'))
        
            return () => controller.abort();
    }, [])
    
    return exchangeRate;
}

export default useExchangeRate