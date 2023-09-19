'use client';

import { useState, useEffect, useRef } from 'react';

import {
  INPUT_FIELD_IDS,
  INPUT_FIELDS_PATTERNS,
  LITRES_PER_GALLON,
  HUNDRED_KM,
  TWO_WAY_DISTANCE,
  DEFAULT_USD_TO_CAD_RATE,
} from '@/src/constants';
import TextField from '@/components/partials/TextField';
import Icon from '@/components/partials/icon/Icon';
import useExchangeRate from '@/src/hooks/useExchangeRate';
import { FormValues } from '@/src/types/forms';

interface HomeHeroProps {
  initialState: FormValues;
}

const HomeHero: React.FC<HomeHeroProps> = ({ initialState }) => {
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [form, setForm] = useState(initialState);

  const params = new URLSearchParams(form as any);
  const paramsString = params.toString();

  const exchangeRate = useExchangeRate();
  const cadExchangeRate = exchangeRate?.conversion_rates?.CAD || DEFAULT_USD_TO_CAD_RATE;

  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const totalSpent = (rate: number, litres: number) => {
    return rate * litres;
  };

  const litresSpentDriving = (distance: number, litresPer100km: number) => {
    // Multiply by 2 because distance is only one way. Need to include gas coming back as well.
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
  }: FormValues) => {
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    calculateResult();
    window.history.replaceState(null, '', '?' + paramsString);
  };

  const calculateResult = () => {
    setResult(calculateComparison(form));
    setShowResult(true);
  };

  const trimInput = (e: any, field: string) => {
    const value = e.target.value.trim();
    setForm({ ...form, [field]: value === '' ? 0 : parseFloat(value) });
  };

  const allAttributesAreNotZero = (obj: FormValues) => {
    const values = Object.values(obj);
    const allValuesAreZero = values.every((value) => value !== 0);
    return allValuesAreZero;
  };

  useEffect(() => {
    if (showResult === false && allAttributesAreNotZero(form)) {
      calculateResult();
    }
  }, []);

  const textFields = [
    {
      id: INPUT_FIELD_IDS.US_DISTANCE,
      required: true,
      pattern: INPUT_FIELDS_PATTERNS.US_DISTANCE,
      max: 99,
      title: "Should be a whole number that's at most 3 digits long",
      label: 'US Distance (km)',
      placeholder: '50',
      tooltipText: 'One way distance from your starting location to the US gas station.',
      autoFocus: true,
    },
    {
      id: INPUT_FIELD_IDS.CAN_DISTANCE,
      required: true,
      pattern: INPUT_FIELDS_PATTERNS.CAN_DISTANCE,
      max: 99,
      title: "Should be a whole number that's at most 3 digits long",
      label: 'CAN Distance (km)',
      placeholder: '13',
      tooltipText: 'One way distance from your starting location to the Canadian gas station.',
      autoFocus: true,
    },
    {
      id: INPUT_FIELD_IDS.AVERAGE_LITRE_PER_100_KM,
      required: true,
      pattern: INPUT_FIELDS_PATTERNS.AVERAGE_LITRE_PER_100_KM,
      max: 20,
      step: 0.1,
      title: 'The gas consumption rate, can be found on your vehicles dashboard',
      label: 'Average L/100km',
      placeholder: '9.1',
      tooltipText:
        "The amount of litres your vehicle uses to travel 100km. This should be on your vehicle's dashboard.",
    },
    {
      id: INPUT_FIELD_IDS.LITRES,
      required: true,
      pattern: INPUT_FIELDS_PATTERNS.LITRES,
      title: "Should be a whole number that's 1 to 3 digits long",
      label: 'Litres',
      placeholder: '175',
      tooltipText: 'The amount of litres filling up your vehicle and the jerry cans.',
    },
    {
      id: INPUT_FIELD_IDS.CAD_LITRE_RATE,
      required: true,
      pattern: INPUT_FIELDS_PATTERNS.CAD_LITRE_RATE,
      max: 5,
      min: 0.01,
      step: 0.01,
      title: 'The gas price of the Canadian gas station',
      label: 'CAD $/Litre',
      placeholder: '1.93',
    },
    {
      id: INPUT_FIELD_IDS.USD_GALLON_RATE,
      required: true,
      pattern: INPUT_FIELDS_PATTERNS.USD_GALLON_RATE,
      max: 20,
      min: 0.01,
      step: 0.01,
      maxLength: 4,
      title: 'The gas price of the American gas station',
      label: 'USD $/Gallon',
      placeholder: '4.39',
    },
  ];

  return (
    <section className="py-16 transition-[padding] height_lg:py-32">
      <div className="wrapper">
        <h1 className="text-xl text-center font-bold mb-8 md:mb-12 text-neutral-100">Gas Comparison</h1>
        <form ref={formRef} onSubmit={handleSubmit} className="max-w-[31.25rem] mx-auto md:max-w-[51.5rem]">
          <fieldset className="grid gap-6 mb-8 md:mb-12 md:grid-cols-2 md:gap-y-8">
            {textFields.length > 0 &&
              textFields.map((textField, i) => {
                return (
                  <TextField
                    key={i}
                    id={textField.id}
                    required={textField.required}
                    pattern={textField.pattern}
                    max={textField.max}
                    min={textField.min}
                    step={textField.step}
                    title={textField.title}
                    label={textField.label}
                    placeholder={textField.placeholder}
                    tooltipText={textField.tooltipText}
                    autoFocus={textField.autoFocus}
                    state={form}
                    setState={(e) => trimInput(e, textField.id)}
                  />
                );
              })}
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
