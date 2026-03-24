
// Data structure for URC17 and URC18 fixtures (2025/26 season)
// This stores the fixture data in a structured format for the last two rounds

interface TeamFixture {
  team: string; // The opposing team name
  venue: "H" | "A"; // Home or Away
}

interface URC1718FixturesData {
  [teamName: string]: {
    URC17: TeamFixture;
    URC18: TeamFixture;
  };
}

export const urc1718Fixtures: URC1718FixturesData = {
  "GLASGOW WARRIORS": {
    URC17: { team: "CARDIFF RUGBY", venue: "H" },
    URC18: { team: "ULSTER RUGBY", venue: "A" }
  },
  "DHL STORMERS": {
    URC17: { team: "ULSTER RUGBY", venue: "A" },
    URC18: { team: "CARDIFF RUGBY", venue: "A" }
  },
  "ULSTER RUGBY": {
    URC17: { team: "DHL STORMERS", venue: "H" },
    URC18: { team: "GLASGOW WARRIORS", venue: "H" }
  },
  "LEINSTER RUGBY": {
    URC17: { team: "EMIRATES LIONS", venue: "H" },
    URC18: { team: "OSPREYS", venue: "H" }
  },
  "CARDIFF RUGBY": {
    URC17: { team: "GLASGOW WARRIORS", venue: "A" },
    URC18: { team: "DHL STORMERS", venue: "H" }
  },
  "MUNSTER RUGBY": {
    URC17: { team: "CONNACHT RUGBY", venue: "A" },
    URC18: { team: "EMIRATES LIONS", venue: "H" }
  },
  "EMIRATES LIONS": {
    URC17: { team: "LEINSTER RUGBY", venue: "A" },
    URC18: { team: "MUNSTER RUGBY", venue: "A" }
  },
  "VODACOM BULLS": {
    URC17: { team: "ZEBRE PARMA", venue: "H" },
    URC18: { team: "BENETTON RUGBY", venue: "H" }
  },
  "CONNACHT RUGBY": {
    URC17: { team: "MUNSTER RUGBY", venue: "H" },
    URC18: { team: "EDINBURGH RUGBY", venue: "A" }
  },
  "OSPREYS": {
    URC17: { team: "SCARLETS", venue: "H" },
    URC18: { team: "LEINSTER RUGBY", venue: "A" }
  },
  "HOLLYWOODBETS SHARKS": {
    URC17: { team: "BENETTON RUGBY", venue: "H" },
    URC18: { team: "ZEBRE PARMA", venue: "H" }
  },
  "BENETTON RUGBY": {
    URC17: { team: "HOLLYWOODBETS SHARKS", venue: "A" },
    URC18: { team: "VODACOM BULLS", venue: "A" }
  },
  "EDINBURGH RUGBY": {
    URC17: { team: "DRAGONS RFC", venue: "A" },
    URC18: { team: "CONNACHT RUGBY", venue: "H" }
  },
  "SCARLETS": {
    URC17: { team: "OSPREYS", venue: "A" },
    URC18: { team: "DRAGONS RFC", venue: "H" }
  },
  "DRAGONS RFC": {
    URC17: { team: "EDINBURGH RUGBY", venue: "H" },
    URC18: { team: "SCARLETS", venue: "A" }
  },
  "ZEBRE PARMA": {
    URC17: { team: "VODACOM BULLS", venue: "A" },
    URC18: { team: "HOLLYWOODBETS SHARKS", venue: "A" }
  }
};
