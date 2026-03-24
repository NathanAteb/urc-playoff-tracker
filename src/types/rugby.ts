
export interface Team {
  position: number;
  originalPosition?: number;
  logo: string;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  bPoints: number;
  pointsFor: number;
  pointsAgainst: number;
  pointsDiff: number;
  points: number;
  nextFixtures?: string[];
  // Track original stats to allow for resets
  originalWon?: number;
  originalDrawn?: number;
  originalLost?: number;
  originalBPoints?: number;
  originalPoints?: number;
  originalPlayed?: number;
}
