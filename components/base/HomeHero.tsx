'use client';

import { useState, useRef } from 'react';
import TextField from '@/components/partials/TextField';

import { INPUT_FIELD_IDS, LITRES_PER_GALLON, HUNDRED_KM, TWO_WAY_DISTANCE } from '@/src/constants';
import Icon from '@/components/partials/icon/Icon';
import getExchangeRate from '@/src/libs/getExchangeRate';

type Values = {
  usDistance: number;
  canDistance: number;
  litresPer100km: number;
  litres: number;
  cadPerLitre: number;
  usdPerGallon: number;
};

const HomeHero = () => {
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [cadExchangeRate, setCadExchangeRate] = useState(0);

  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const totalSpent = (rate: number, litres: number) => {
    return rate * litres;
  };

  const litresSpentDriving = (distance: number, litresPer100km: number) => {
    // Multiply by 2 because distance is only towards gas station. Need to include gas coming back from gas station as well.
    const totalDistance = distance * TWO_WAY_DISTANCE;
    const litresSpent = (totalDistance * litresPer100km) / HUNDRED_KM;

    return litresSpent;
  };

  const calculateComparison = ({
    usDistance,
    canDistance,
    litresPer100km,
    litres,
    cadPerLitre,
    usdPerGallon,
  }: Values) => {
    const usdPerLitre = usdPerGallon / LITRES_PER_GALLON;
    const cadPerLitreAfterExchangeRate = usdPerLitre * cadExchangeRate;
    const litresSpentTravellingUS = litresSpentDriving(usDistance, litresPer100km);
    const litresSpentTravellingCAN = litresSpentDriving(canDistance, litresPer100km);
    const totalSpentCanadaRate = totalSpent(cadPerLitre, litres + litresSpentTravellingCAN);
    const totalSpentUsRate = totalSpent(cadPerLitreAfterExchangeRate, litres + litresSpentTravellingUS);
    const difference = totalSpentCanadaRate - totalSpentUsRate;
    const roundedDifference = parseFloat(difference.toFixed(2));

    return roundedDifference;
  };

  const getValues = (values: Array<Element>) => {
    const data = {
      usDistance: 0,
      canDistance: 0,
      litresPer100km: 0,
      litres: 0,
      cadPerLitre: 0,
      usdPerGallon: 0,
    };

    for (let value of values) {
      const numberValue = parseFloat((value as HTMLInputElement).value);
      switch (value.id) {
        case INPUT_FIELD_IDS.US_DISTANCE:
          data.usDistance = numberValue;
          break;
        case INPUT_FIELD_IDS.CAN_DISTANCE:
          data.canDistance = numberValue;
          break;
        case INPUT_FIELD_IDS.AVERAGE_LITRE_PER_100_KM:
          data.litresPer100km = numberValue;
          break;
        case INPUT_FIELD_IDS.LITRES:
          data.litres = numberValue;
          break;
        case INPUT_FIELD_IDS.CAD_LITRE_RATE:
          data.cadPerLitre = numberValue;
          break;
        case INPUT_FIELD_IDS.USD_GALLON_RATE:
          data.usdPerGallon = numberValue;
          break;
        default:
          data;
      }
    }

    return data;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (formRef.current === null) {
      return;
    }

    const formElementsArray = Array.from(formRef.current.elements);
    const inputFields = formElementsArray.filter((element: Element) => {
      return element.nodeName === 'INPUT';
    });

    const data = getValues(inputFields);

    // Encapsulate next line into a hook
    getExchangeRate().then((data) => setCadExchangeRate(data.conversion_rates.CAD));
    setResult(calculateComparison(data));
    setShowResult(true);
  };

  return (
    <section className="py-16 transition-[padding] height_lg:py-32">
      <div className="wrapper">
        <h1 className="text-xl text-center font-bold mb-8 md:mb-12 text-neutral-100">Gas Comparison</h1>
        <form ref={formRef} onSubmit={handleSubmit} className="max-w-[31.25rem] mx-auto md:max-w-[51.5rem]">
          <fieldset className="grid gap-6 mb-8 md:mb-12 md:grid-cols-2 md:gap-y-8">
            <TextField
              id={INPUT_FIELD_IDS.US_DISTANCE}
              required
              pattern="^\d{1,3}$"
              maxLength={3}
              title="Should be a whole number that's at most 3 digits long"
              label="US Distance (km)"
              placeholder="50"
              tooltipText="One way distance from your starting location to the US gas station."
              autoFocus
            />
            <TextField
              id={INPUT_FIELD_IDS.CAN_DISTANCE}
              required
              pattern="^\d{1,3}$"
              maxLength={3}
              title="Should be a whole number that's at most 3 digits long"
              label="CAD Distance (km)"
              placeholder="13"
              tooltipText="One way distance from your starting location to the Canadian gas station."
              autoFocus
            />
            <TextField
              id={INPUT_FIELD_IDS.AVERAGE_LITRE_PER_100_KM}
              required
              pattern="^\d+(\.\d+)?$"
              maxLength={4}
              title="The gas consumption rate, can be found on your vehicles dashboard"
              label="Average L/100km"
              placeholder="9.1"
              tooltipText="The amount of litres your vehicle uses to travel 100km. This should be on your vehicle's dashboard."
            />
            <TextField
              id={INPUT_FIELD_IDS.LITRES}
              required
              pattern="^\d{1,3}$"
              maxLength={3}
              title="Should be a whole number that's 1 to 3 digits long"
              label="Litres"
              placeholder="175"
              tooltipText="The amount of litres filling up your vehicle and the jerry cans."
            />
            <TextField
              id={INPUT_FIELD_IDS.CAD_LITRE_RATE}
              required
              pattern="^\d+(\.\d{1,2})?$"
              maxLength={4}
              title="The gas price of the Canadian gas station"
              label="CAD $/Litre"
              placeholder="1.93"
            />
            <TextField
              id={INPUT_FIELD_IDS.USD_GALLON_RATE}
              required
              pattern="^\d+(\.\d{1,2})?$"
              maxLength={4}
              title="The gas price of the American gas station"
              label="USD $/Gallon"
              placeholder="4.39"
            />
          </fieldset>
          <button
            ref={buttonRef}
            type="submit"
            className="text-neutral-100 button font-bold bg-unique-teal transition-[background-color] hover:disabled:cursor-not-allowed hover:bg-unique-teal/60 disabled:bg-unique-teal disabled:opacity-50 w-full block md:mx-auto md:max-w-[14.375rem]">
            Calculate
          </button>
        </form>
        {showResult && (
          <div className="flex flex-wrap gap-x-2 md:gap-x-4 gap-y-0 justify-center items-center mt-12">
            <p className="text-sm text-secondary-400">Money {result < 0 ? 'Lost' : 'Saved'}:</p>
            <div className="flex items-center justify-center gap-2">
              <p className={`text-lg ${result < 0 ? 'text-error-400' : 'text-success-400'}`}>${Math.abs(result)} CAD</p>
              <Icon className={result < 0 ? 'text-error-400 rotate-180' : 'text-success-400'} name="arrow" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeHero;
