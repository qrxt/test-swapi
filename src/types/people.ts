export enum Gender {
  Male = "male",
  Female = "female",
  Unknown = "hermaphrodite",
  NotApplicable = "NotApplicable",
}

export interface Character {
  name: string;
  height: number | "unknown";
  mass: number | "unknown";
  gender: Gender;
  birthYear: string;
}
