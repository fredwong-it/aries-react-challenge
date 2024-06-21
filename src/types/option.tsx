

export type OptionTypeType = 'Call' | 'Put';
export type LongShortType = 'long' | 'short';

export type OptionType = {
  strike_price: number;
  type: OptionTypeType;
  bid: number;
  ask: number;
  long_short: LongShortType;
  expiration_date: string;
}

