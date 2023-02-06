export enum Gender {
  Male = "Male",
  Female = "Female",
  Unknown = "Hermaphrodite",
  NotApplicable = "NotApplicable",
}

export interface Character {
  name: string;
  height: number;
  mass: number;
  gender: Gender;
  birthYear: string;
}
