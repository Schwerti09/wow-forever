export type EntityStatus = "verified" | "draft" | "needs-review";

export interface SourceRecord {
  name: string;
  sourceUrl?: string;
  status: EntityStatus;
}

export interface WorldEntity {
  id: string;
  name: string;
  type: "quest" | "item" | "zone" | "npc" | "boss" | "dungeon";
  status: EntityStatus;
  sources: SourceRecord[];
}

export const seedEntities: WorldEntity[] = [
  {
    id: "zone-frostgraben",
    name: "Frostgraben",
    type: "zone",
    status: "draft",
    sources: [{ name: "Lagerfeuer Interner Quellstand", status: "draft" }],
  },
  {
    id: "quest-first-lantern",
    name: "Die erste Laterne",
    type: "quest",
    status: "needs-review",
    sources: [{ name: "Quellenprüfung ausstehend", status: "needs-review" }],
  },
];
