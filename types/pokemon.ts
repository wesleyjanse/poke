export const TYPE_BY_COLOR = {
  normal: "bg-[#C8C4BC]",
  fire: "bg-[#FF9F43]",
  water: "bg-[#54A0FF]",
  electric: "bg-[#F6C90E]",
  grass: "bg-[#6DC066]",
  ice: "bg-[#7ED4FF]",
  fighting: "bg-[#CF5242]",
  poison: "bg-[#B365B7]",
  ground: "bg-[#E8B058]",
  flying: "bg-[#7A9EE9]",
  psychic: "bg-[#FF6B9C]",
  bug: "bg-[#90C12C]",
  rock: "bg-[#A48F3E]",
  ghost: "bg-[#6950A1]",
  dragon: "bg-[#9374FF]",
  dark: "bg-[#6F6E6E]",
  steel: "bg-[#C5C5D1]",
  fairy: "bg-[#ED94B3]",
};

export declare type TPokeType = keyof typeof TYPE_BY_COLOR;

export interface IPokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    slot: number;
    type: {
      name: TPokeType;
    };
  }[];
}
