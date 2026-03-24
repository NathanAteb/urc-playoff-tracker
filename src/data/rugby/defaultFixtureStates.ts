
// This file contains the default fixture states for the 2025/26 season
// Each team has an array of 5 values (0-7) representing fixture states:
// 0: No result, 1: Loss, 2: Loss BP, 3: Loss 2BP, 4: Draw, 5: Draw BP, 6: Win, 7: Win BP
// All R14-R18 fixtures start unplayed

export const defaultFixtureStates: Record<string, Array<0|1|2|3|4|5|6|7>> = {
  "GLASGOW WARRIORS": [0, 0, 0, 0, 0],
  "DHL STORMERS": [0, 0, 0, 0, 0],
  "ULSTER RUGBY": [0, 0, 0, 0, 0],
  "LEINSTER RUGBY": [0, 0, 0, 0, 0],
  "CARDIFF RUGBY": [0, 0, 0, 0, 0],
  "MUNSTER RUGBY": [0, 0, 0, 0, 0],
  "EMIRATES LIONS": [0, 0, 0, 0, 0],
  "VODACOM BULLS": [0, 0, 0, 0, 0],
  "CONNACHT RUGBY": [0, 0, 0, 0, 0],
  "OSPREYS": [0, 0, 0, 0, 0],
  "HOLLYWOODBETS SHARKS": [0, 0, 0, 0, 0],
  "BENETTON RUGBY": [0, 0, 0, 0, 0],
  "EDINBURGH RUGBY": [0, 0, 0, 0, 0],
  "SCARLETS": [0, 0, 0, 0, 0],
  "DRAGONS RFC": [0, 0, 0, 0, 0],
  "ZEBRE PARMA": [0, 0, 0, 0, 0]
};

// The default team order based on 2025/26 standings after Round 13
export const defaultTeamOrder = [
  "GLASGOW WARRIORS",
  "DHL STORMERS",
  "ULSTER RUGBY",
  "LEINSTER RUGBY",
  "CARDIFF RUGBY",
  "MUNSTER RUGBY",
  "EMIRATES LIONS",
  "VODACOM BULLS",
  "CONNACHT RUGBY",
  "OSPREYS",
  "HOLLYWOODBETS SHARKS",
  "BENETTON RUGBY",
  "EDINBURGH RUGBY",
  "SCARLETS",
  "DRAGONS RFC",
  "ZEBRE PARMA"
];
