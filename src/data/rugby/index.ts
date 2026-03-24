
import { Team } from "../../types/rugby";
import { irishTeams } from "./irishTeams";
import { welshTeams } from "./welshTeams";
import { italianTeams } from "./italianTeams";
import { scottishTeams } from "./scottishTeams";
import { southAfricanTeams } from "./southAfricanTeams";

// Combine all team arrays and sort by position
export const teams: Team[] = [
  ...irishTeams,
  ...welshTeams,
  ...italianTeams,
  ...scottishTeams,
  ...southAfricanTeams
].sort((a, b) => a.position - b.position);
