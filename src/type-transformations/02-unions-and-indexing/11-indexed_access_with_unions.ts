import { Equal, Expect } from "../../helpers/type-utils";

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

// problem
// export type IndividualProgram = unknown;

// solution 1
export type IndividualProgram = (typeof programModeEnumMap)[
  | "ONE_ON_ONE"
  | "SELF_DIRECTED"
  | "PLANNED_ONE_ON_ONE"
  | "PLANNED_SELF_DIRECTED"];

// solution 2 exlude type
export type IndividualProgram2 = (typeof programModeEnumMap)[Exclude<
  keyof typeof programModeEnumMap,
  "GROUP" | "ANNOUNCEMENT"
>];

type tests = [
  Expect<
    Equal<
      IndividualProgram,
      "1on1" | "selfDirected" | "planned1on1" | "plannedSelfDirected"
    >
  >
];
