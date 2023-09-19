'use client';

import HomeHero from '@/components/base/HomeHero';
import { INPUT_FIELD_IDS } from '@/src/constants';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const getQueryParams = () => {
    const searchParams = useSearchParams();

    const formInputs = {
      usDistance: parseFloat(searchParams.get(INPUT_FIELD_IDS.US_DISTANCE) || '0'),
      canDistance: parseFloat(searchParams.get(INPUT_FIELD_IDS.CAN_DISTANCE) || '0'),
      litresPer100km: parseFloat(searchParams.get(INPUT_FIELD_IDS.AVERAGE_LITRE_PER_100_KM) || '0'),
      litres: parseFloat(searchParams.get(INPUT_FIELD_IDS.LITRES) || '0'),
      cadPerLitre: parseFloat(searchParams.get(INPUT_FIELD_IDS.CAD_LITRE_RATE) || '0'),
      usdPerGallon: parseFloat(searchParams.get(INPUT_FIELD_IDS.USD_GALLON_RATE) || '0'),
    };
    return formInputs;
  };

  const formInputs = getQueryParams();

  return <HomeHero initialState={formInputs} />;
}
