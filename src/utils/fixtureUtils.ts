// Helper function to extract team name and venue from fixture string
export const getFixtureInfo = (fixture: string | undefined) => {
  if (!fixture) return { team: null, venue: null, round: null };

  // Extract information using regex
  const match = fixture.match(/([A-Z\s]+)\s+\((H|A)\)\s+-\s+R(\d+)/);
  if (!match) return { team: null, venue: null, round: null };

  return {
    team: match[1].trim(),
    venue: match[2],
    round: match[3]
  };
};

// Display venue correctly - don't invert for display purposes
export const displayVenue = (venue: string | null) => {
  return venue; // Just return the venue as is from our data
};

// Get venue for special cases
export const getVenueForSpecialCase = (teamName: string, fixtureTeam: string | null, index: number, fixture: any) => {
  // 2025/26 season: venues are correct in the fixture strings, no overrides needed
  return fixture.venue;
};
