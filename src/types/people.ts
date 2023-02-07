export enum Gender {
  Male = "male",
  Female = "female",
  Unknown = "hermaphrodite",
  NotApplicable = "NotApplicable",
}

export type EyeColor = "brown" | "red" | "blue" | "white";
export interface Character {
  name: string;
  height: number | "unknown";
  mass: number | "unknown";
  gender: Gender;
  birthYear: string;
  eyeColor: EyeColor;
  hairColor: string; // TODO: union
  skinColor: string; // TODO: union
}
