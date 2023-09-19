/* useMediaQuery Screen Sizes */
export const SCREENS = {
  SM: '(min-width: 37.5em)',
  MD: '(min-width: 48em)',
  LG: '(min-width: 75em)',
  XL: '(min-width: 90em)',
};

// Input Field IDs
export const INPUT_FIELD_IDS = {
  US_DISTANCE: 'usDistance',
  CAN_DISTANCE: 'canDistance',
  AVERAGE_LITRE_PER_100_KM: 'litresPer100km',
  LITRES: 'litres',
  CAD_LITRE_RATE: 'cadPerLitre',
  USD_GALLON_RATE: 'usdPerGallon',
};

export const INPUT_FIELDS_PATTERNS = {
  US_DISTANCE: '^\d{1,3}$',
  CAN_DISTANCE: '^\d{1,3}$',
  AVERAGE_LITRE_PER_100_KM: '^\d+(\.\d+)?$',
  LITRES: '^\d{1,3}$',
  CAD_LITRE_RATE: '^\d+(\.\d{1,2})?$',
  USD_GALLON_RATE: '^\d+(\.\d{1,2})?$',
}

// Calculation Variables
export const LITRES_PER_GALLON = 3.79;
export const HUNDRED_KM = 100;
export const TWO_WAY_DISTANCE = 2;
export const DEFAULT_USD_TO_CAD_RATE = 1.35;
