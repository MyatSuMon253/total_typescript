export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: MouseEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

type ClickEvent = Extract<Event, { type: "click" }>;
