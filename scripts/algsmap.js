﻿var scramblesMap = {
  1: [
    "R' U R2 U2' R U2 R2 U' R U R2 U2' R' U2 R'",
    "R' U2 R2 U2 R U2' R2 U2' R U R2 U2' R' U2 R'",
    "R2' U2' R2' U2' R2' U2 R' U R U2 R2 U2' R2 U R2",
    "R' U2 R2' U R2 U R U' R2 U' R2' U2 R' U R",
  ],
  2: [
    "R U2 R2' U2 R U2' R U' R' U2' R' U2 R2 U' R'",
    "R U2' R2 U' R2' U' R' U R2' U R2 U2' R U' R'",
    "R2 U2 R2 U2 R2 U2' R U' R' U2' R2' U2 R2' U' R2'",
    "R U2' R2' U2' R' U2 R2' U2 R' U' R2' U2 R U2' R",
  ],
  3: [
    "R U2 R2' U2 R2' U R2 U2 R2 U2' R U' R' U R'",
    "R U2 R' U2 R2 U R2' U2 R U2' R U' R' U R'",
    "R' U R2' U2 R2 U R U' R2 U2' R2' U2' R' U R",
    "R U2 R2' U2' R U2 R U R' U2 R' U2' R2 U2 R'",
  ],
  4: [
    "R U' R U R' U2 R2' U2' R2' U' R2 U2' R2 U2' R'",
    "R U' R U R' U2 R' U2' R2 U' R2' U2' R U2' R'",
    "R' U' R U2 R2 U2 R2' U R' U' R2' U2' R2 U' R",
    "R U2' R2' U2 R U2' R U' R' U2' R' U2 R2 U2' R'",
  ],
  5: [
    "R2 U R2' U2 R2 U2 R2' U2' R2 U R2' U R2 U2' R2'",
    "R2 U R2' U' R2 U2' R2' U2 R2 U' R2' U R2 U2' R2'",
    "R2 U2 R2' U' R2 U R2' U2' R2 U2 R2' U R2 U' R2'",
    "R2 U2 R2' U' R2 U' R2' U2 R2 U2' R2' U2' R2 U' R2'",
  ],
  6: [
    "R2 U2' R2' U R2 U R2' U2' R2 U2 R2' U2 R2 U R2'",
    "R2 U2' R2' U R2 U' R2' U2 R2 U2' R2' U' R2 U R2'",
    "R2 U' R2' U R2 U2 R2' U2' R2 U R2' U' R2 U2 R2'",
    "R2 U' R2' U2' R2 U2' R2' U2 R2 U' R2' U' R2 U2 R2'",
  ],
  7: [
    "R U' R' U2 R2 U R2' U' R2 U2 R2' U R U R U2' R2'",
    "R U' R' U2' R2 U R' U R U' R' U2 R' U2' R2 U' R2'",
    "R2' U' R2' U2' R2' U2 R' U R2' U2' R2' U R2 U' R2' U' R",
    "R2 U R2' U2 R U2' R U R' U' R U' R2' U2 R U R'",
  ],
  8: [
    "R2 U R2 U2 R2 U2' R U' R2 U2 R2 U' R2' U R2 U R'",
    "R' U R U2 R2' U' R U' R' U R U2' R U2 R2' U R2",
    "R' U R U2' R2' U' R2 U R2' U2' R2 U' R' U' R' U2 R2",
    "R U' R2' U' R2 U R2' U2' R2' U R' U2 R2' U2' R2' U' R2'",
    ],
  9: [
    "R U2 R' U2 R' U2' R2 U' R' U R' U2 R U2 R U' R'",
    "R U R' U2' R' U2' R U' R U R2' U2 R U2' R U2' R'",
    "R U2 R' U R2' U R U2' R2' U2 R2' U2' R' U2 R2 U' R2' U2 R'",
    "R2 U R' U R' U2 R' U2' R2 U' R' U R' U2 R U2 R2 U' R2'",
  ],
  10: [
    "R' U2' R U2' R U2 R2' U R U' R U2' R' U2' R' U R",
    "R' U' R U2 R U2 R' U R' U' R2 U2' R' U2 R' U2 R",
    "R U R' U2' R2 U2' R2' U' R U R U2 R' U' R' U2' R U' R'",
    "R U2' R' U' R' U2 R2' U R2' U R U' R U' R2 U2' R2 U2' R'",
  ],
  11: [
    "R' U' R U' R U2 R2' U' R2 U' R2' U2' R U R' U2 R",
    "R U2' R' U2' R U' R2' U2' R U' R U R2' U2 R2 U2 R'",
    "R' U2' R U' R' U2 R2 U R2' U R2 U2' R' U R' U R",
    "R U2' R2' U2' R2 U' R' U R' U2 R2 U R' U2 R U2 R'",
  ],
  12: [
    "R U R' U R' U2' R2 U R2' U R2 U2 R' U' R U2' R'",
    "R' U2 R2 U2 R2' U R U' R U2' R2' U' R U2' R' U2' R",
    "R U2 R' U R U2' R2' U' R2 U' R2' U2 R U' R U' R'",
    "R' U2 R U2 R' U R2 U2 R' U R' U' R2 U2' R2' U2' R",
  ],
  13: [
    "R2 U2 R2' U R2 U' R2' U2' R2 U' R2' U2 R2 U2' R2'",
    "R2' U2 R2 U R2' U' R2 U2' R2' U' R2 U2 R2' U2' R2",
    "R2 U2' R2' U2 R2 U' R2' U2 R2 U R2' U' R2 U2' R2'",
    "R2' U2' R2 U2 R2' U' R2 U2 R2' U R2 U' R2' U2' R2",
  ],
  14: [
    "R2 U2' R2' U' R2 U R2' U2 R2 U R2' U2' R2 U2 R2'",
    "R2' U2' R2 U' R2' U R2 U2 R2' U R2 U2' R2' U2 R2",
    "R2 U2 R2' U2' R2 U R2' U2' R2 U' R2' U R2 U2 R2'",
    "R2' U2 R2 U2' R2' U R2 U2' R2' U' R2 U R2' U2 R2",
  ],
  15: [
    "R2 U2' R2' U' R2 U2' R2' U R2 U2 R2' U R2 U2 R2'",
    "R2 U2' R2' U' R2 U2' R2' U R2' U2 R2 U R2' U2 R2",
    "R2' U2' R2 U' R2' U2' R2 U R2 U2 R2' U R2 U2 R2'",
    "R2' U2' R2 U' R2' U2' R2 U R2' U2 R2 U R2' U2 R2",
  ],
  16: [
    "R2 U2 R2' U R2 U2 R2' U' R2 U2' R2' U' R2 U2' R2'",
    "R2 U2 R2' U R2 U2 R2' U' R2' U2' R2 U' R2' U2' R2",
    "R2' U2 R2 U R2' U2 R2 U' R2 U2' R2' U' R2 U2' R2'",
    "R2' U2 R2 U R2' U2 R2 U' R2' U2' R2 U' R2' U2' R2",
  ],
  17: [
    "R' U2' R U2' R' U' R U R' U2' R' U2' R U' R' U2' R2",
    "R U R U2 R2' U R U' R U2' R' U2' R' U2' R U2' R'",
    "R U2 R2 U' R' U2 R2 U2' R2 U2 R U2' R2' U R2' U2' R'",
    "R2 U2' R2' U2' R2 U' R U R' U R2' U R2 U2' R U' R2",
  ],
  18: [
    "R U2 R' U2 R U R' U' R U2 R U2 R' U R U2 R2'",
    "R' U2' R2' U R U2' R2' U2 R2' U2' R' U2 R2 U' R2 U2 R",
    "R' U' R' U2' R2 U' R' U R' U2 R U2 R U2 R' U2 R",
    "R U2 R' U2 R U R2 U' R2' U' R' U' R U2 R2 U R2",
  ],
  19: [
    "R U R U R' U R U R' U2' R U' R2' U2' R U R'",
    "R U2 R U2' R' U' R' U' R' U R2' U2' R' U2 R2' U' R",
    "R U2 R U2' R' U' R' U' R' U2 R2' U2 R' U2' R2' U2' R",
    "R2' U' R U2' R2 U2' R2' U' R2 U' R2 U R2 U' R U' R'",
  ],
  20: [
    "R' U' R' U' R U' R' U' R U2 R' U R2 U2 R' U' R",
    "R2 U R' U2 R2' U2 R2 U R2' U R2' U' R2' U R' U R",
    "R' U2' R' U2 R U R U R U2' R2 U2' R U2 R2 U2 R'",
    "R' U2' R' U2 R U R U R U' R2 U2 R U2' R2 U R'",
  ],
  21: [
    "R' U2' R U R' U' R U' R' U2 R U2' R' U2' R",
    "R2' U' R U R2 U R2' U2 R2 U2 R2 U2' R U R' U2 R2",
    "R2' U R2 U R2 U' R2 U' R2' U2 R U R U2' R' U2 R2",
    "R U R2' U2 R2 U2 R2' U R U R' U' R U' R' U2 R",
  ],
  22: [
    "R U2 R' U' R U R' U R U2' R' U2 R U2 R'",
    "R2 U R' U' R2' U' R2 U2' R2' U2' R2' U2 R' U' R U2' R2'",
    "R2 U' R2' U' R2' U R2' U R2 U2' R' U' R' U2 R U2' R2'",
    "R' U' R2 U2' R2' U2' R2 U' R' U' R U R' U R U2' R'",
  ],
  23: [
    "R' U2' R U R2' U' R U' R' U R2 U' R' U R' U R U R",
    "R' U' R' U' R U' R U R2' U' R U R' U R2 U' R' U2 R",
    "R2' U2' R U' R U R2 U2' R U R U2' R2 U R U' R U2' R2'",
    "R2 U R2' U2 R2 U2' R2' U R2 U2' R2' U' R2 U2 R2' U' R2 U' R2'",
  ],
  24: [
    "R2 U2 R2 U R' U' R U' R2' U R U' R U R' U R' U2 R2'",
    "R2 U2' R U' R U R2' U' R U R' U R2 U' R' U R' U R2'",
    "R2 U2' R U' R U' R' U R' U' R2 U R' U R U' R2' U2' R2'",
    "R2 U' R U' R U R2' U' R U' R' U R2 U' R' U R' U2 R2'",
  ],
  25: [
    "R' U2 R' U2' R2' U2 R2' U' R2 U' R' U' R2' U2 R U2' R",
    "R' U2 R' U2' R2 U R U R2' U R2 U2' R2 U2 R U2' R",
    "R' U2 R' U2' R2 U R U R2' U2 R2 U2 R2 U2' R U2 R",
    "R U2 R U2' R2 U2 R2 U2 R2' U R U R2 U2' R' U2 R'",
  ],
  26: [
    "R U R2' U' R2 U2' R2' U2 R U' R' U2 R2 U2 R'",
    "R U R2 U2 R U2' R2 U' R2' U2' R U' R2' U2' R2",
    "R U2' R2 U2 R2' U2' R2 U2 R2' U2' R' U' R2' U2' R2",
    "R U2' R2' U' R2 U2' R U2 R2 U R U' R2 U2' R2'",
  ],
  27: [
    "R' U' R2 U R2' U2 R2 U2' R' U R U2' R2' U2' R",
    "R U2 R2 U2' R2' U2 R2 U2' R2' U2 R' U R2' U2 R2",
    "R U2 R2' U R2 U2 R U2' R2 U' R U R2 U2 R2'",
    "R U' R2 U2' R U2 R2 U R2' U2 R U R2' U2 R2",
  ],
  28: [
    "R U' R' U2' R U' R U R2' U2 R U2' R U' R' U' R'",
    "R2 U' R' U2' R U' R U R2' U2 R U2' R U' R' U' R2'",
    "R2' U' R' U2' R U' R U R2' U2 R U2' R U' R' U' R2",
    "R' U' R' U2' R U' R U R2' U2 R U2' R U' R' U' R",
  ],
  29: [
    "R U R U2 R' U R' U' R2 U2' R' U2 R' U R U R'",
    "R2 U R U2 R' U R' U' R2 U2' R' U2 R' U R U R2'",
    "R2' U R U2 R' U R' U' R2 U2' R' U2 R' U R U R2",
    "R' U R U2 R' U R' U' R2 U2' R' U2 R' U R U R",
  ],
  30: [
    "R U R U R' U2 R' U2' R2 U' R' U R' U2 R U R'",
    "R2 U R U R' U2 R' U2' R2 U' R' U R' U2 R U R2'",
    "R2' U R U R' U2 R' U2' R2 U' R' U R' U2 R U R2",
    "R' U R U R' U2 R' U2' R2 U' R' U R' U2 R U R",
  ],
  31: [
    "R U' R' U' R U2' R U2 R2' U R U' R U2' R' U' R'",
    "R2 U' R' U' R U2' R U2 R2' U R U' R U2' R' U' R2'",
    "R2' U' R' U' R U2' R U2 R2' U R U' R U2' R' U' R2",
    "R' U' R' U' R U2' R U2 R2' U R U' R U2' R' U' R",
  ],
  32: [
    "R U2' R2 U2' R2' U' R2 U2' R2 U2' R U2' R' U' R U2' R'",
    "R U2' R2 U2' R2' U' R2 U2' R2 U' R U2 R' U R U2 R'",
    "R U2' R2' U2' R2 U' R2' U2' R U2' R U2' R' U' R U2' R'",
    "R U2' R2' U2' R2 U' R2' U2' R U' R U2 R' U R U2 R'",
  ],
  33: [
    "R' U2 R2 U2 R2' U R2 U2 R' U R' U2' R U' R' U2' R",
    "R' U2 R2 U2 R2' U R2 U2 R' U2 R' U2 R U R' U2 R",
    "R' U2 R2' U2 R2 U R2' U2 R2' U R' U2' R U' R' U2' R",
    "R' U2 R2' U2 R2 U R2' U2 R2' U2 R' U2 R U R' U2 R",
  ],
  34: [
    "R U2' R' U' R U2' R' U R2' U2 R2' U R2 U2 R2' U2 R'",
    "R U2' R' U' R U2' R' U R' U2 R2 U R2' U2 R2 U2 R'",
    "R U2 R' U R U2 R' U2 R2' U2 R2' U R2 U2 R2' U2 R'",
    "R U2 R' U R U2 R' U2 R' U2 R2 U R2' U2 R2 U2 R'",
  ],
  35: [
    "R' U2' R U' R' U2' R U2' R U2' R2' U' R2 U2' R2' U2' R",
    "R' U2' R U' R' U2' R U2' R2 U2' R2 U' R2' U2' R2 U2' R",
    "R' U2 R U R' U2 R U' R U2' R2' U' R2 U2' R2' U2' R",
    "R' U2 R U R' U2 R U' R2 U2' R2 U' R2' U2' R2 U2' R",
  ],
  36: [
    "R2' U2 R2' U2' R2 U' R U2' R' U' R U2' R2 U2 R2 U2' R2",
    "R2' U2 R2' U2' R2' U2 R' U R U2 R' U R2' U2 R2 U2' R2",
    "R' U2 R2 U2' R2' U' R U2' R' U' R U2' R U2 R2' U2' R",
    "R' U2 R2 U2' R' U2 R' U R U2 R' U R2 U2 R2' U2' R",
  ],
  37: [
    "R U2' R2' U2 R U2' R U' R' U2' R U' R2' U2' R2 U2 R'",
    "R U2' R2' U2 R2 U R' U2 R U R' U2 R' U2' R2 U2 R'",
    "R2 U2' R2 U2 R2 U2' R U' R' U2' R U' R2 U2' R2' U2 R2'",
    "R2 U2' R2 U2 R2' U R' U2 R U R' U2 R2' U2' R2' U2 R2'",
  ],
  38: [
    "R U2' R' U2' R2' U R' U' R2' U R' U2' R2 U R U R' U' R2",
    "R U2' R' U' R U' R2 U R U' R2 U' R2 U R U R' U' R2",
    "R U2 R U R2 U' R' U2' R U2' R U' R' U2' R2' U R' U R",
    "R2 U R' U R' U R' U' R' U' R2' U' R' U2 R U R2' U' R2'",
  ],
  39: [
    "R' U2 R U R' U R2' U' R' U R2' U R2' U' R' U' R U R2'",
    "R' U2 R U2 R2 U' R U R2 U' R U2 R2' U' R' U' R U R2'",
    "R2' U' R U' R U' R U R U R2 U R U2' R' U' R2 U R2",
    "R' U2' R' U' R2' U R U2 R' U2 R' U R U2 R2 U' R U' R'",
  ],
  40: [
    "R U2 R2 U2 R U' R U R U' R U R2 U2' R2' U2' R' U' R2 U' R2'",
    "R2' U' R2 U' R' U2' R2' U2' R2 U R U' R U R U' R U2 R2 U2 R",
    "R U R2' U2 R2 U2 R2' U R U R U2' R' U' R U R' U2' R U' R'",
    "R U2' R U2' R2' U2 R2 U2 R2' U2 R2 U2' R2' U' R U R' U2' R U' R'",
  ],
  41: [
    "R2 U R2' U R U2 R2 U2 R2' U' R' U R' U' R' U R' U2' R2' U2' R'",
    "R' U2' R2' U2' R' U R' U' R' U R' U' R2' U2 R2 U2 R U R2' U R2",
    "R U R2' U2 R U' R' U R' U2 R' U2 R U2' R U2' R2' U' R2' U' R",
    "R U2 R' U2 R U' R' U' R U2 R2 U R2 U R U' R2 U' R2' U R'",
  ],
  42: [
    "R2 U2 R U2' R2' U2 R2' U2' R U2' R' U' R2 U R2 U' R' U R2'",
    "R2' U R' U' R2 U R2 U' R' U2' R U2' R2' U2 R2' U2' R U2 R2",
    "R2' U R' U2 R2' U2 R2' U' R2 U2 R2 U' R2' U2 R2' U2 R' U R2'",
    "R U' R U R U2' R2' U' R' U R2' U2 R' U' R2' U2' R U2' R'",
  ],
  43: [
    "R2 U' R U R2' U' R2' U R U2 R' U2 R2 U2' R2 U2 R' U2' R2'",
    "R2' U2' R' U2 R2 U2' R2 U2 R' U2 R U R2' U' R2' U R U' R2",
    "R U2 R' U2 R2 U R U2' R2 U' R U R2 U2 R' U' R' U R'",
    "R' U R' U' R' U2 R2 U R U' R2 U2' R U R2 U2 R' U2 R",
  ],
  44: [
    "R' U2 R' U2 R' U2 R2 U2 R2 U2' R U R2' U R U R2 U R",
    "R U2 R2 U R U' R2' U2' R2 U2 R2 U R U2' R2' U' R2' U2' R'",
    "R U R2' U R2' U R U2' R U2 R U2' R2' U R2 U' R2 U' R'",
    "R U R' U' R2 U R2 U' R2' U2' R2 U2' R2' U2 R2' U2 R U2' R'",
  ],
  45: [
    "R U2' R U2' R U2' R2' U2' R2' U2 R' U' R2 U' R' U' R2' U' R'",
    "R' U2' R2' U' R' U R2 U2 R2' U2' R2' U' R' U2 R2 U R2 U2 R",
    "R U R2' U R' U' R2' U R2' U R2 U' R2 U R2' U2 R2' U2 R",
    "R2 U2 R2' U R2 U' R2 U2' R2 U2 R U R' U2 R2' U2' R2' U2 R2'",
  ],
  46: [
    "R' U' R2' U' R' U' R2 U' R' U2 R2' U2' R2' U2' R U2' R U2' R",
    "R U2 R2 U R2 U2 R' U' R2' U2' R2' U2 R2 U R' U' R2' U2' R'",
    "R U R2' U2 R2 U2 R U R2' U R' U' R2' U' R2' U' R' U2 R",
    "R U R' U R2 U2' R2' U2 R2 U' R2' U2 R U' R' U2 R2 U2 R2'",
  ],
  47: [
    "R U R2 U R U R2' U R U2' R2 U2 R2 U2 R' U2 R' U2 R'",
    "R' U2' R2' U' R2' U2' R U R2 U2 R2 U2' R2' U' R U R2 U2 R",
    "R2 U2' R' U' R2 U2' R2' U' R2' U R2 U' R2 U' R U R U2' R2",
    "R2 U' R2' U2' R2 U' R2' U' R2 U' R2' U2' R2 U R2' U2 R2 U' R2'",
  ],
  48: [
    "R U R' U2 R U' R' U2' R' U2 R U2 R U2' R2' U2' R",
    "R' U2 R2 U2 R' U2' R' U2' R U2 R U R' U2' R U' R'",
    "R' U R2 U R U R' U R U2' R' U' R2' U2 R U R' U R",
    "R' U' R U' R' U2' R2 U R U2 R' U' R U' R' U' R2' U' R",
  ],
  49: [
    "R U2' R2' U2' R U2 R U2 R' U2' R' U' R U2 R' U R",
    "R' U' R U2' R' U R U2 R U2' R' U2' R' U2 R2 U2 R'",
    "R U R' U R U2 R2' U' R' U2' R U R' U R U R2 U R'",
    "R U' R2' U' R' U' R U' R' U2 R U R2 U2' R' U' R U' R'",
  ],
  50: [
    "R U2 R' U' R2 U R' U R U2' R' U R' U R U2 R'",
    "R U2 R2 U R U' R' U R2' U' R2 U' R U R' U' R2' U' R'",
    "R' U R2 U2' R' U2' R2 U R U R2' U' R' U' R' U' R2' U' R",
    "R U2' R' U R U' R U R2' U R2 U R2' U2' R2 U' R' U2' R'",
  ],
  51: [
    "R' U2' R U R2' U' R U' R' U2 R U' R U' R' U2' R",
    "R U' R2' U2 R U2 R2' U' R' U' R2 U R U R U R2 U R'",
    "R' U2' R2' U' R' U R U' R2 U R2' U R' U' R U R2 U R",
    "R U2 R2 U2' R U R U' R2' U2 R2' U R' U R' U' R2 U2 R'",
  ],
  52: [
    "R U2' R' U' R U' R U2 R' U' R U' R2' U R U2' R'",
    "R U R2 U R U' R' U R2' U R2 U' R U R' U' R2' U2' R'",
    "R' U R2 U R U R U R2 U' R' U' R2' U2 R U2 R2' U' R",
    "R2 U R2' U R2 U R2' U' R2 U R2' U2 R2 U2' R2' U R2 U' R2'",
    ],
  53: [
    "R' U2 R U R' U R' U2' R U R' U R2 U' R' U2 R",
    "R U' R2' U' R' U' R' U' R2' U R U R2 U2' R' U2' R2 U R'",
    "R' U' R2' U' R' U R U' R2 U' R2' U R' U' R U R2 U2 R",
    "R' U2 R2 U2 R' U' R' U2 R2 U' R' U R U2' R' U R U2' R'",
  ],
  54: [
    "R U' R' U2 R U2 R' U2' R' U2' R2 U R U2' R2 U2' R2' U' R2'",
    "R U R' U R2 U2' R2' U' R2 U2' R2 U2' R2 U' R' U R' U2 R",
    "R U R' U R2' U2' R2 U' R2' U2' R U2' R2 U' R' U R' U2 R",
    "R2' U2 R' U' R2 U2' R2 U2 R' U2' R' U2 R U' R2' U R U R2'",
  ],
  55: [
    "R' U R U2' R' U2' R U2 R U2 R2' U' R' U2 R2' U2 R2 U R2",
    "R U2' R2 U2' R U R2' U R2' U' R2 U' R2 U' R' U' R2' U2' R2",
    "R2 U2' R U R2' U2 R2' U2' R U2 R U2' R' U R2 U' R' U' R2",
    "R' U' R U' R2 U2 R2' U R2 U2 R' U2 R2' U R U' R U2' R'",
  ],
  56: [
    "R U2' R U2 R' U2' R' U R U2 R U2' R' U2 R'",
    "R U2' R U2 R' U2' R' U2' R U2' R U2 R' U2' R'",
    "R U2' R U2 R' U2' R' U R U2' R U2 R' U2' R'",
    "R U2' R U2 R' U2' R' U' R U2 R U2' R' U2 R'",
  ],
  57: [
    "R' U2 R' U2' R U2 R U2 R' U2 R' U2' R U2 R",
    "R' U2 R' U2' R U2 R U' R' U2' R' U2 R U2' R",
    "R U R' U2' R' U2 R U2' R U R' U2' R' U2 R",
    "R U2' R U R' U2 R' U2' R U2 R U2 R' U2 R'",
  ],
  58: [
    "R2 U R2' U2 R2 U2 R2' U2' R2 U R2' U2 R2 U2 R2'",
    "R2 U R2' U' R2 U2' R2' U2 R2 U' R2' U2 R2 U2 R2'",
    "R2' U R2 U2 R2' U2 R2 U2' R2' U R2 U2 R2' U2 R2",
    "R2' U R2 U' R2' U2' R2 U2 R2' U' R2 U2 R2' U2 R2",
  ],
  59: [
    "R2 U' R2' U R2 U2 R2' U2' R2 U R2' U2' R2 U2' R2'",
    "R2 U' R2' U2' R2 U2' R2' U2 R2 U' R2' U2' R2 U2' R2'",
    "R2' U' R2 U R2' U2 R2 U2' R2' U R2 U2' R2' U2' R2",
    "R2' U' R2 U2' R2' U2' R2 U2 R2' U' R2 U2' R2' U2' R2",
  ],
  60: [
    "R2 U2' R2' U2' R2 U R2' U2' R2 U2 R2' U R2 U' R2'",
    "R2 U2' R2' U2' R2 U' R2' U2 R2 U2' R2' U2' R2 U' R2'",
    "R2' U2' R2 U2' R2' U R2 U2' R2' U2 R2 U R2' U' R2",
    "R2' U2' R2 U2' R2' U' R2 U2 R2' U2' R2 U2' R2' U' R2",
  ],
  61: [
    "R2 U2 R2' U2 R2 U R2' U2' R2 U2 R2' U2 R2 U R2'",
    "R2 U2 R2' U2 R2 U' R2' U2 R2 U2' R2' U' R2 U R2'",
    "R2' U2 R2 U2 R2' U R2 U2' R2' U2 R2 U2 R2' U R2",
    "R2' U2 R2 U2 R2' U' R2 U2 R2' U2' R2 U' R2' U R2",
  ],
  62: [
    "R2 U2' R2' U' R2 U R2' U' R2 U2' R U2' R2 U' R2' U2' R2",
    "R2 U2' R2' U' R2 U2' R U2' R2 U' R2' U R2 U' R2' U2' R2",
    "R2' U2' R2 U' R2' U R2 U' R2' U2' R' U2' R2' U' R2 U2' R2'",
    "R2' U2' R2 U' R2' U2' R' U2' R2' U' R2 U R2' U' R2 U2' R2'",
  ],
  63: [
    "R2 U2 R2' U R2 U2 R U2 R2 U R2' U' R2 U R2' U2 R2",
    "R2 U2 R2' U R2 U' R2' U R2 U2 R U2 R2 U R2' U2 R2",
    "R2' U2 R2 U R2' U2 R' U2 R2' U R2 U' R2' U R2 U2 R2'",
    "R2' U2 R2 U R2' U' R2 U R2' U2 R' U2 R2' U R2 U2 R2'",
  ],
  64: [
    "R U2' R2 U' R' U R2 U2' R U R2' U' R U' R2' U2' R' U2 R2",
    "R U2' R2 U' R' U R2 U2' R U R2' U' R' U2 R' U2' R2' U' R'",
    "R2 U R2' U R2 U2 R2' U' R2 U2 R2' U2 R2 U R2' U2' R2 U R2'",
    "R2' U R2 U R2 U' R U2' R U2 R2 U2' R2 U2 R U R U2' R2",
  ],
  65: [
    "R U R' U2 R U2 R2 U' R U R U2 R' U2 R U2 R2' U R2",
    "R U R' U2' R U R' U2' R U' R' U2' R U2 R' U' R U2 R'",
    "R U R' U2' R U2 R' U2 R U R' U2 R U2' R' U' R U2 R'",
    "R2 U' R2' U' R2 U2' R2' U R2 U2' R2' U2' R2 U' R2' U2 R2 U' R2'",
  ],
  66: [
    "R2 U2' R2' U' R2 U R2' U2' R2 U R2' U2' R2 U2 R2' U R2 U' R2'",
    "R2 U2' R2' U' R2 U R2' U2' R2 U' R2' U2 R2 U2' R2' U2' R2 U' R2'",
    "R2' U2' R2 U' R2' U R2 U2' R2' U R2 U2' R2' U2 R2 U R2' U' R2",
    "R2' U2' R2 U' R2' U R2 U2' R2' U' R2 U2 R2' U2' R2 U2' R2' U' R2",
  ],
  67: [
    "R U' R2' U' R' U' R2 U2' R2 U2 R2 U2' R U2' R U R2 U R'",
    "R2 U2 R2' U R2 U2' R2' U R2 U2' R2' U' R2 U2' R2' U2' R2 U' R2'",
    "R2 U2 R2' U R2 U2' R2' U R2' U2' R2 U' R2' U2' R2 U2' R2 U' R2'",
    "R2' U2 R2 U R2' U2' R2 U R2 U2' R2' U' R2 U2' R2' U2' R2' U' R2",
  ],
  68: [
    "R2 U2' R2' U' R2 U2' R2' U R2 U2' R2' U' R2 U R2' U' R2 U2' R2'",
    "R2 U2' R2' U' R2 U2' R2' U R2' U2' R2 U' R2' U R2 U' R2' U2' R2",
    "R2' U2' R2 U' R2' U2' R2 U R2 U2' R2' U' R2 U R2' U' R2 U2' R2'",
    "R2' U2' R2 U' R2' U2' R2 U R2' U2' R2 U' R2' U R2 U' R2' U2' R2",
  ],
  69: [
    "R2' U R' U' R' U2' R2' U2 R U R U' R U2' R U2' R2' U' R2",
    "R2 U2 R2' U R2 U2 R2' U' R2 U2 R2' U R2 U' R2' U R2 U2 R2'",
    "R2 U2 R2' U R2 U2 R2' U' R2' U2 R2 U R2' U' R2 U R2' U2 R2",
    "R2' U2 R2 U R2' U2 R2 U' R2 U2 R2' U R2 U' R2' U R2 U2 R2'",
  ],
  70: [
    "R U2' R2 U' R' U2' R2 U R2 U R' U' R2 U2 R2' U2' R2' U' R",
    "R U2' R' U R U2 R U2 R' U R' U' R U' R U' R' U' R'",
    "R2 U R U2 R U2' R' U' R2' U2' R2' U' R' U2' R U2 R U R2",
    "R' U2' R U' R' U2' R2 U2' R' U' R2' U2' R2' U' R2 U2' R2' U2 R'",
  ],
  71: [
    "R' U2 R U' R' U2' R' U2' R U' R U R' U R' U R U R",
    "R' U2 R2' U R U2 R2' U' R2' U' R U R2' U2' R2 U2 R2 U R'",
    "R2 U' R2 U' R2 U2' R2 U2 R2 U2' R U R U R' U R2' U R2'",
    "R2' U2 R2' U2 R2' U' R2' U2 R2' U2' R2' U2 R' U' R2 U2' R2 U2' R2",
  ],
  72: [
    "R U R' U2 R U' R' U R U2 R2' U' R U' R' U2 R",
    "R2' U R U R' U' R2 U R2 U2' R2' U' R U2 R' U2' R U2' R2'",
    "R2' U R2' U R U2' R2 U2' R U2 R2 U2' R U' R' U' R2 U' R2",
    "R2' U R2' U R U' R2 U2 R U2' R2 U2 R U' R' U' R2 U' R2",
  ],
  73: [
    "R' U' R U2' R' U R U' R' U2' R2 U R' U R U2' R'",
    "R2 U' R2 U' R' U R2' U2' R' U2 R2' U2' R' U R U R2' U R2'",
    "R2 U' R2 U' R' U2 R2' U2 R' U2' R2' U2 R' U R U R2' U R2'",
    "R2 U' R' U' R U R2' U' R2' U2 R2 U R' U2' R U2 R' U2 R2",
  ],
  74: [
    "R' U2' R U R' U R2 U2' R' U' R U R' U2' R U' R'",
    "R2 U2 R2' U R2 U2 R2 U' R U2' R U2 R2' U R U' R U2' R'",
    "R2 U2 R' U2 R U2' R' U R2 U2 R2' U' R2' U R U' R' U' R2",
    "R2 U2' R2 U2 R2' U R2 U2 R2' U R2' U2 R2 U2 R2' U2 R2 U2' R2'",
  ],
  75: [
    "R U2 R' U' R U' R2' U2 R U R' U' R U2 R' U R",
    "R2 U2' R2' U2 R2 U2 R2 U2' R2' U' R2 U2' R2' U R2' U2 R2 U2' R2'",
    "R2 U2' R2' U2 R2 U2 R2 U2' R2' U' R2 U2' R2' U2' R2' U2' R2 U2 R2'",
    "R2 U2' R2' U2 R2 U2 R2' U2' R2 U' R2' U2' R2 U R2' U2 R2 U2' R2'",
  ],
  76: [
    "R2 U R2 U' R2 U' R2' U2 R U R U2' R U' R2'",
    "R U2' R U R U2 R2' U' R2 U' R2 U R2 U2' R2'",
    "R2' U2' R2 U R2 U' R2 U' R2' U2 R U R U2' R",
    "R2' U' R U2' R U R U2 R2' U' R2 U' R2 U R2",
  ],
  77: [
    "R U2 R U2' R' U2 R' U2 R U2' R U2 R' U2' R'",
    "R U2 R U2' R' U' R2' U R2' U2 R' U2' R2' U' R",
    "R U2' R U2 R' U R2' U' R2' U2' R' U2 R2' U R",
    "R U2' R U2 R' U2' R' U2' R U2 R U2' R' U2 R'",
  ],
  78: [
    "R U R2' U2 R' U2' R2' U' R2' U R' U2 R U2' R",
    "R U' R2' U2' R' U2 R2' U R2' U' R' U2' R U2 R",
    "R2 U' R2' U R2 U2' R2' U2 R2 U2 R2' U2' R2 U2' R2'",
    "R2 U' R2' U R2 U2' R2' U' R2 U2' R2' U2 R2 U R2'",
  ],
  79: [
    "R2' U2 R U2' R2 U2' R2' U2 R' U2' R U R2 U' R2' U' R",
    "R' U R2 U R2' U' R' U2 R U2' R2 U2 R2' U2 R' U2' R2",
    "R' U2' R2 U R2' U2 R U2' R U2 R' U2' R U' R2' U2 R",
    "R' U2' R2 U R' U2 R U2' R' U2 R' U2' R2 U' R2' U2 R",
  ],
  80: [
    "R U' R2' U' R2 U R U2' R' U2 R2' U2' R2 U2' R U2 R2'",
    "R2 U2' R' U2 R2' U2 R2 U2' R U2 R' U' R2' U R2 U R'",
    "R' U2 R U2 R2' U' R2 U R2' U R2 U2' R2' U2 R U2' R",
    "R' U2 R U2' R2' U' R2 U' R2' U R2 U' R2' U2 R U2' R",
    "R U2 R2' U' R2 U2' R' U2 R' U2' R U2 R' U R2 U2' R'",
  ],
  81: [
    "solved",
  ],
  82: [
    "R' U2' R U' R' U2 R U2' R' U2' R2 U R' U2 R U2 R'",
    "R U R' U R U R' U2 R' U2 R U2 R' U R U2' R U' R'",
    "R2' U2 R2' U R2 U R2' U2' R' U2' R U2' R' U' R2' U R2' U2 R'",
    "R U2' R' U2 R2' U' R U2' R2' U R U' R2 U2 R' U R2' U2 R'",
  ],
  83: [
    "R U2 R' U R U2' R' U2 R U2 R2' U' R U2' R' U2' R",
    "R' U' R U' R' U' R U2' R U2' R' U2' R U' R' U2 R' U R",
    "R' U2 R U2' R2 U R' U2 R2 U' R' U R2' U2' R U' R2 U2' R",
    "R2 U2' R2 U' R2' U' R2 U2 R U2 R' U2 R U R2 U' R2 U2' R",
  ],
  84: [
    "R U2' R' U2' R U' R2' U2 R U2 R' U2' R U R' U2 R",
    "R U R' U2 R' U' R U2' R' U2' R U2' R U' R' U' R U' R'",
    "R U2' R2 U' R U2' R2' U R' U' R2 U2 R' U R2 U2' R U2 R'",
    "R U2' R2 U' R2 U R U2 R' U2 R U2 R2 U' R2' U' R2 U2' R2",
  ],
  85: [
    "R' U2 R U2 R' U R2 U2' R' U2' R U2 R' U' R U2' R'",
    "R' U' R U2' R U R' U2 R U2 R' U2 R' U R U R' U R",
    "R' U2 R2' U R2' U' R' U2' R U2' R' U2' R2' U R2 U R2' U2 R2'",
    "R' U2 R2' U R' U2 R2 U' R U R2' U2' R U' R2' U2 R' U2' R",
  ],
  86: [
    "R' U2' R' U' R2 U2' R2' U R U' R U2 R' U2' R' U2' R2",
    "R U2' R' U2 R U R2' U' R2 U' R2' U2 R U2 R U2' R' U R",
    "R2' U2' R2 U R2' U R U2' R U R U2 R2' U' R2 U' R'",
    "R U R' U2 R U2 R' U2' R U2' R2' U2 R2 U2 R2' U R2 U' R'",
  ],
  87: [
    "R U2 R U R2' U2 R2 U' R' U R' U2' R U2 R U2 R2'",
    "R2 U2 R2' U' R2 U' R' U2 R' U' R' U2' R2 U R2' U R",
    "R' U2 R U2' R' U' R2 U R2' U R2 U2' R' U2' R' U2 R",
    "R2 U' R' U' R U' R U R2' U R U' R U' R2 U R2 U2 R2'",
  ],
  88: [
    "R2' U2 R U2 R U2' R' U R' U' R2 U2 R2' U R U2 R",
    "R U2 R' U2' R' U2' R2 U R2' U R2 U' R' U2' R U2 R'",
    "R U R2' U R2 U2' R' U' R' U2 R' U' R2 U' R2' U2 R2",
    "R U R2' U' R2 U2' R2' U2' R2 U2 R' U2 R U2' R' U2' R U' R'",
  ],
  89: [
    "R2 U2' R' U2' R' U2 R U' R U R2' U2' R2 U' R' U2' R'",
    "R' U2' R U2 R U2 R2' U' R2 U' R2' U R U2 R' U2' R",
    "R' U' R2 U' R2' U2 R U R U2' R U R2' U R2 U2' R2'",
    "R U R' U R2' U2 R U R U R' U' R' U2 R2' U' R2' U2' R",
  ],
  90: [
    "R2 U2' R2' U' R2 U2' R2' U R2 U2' R2' U' R2 U2' R2'",
    "R2 U2' R2' U' R2 U2' R2' U R2' U2' R2 U' R2' U2' R2",
    "R2' U2' R2 U' R2' U2' R2 U R2 U2' R2' U' R2 U2' R2'",
    "R2' U2' R2 U' R2' U2' R2 U R2' U2' R2 U' R2' U2' R2",
  ],
  91: [
    "R2 U2 R2' U R2 U2 R2' U' R2 U2 R2' U R2 U2 R2'",
    "R2 U2 R2' U R2 U2 R2' U' R2' U2 R2 U R2' U2 R2",
    "R2' U2 R2 U R2' U2 R2 U' R2 U2 R2' U R2 U2 R2'",
    "R2' U2 R2 U R2' U2 R2 U' R2' U2 R2 U R2' U2 R2",
  ],
  92: [
    "R U2 R' U R U2 R' U' R' U2' R U' R' U2' R",
    "R U2' R' U' R U2' R' U2' R' U2' R U' R' U2' R",
    "R U2' R' U' R U2' R' U' R' U2 R U R' U2 R",
    "R U2' R' U' R U' R2 U2' R2' U' R' U R2' U2 R2' U' R'",
  ],
  93: [
    "R' U2' R U' R' U2' R U R U2 R' U R U2 R'",
    "R' U2 R U R' U2 R U R U2' R' U' R U2' R'",
    "R' U2 R U R' U2 R U2 R U2 R' U R U2 R'",
    "R' U2 R U R' U R2' U2 R2 U R U' R2 U2' R2 U R",
  ],
  94: [
    "R2 U R2' U R2 U R2' U2 R2 U2 R2' U R2 U' R2'",
    "R2' U R2 U R2' U R2 U2 R2' U2 R2 U R2' U' R2",
    "R' U R' U2 R U R U' R2' U2' R2 U R' U2' R",
    "R U R' U' R2' U2 R2 U R U' R' U R2' U2 R2",
  ],
  95: [
    "R' U' R U R2 U2' R2' U' R' U R U' R2 U2' R2'",
    "R U' R U2' R' U' R' U R2 U2 R2' U' R U2 R'",
    "R2 U' R2' U' R2 U' R2' U2' R2 U2' R2' U' R2 U R2'",
    "R2' U' R2 U' R2' U' R2 U2' R2' U2' R2 U' R2' U R2",
  ],
  96: [
    "R2 U R2' U' R2 U2' R2' U2' R2 U' R2' U' R2 U' R2'",
    "R2' U R2 U' R2' U2' R2 U2' R2' U' R2 U' R2' U' R2",
    "R2' U2' R2 U' R U R' U' R2' U2' R2 U R U' R'",
    "R' U2 R U' R2' U2 R2 U R' U' R' U2' R U' R",
  ],
  97: [
    "R U2' R' U R2 U2' R2' U' R U R U2 R' U R'",
    "R2 U2 R2' U R' U' R U R2 U2 R2' U' R' U R",
    "R2 U' R2' U R2 U2 R2' U2 R2 U R2' U R2 U R2'",
    "R2' U' R2 U R2' U2 R2 U2 R2' U R2 U R2' U R2",
  ],
  98: [
    "R2 U2 R2' U R2 U' R2 U2' R2' U' R2 U2' R2' U2 R2'",
    "R2 U2 R2' U R2 U' R2' U2' R2 U' R2' U2' R2 U2 R2'",
    "R2' U2 R2 U R2' U' R2 U2' R2' U' R2 U2' R2' U2 R2",
    "R2' U2 R2 U R2' U' R2' U2' R2 U' R2' U2' R2 U2 R2",
  ],
  99: [
    "R2 U2' R2' U' R2 U R2 U2 R2' U R2 U2 R2' U2' R2'",
    "R2 U2' R2' U' R2 U R2' U2 R2 U R2' U2 R2 U2' R2'",
    "R2' U2' R2 U' R2' U R2 U2 R2' U R2 U2 R2' U2' R2",
    "R2' U2' R2 U' R2' U R2' U2 R2 U R2' U2 R2 U2' R2",
  ],
  100: [
    "R2 U2' R2 U2 R2' U R2 U2 R2' U R2' U' R2 U2' R2'",
    "R2 U2' R2' U2 R2 U R2' U2 R2 U R2' U' R2 U2' R2'",
    "R2' U2' R2 U2 R2' U R2 U2 R2' U R2 U' R2' U2' R2",
    "R2' U2' R2' U2 R2 U R2' U2 R2 U R2 U' R2' U2' R2",
  ],
  101: [
    "R2 U2 R2 U2' R2' U' R2 U2' R2' U' R2' U R2 U2 R2'",
    "R2 U2 R2' U2' R2 U' R2' U2' R2 U' R2' U R2 U2 R2'",
    "R2' U2 R2 U2' R2' U' R2 U2' R2' U' R2 U R2' U2 R2",
    "R2' U2 R2' U2' R2 U' R2' U2' R2 U' R2 U R2' U2 R2",
  ],
  102: [
    "R U R' U2 R U2 R' U' R' U' R U' R' U2 R",
    "R2 U R2' U R2 U' R2' U R2 U R2' U2' R2 U' R2'",
    "R2 U R2' U2 R2 U' R2' U' R2 U R2' U' R2 U' R2'",
    "R2' U R2 U R2' U' R2 U R2' U R2 U2' R2' U' R2",
  ],
  103: [
    "R2 U' R2' U R2 U R2' U2' R2 U' R2' U2 R2 U R2'",
    "R2' U' R2 U R2' U R2 U2' R2' U' R2 U2 R2' U R2",
    "R U2 R' U' R U' R' U' R' U2 R U2 R' U R",
    "R2 U' R2' U2' R2 U R2' U R2 U' R2' U R2 U R2'",
  ],
  104: [
    "R2 U2' R2' U2' R2' U R' U' R2' U R2 U R U' R' U2' R2'",
    "R2' U2' R2 U' R U R' U' R2' U' R2 U R U' R2 U' R2",
    "R' U' R2 U' R2' U2 R U R U2' R U R2' U2 R2 U2 R2'",
    "R U2' R U R U2 R2' U' R2 U' R2 U' R2 U2' R2' U2' R2 U2 R2'",
  ],
  105: [
    "R2 U2 R2' U R' U' R U R2 U R2' U' R' U R2' U R2'",
    "R2' U2 R2 U2 R2 U' R U R2 U' R2' U' R' U R U2 R2",
    "R U R2' U R2 U2' R' U' R' U2 R' U' R2 U2' R2' U2' R2",
    "R2 U2 R2' U R2 U2 R2' U2 R' U2 R' U2' R U' R' U2' R U2 R",
  ],
  106: [
    "R2 U2' R2' U2' R2 U' R' U2 R' U' R' U2' R2 U R2' U R",
    "R2 U2 R U R' U' R2' U' R2 U R U' R2 U2 R2 U2 R2'",
    "R2' U R2' U R' U' R2' U R2 U R U' R' U R2' U2 R2",
    "R U2' R' U2' R2 U2' R' U2' R' U2 R2 U2 R2 U2' R2 U R2' U R",
  ],
  107: [
    "R2' U2 R2 U2 R2' U R U2' R U R U2 R2' U' R2 U' R'",
    "R2 U' R2 U' R U R2 U' R2' U' R' U R U' R2 U2' R2'",
    "R2' U2' R' U' R U R2 U R2' U' R' U R2' U2' R2' U2' R2",
    "R2' U2 R2 U2' R2 U' R2 U' R2' U2 R U R U2' R U R2' U' R2",
  ],
  108: [
    "R2 U2' R2' U' R2 U2' R2' U' R2 U2 R2' U R2 U2 R2'",
    "R2 U2' R2' U' R2 U2' R2' U' R2' U2 R2 U R2' U2 R2",
    "R2' U2' R2 U' R2' U2' R2 U' R2 U2 R2' U R2 U2 R2'",
    "R2' U2' R2 U' R2' U2' R2 U' R2' U2 R2 U R2' U2 R2",
  ],
  109: [
    "R2 U2 R2' U R2 U2 R2' U R2 U2' R2' U' R2 U2' R2'",
    "R2 U2 R2' U R2 U2 R2' U R2' U2' R2 U' R2' U2' R2",
    "R2' U2 R2 U R2' U2 R2 U R2 U2' R2' U' R2 U2' R2'",
    "R2' U2 R2 U R2' U2 R2 U R2' U2' R2 U' R2' U2' R2",
  ],
  110: [
    "R2' U2 R U R' U2 R U2 R U' R' U R U2 R' U2 R",
    "R2 U R2 U2 R U' R' U' R2' U' R2 U R U2 R' U2 R",
    "R2' U R' U2 R2' U' R2 U' R U' R' U R2' U2 R2 U2 R2'",
    "R U2 R2 U' R2 U2 R' U2' R2' U2 R2' U2' R U R2' U2' R'",
  ],
  111: [
    "R' U R U2' R2' U' R U2' R' U R U R' U R U R",
    "R U2' R2' U2' R' U2 R2' U2 R' U' R' U' R' U2' R U2 R",
    "R U' R2' U2 R' U2' R2' U R' U' R' U' R' U2' R U2 R",
    "R' U' R U' R2 U R2 U' R2 U' R2' U2' R2 U2' R U' R2'",
  ],
  112: [
    "R U' R' U2 R2 U R' U2 R U' R' U' R U' R' U' R'",
    "R U R' U R2' U' R2' U R2' U R2 U2 R2' U2 R' U R2",
    "R' U R2 U2' R U2 R2 U' R U R U R U2 R' U2' R'",
    "R' U2 R2 U2 R U2' R2 U2' R U R U R U2 R' U2' R'",
  ],
  113: [
    "R2 U2' R' U' R U2' R' U2' R' U R U' R' U2' R U2' R'",
    "R2 U' R U2' R2 U R2' U R' U R U' R2 U2' R2' U2' R2",
    "R2' U' R2' U2' R' U R U R2 U R2' U' R' U2' R U2' R'",
    "R' U2' R U2' R' U2' R' U2' R U' R U R2' U2 R U R",
  ],
  114: [
    "R2' U R U R U2 R' U2' R' U2 R U2 R' U' R2",
    "R2' U R U2' R' U2' R U2 R U2' R' U' R' U' R2",
    "R2 U' R' U2 R U2 R' U2' R' U2 R U R U R2'",
    "R2 U' R' U' R' U2' R U2 R U2' R' U2' R U R2'",
  ],
  115: [
    "R U' R U R' U' R' U R U2' R U2 R' U2 R' U' R U2 R'",
    "R' U2 R U2' R2' U2' R2' U2 R2 U' R2' U' R2 U R2 U' R' U R",
    "R' U R U2' R U2 R' U2 R' U2 R U2' R U2 R' U2 R U2 R'",
    "R' U R U2' R U2 R' U' R U2' R' U2 R' U2' R U' R U2 R'",
  ],
  116: [
    "R' U R' U' R U R U' R' U2 R' U2' R U2' R U R' U2' R",
    "R U R2' U' R2 U' R2' U2 R2 U2' R' U2' R U2 R' U' R U' R'",
    "R U R' U R2 U R' U' R' U2 R U2 R U2' R2' U2 R U' R'",
    "R U2 R U2' R' U' R' U' R' U' R2 U2' R2' U2' R2' U2 R' U2' R'",
  ],
  117: [
    "R2 U R2' U2' R2 U R2' U' R2 U R2' U2' R2 U R2'",
    "R2 U2' R2' U2 R' U2 R2' U R2 U2 R U2 R2 U2' R2'",
    "R2 U2' R2' U2' R2 U R2' U R2 U' R2' U' R2 U' R2'",
    "R2 U' R2' U' R2 U' R2' U R2 U R2' U2' R2 U2' R2'",
  ],
  118: [
    "R2 U R2' U R2 U R2' U' R2 U' R2' U2 R2 U2 R2'",
    "R2 U2 R2' U2 R2 U' R2' U' R2 U R2' U R2 U R2'",
    "R2 U2 R2' U2' R' U2' R2' U' R2 U2' R U2' R2 U2 R2'",
    "R2 U' R2' U2 R2 U' R2' U R2 U' R2' U2 R2 U' R2'",
  ],
  119: [
    "R U R' U R2 U2' R2' U' R2 U2' R2' U2' R U' R'",
    "R U R' U R2' U2' R2 U' R2' U2' R2 U2' R U' R'",
    "R2 U R2' U R2 U2' R2' U' R2 U2' R2' U2' R2 U' R2'",
    "R2 U R2' U R2' U2' R2 U' R2' U2' R2 U2' R2 U' R2'",
  ],
  120: [
    "R2 U' R2' U' R2 U2 R2' U R2 U2 R2' U2 R2 U R2'",
    "R2 U' R2' U' R2' U2 R2 U R2' U2 R2 U2 R2 U R2'",
    "R2' U' R2 U' R2 U2 R2' U R2 U2 R2' U2 R2' U R2",
    "R2' U' R2 U' R2' U2 R2 U R2' U2 R2 U2 R2' U R2",
  ],
  121: [
    "R U R U R2' U R U' R U' R' U2 R' U' R U2' R'",
    "R' U R U' R' U2 R' U' R U' R U R2' U R U2' R",
    "R' U2' R U2' R U R' U R' U' R2 U' R' U R' U2' R",
    "R U R' U R2' U R U2' R2 U' R' U R' U2 R' U' R2",
  ],
  122: [
    "R U2 R' U2 R' U' R U' R U R2' U R U' R U2 R'",
    "R U' R' U R U2' R U R' U R' U' R2 U' R' U2 R'",
    "R' U' R' U' R2 U' R' U R' U R U2' R U R' U2 R",
    "R2' U R U2' R U' R U R2' U2 R' U' R2 U' R U' R'",
  ],
  123: [
    "R U2 R U R2' U R U' R U' R' U2 R' U' R U2 R'",
    "R U2 R' U R' U' R2 U' R' U R' U R U2' R U' R'",
    "R' U2 R U' R' U2 R' U' R U' R U R2' U R U2 R",
    "R' U' R U2' R U R' U R' U' R2 U' R' U R' U2 R",
  ],
  124: [
    "R U R' U2 R' U' R U' R U R2' U R U' R U2' R'",
    "R U2' R' U R U2' R U R' U R' U' R2 U' R' U2' R'",
    "R' U2' R U' R U R2' U R U' R U' R' U2 R' U R",
    "R' U2' R' U' R2 U' R' U R' U R U2' R U R' U2' R",
  ],
  125: [
    "R' U2' R U' R U R' U2 R U2 R' U2 R' U2' R",
    "R U2' R U R U2 R2' U' R2 U' R2 U2 R2 U2 R2'",
    "R' U' R U2 R U R' U2 R' U2' R2 U' R' U R' U2' R",
    "R2' U R2' U2 R U2 R' U2 R U R U' R2 U2' R U R'",
  ],
  126: [
    "R U2 R' U R' U' R U2' R' U2' R U2' R U2 R'",
    "R' U2 R' U' R' U2' R2 U R2' U R2' U2' R2' U2' R2",
    "R U R' U2' R' U' R U2' R U2 R2' U R U' R U2 R'",
    "R2 U' R2 U2' R' U2' R U2' R' U' R' U R2' U2 R' U' R",
  ],
  127: [
    "R2 U2' R2' U2' R2' U R2' U R2 U2' R' U' R' U2 R'",
    "R' U2 R U2' R U2' R' U2' R U' R' U R' U2 R",
    "R' U2 R U' R U R2' U2 R U2' R U' R' U2' R' U R",
    "R U' R' U2 R2' U R' U' R' U2' R U2' R' U2' R2 U' R2",
  ],
  128: [
    "R2' U2 R2 U2 R2 U' R2 U' R2' U2 R U R U2' R",
    "R U2' R' U2 R' U2 R U2 R' U R U' R U2' R'",
    "R U2' R' U R' U' R2 U2' R' U2 R' U R U2 R U' R'",
    "R' U R U2' R2 U' R U R U2 R' U2 R U2 R2' U R2'",
  ],
  129: [
    "R' U' R' U' R U' R2 U R2 U R U R U2' R U' R'",
    "R2' U2 R2 U' R U2' R2' U2 R' U R U2 R2 U2' R2 U2' R2",
    "R2 U R U' R2 U' R2 U2 R2' U' R2 U' R U R' U' R2'",
    "R U R2' U2 R2 U2 R2' U R U2 R U2' R' U2' R U' R'",
  ],
  130: [
    "R U R U R' U R2' U' R2' U' R' U' R' U2 R' U R",
    "R' U' R2 U2' R2' U2' R2 U' R' U2' R' U2 R U2 R' U R",
    "R2' U' R' U R2' U R2' U2' R2 U R2' U R' U' R U R2",
    "R2 U2' R2' U R' U2 R2 U2' R U' R' U2' R2' U2 R2' U2 R2'",
  ],
  131: [
    "R U R' U2 R' U' R' U' R2' U' R2' U R' U R U R",
    "R U R' U2 R U2 R' U2' R' U' R2 U2' R2' U2' R2 U' R'",
    "R2 U R U' R' U R2' U R2 U2' R2' U R2' U R' U' R2'",
    "R2' U2 R2' U2 R2' U2' R' U' R U2' R2 U2 R' U R2' U2' R2",
  ],
  132: [
    "R' U' R U2' R U R U R2 U R2 U' R U' R' U' R'",
    "R2 U2' R2 U2' R2 U2 R U R' U2 R2' U2' R U' R2 U2 R2'",
    "R2' U' R' U R U' R2 U' R2' U2 R2 U' R2 U' R U R2",
    "R' U' R U2' R' U2' R U2 R U R2' U2 R2 U2 R2' U R",
  ],
  133: [
    "R2 U2' R2' U' R2 U R2' U2 R2 U2 R2' U2 R2 U2' R2'",
    "R2' U2' R2 U' R2' U R2 U2 R2' U2 R2 U2 R2' U2' R2",
    "R2 U2' R2' U2 R2 U R2' U2' R2 U' R2' U R2 U2 R2'",
    "R2' U2' R2 U2 R2' U R2 U2' R2' U' R2 U R2' U2 R2",
  ],
  134: [
    "R U R U R2' U R U' R U' R2 U' R2 U' R2' U2 R U' R U' R'",
    "R U R' U R' U2' R2 U R2' U R2' U R' U R' U' R2 U' R' U' R'",
    "R' U' R U' R U2 R2' U' R2 U' R2 U' R U' R U R2' U R U R",
    "R' U' R' U' R2 U' R' U R' U R2' U R2' U R2 U2' R' U R' U R",
  ],
  135: [
    "R2' U R2' U' R2' U' R U' R U R U R2 U R U2' R U' R2",
    "R2 U' R2 U R2 U R' U R' U' R' U' R2' U' R' U2 R' U R2'",
    "R' U2 R2 U2 R' U' R U' R2' U2' R2 U R2' U2 R2 U2 R2' U R",
    "R U2' R2' U2' R U R' U R2 U2 R2' U' R2 U2' R2' U2' R2 U' R'",
  ],
  136: [
    "R2 U2 R2' U R2 U2 R2' U2 R2 U2 R2' U2' R2 U R2' U2' R2 U2 R2'",
    "R2 U2 R2' U R2 U2 R2' U2 R2' U2 R2 U2' R2' U R2 U2' R2' U2 R2",
    "R2 U2 R2' U R2 U2 R2' U' R2 U2' R2' U2 R2 U' R2' U2' R2 U2 R2'",
    "R2 U2 R2' U R2 U2 R2' U' R2' U2' R2 U2 R2' U' R2 U2' R2' U2 R2",
  ],
  137: [
    "R' U2' R U R' U R U' R' U2' R U' R' U2 R U' R' U2 R",
    "R' U2' R U R' U2' R U R' U2 R U R' U' R U' R' U2 R",
    "R' U' R2 U' R' U R U' R2' U' R2 U R' U' R U R2' U2 R",
    "R U2' R2 U2' R2' U' R2 U2' R2 U R U2' R2' U' R2 U2' R2' U2' R",
  ],
  138: [
    "R U2' R2 U2 R2' U2 R U2' R U R U R2 U' R' U2 R2' U2 R'",
    "R2 U2 R' U R U2 R2' U R U2 R' U2 R U R' U2' R U2' R'",
    "R' U' R2' U' R U R2' U2' R' U2 R2' U2' R' U R' U R2 U R",
    "R' U' R2' U' R U2 R2' U2 R' U2' R2' U2 R' U R' U R2 U R",
  ],
  139: [
    "R' U2 R2' U2' R2 U2' R' U2 R' U' R' U' R2' U R U2' R2 U2' R",
    "R U R2 U R' U2' R2 U2' R U2 R2 U2' R U' R U' R2' U' R'",
    "R U R2 U R' U' R2 U2 R U2' R2 U2 R U' R U' R2' U' R'",
    "R2' U2' R U' R' U2' R2 U' R' U2' R U2' R' U' R U2 R' U2 R",
  ],
  140: [
    "R' U' R U2' R' U R U' R' U2' R U' R' U2 R U2 R' U R",
    "R' U' R U2' R' U2' R U R' U2 R U R' U' R U2 R' U R",
    "R2 U R2' U' R2 U R2' U2' R2 U' R2' U R2 U2' R2' U R2 U2' R2'",
    "R2' U R2 U' R2' U R2 U2' R2' U' R2 U R2' U2' R2 U R2' U2' R2",
  ],
  141: [
    "R U R' U2 R U2 R' U' R U2' R' U' R U R' U2' R U' R'",
    "R U R' U2 R U' R' U R U2 R' U R U2' R' U2' R U' R'",
    "R2 U2' R2' U R2 U2' R2' U R2 U R2' U' R2 U R2' U' R2 U2 R2'",
    "R2 U2' R2' U R2 U2' R2' U R2 U' R2' U2' R2 U R2' U' R2 U R2'",
  ],
  142: [
    "R U R' U R2' U2' R2 U' R2' U2 R2 U' R U' R' U2 R2' U R2",
    "R2' U' R2 U2' R U R' U R2' U2' R2 U R2' U2 R2 U' R U' R'",
    "R U2' R2' U2 R2 U R2 U' R U2' R2 U2 R2 U' R2 U R2' U R2",
    "R2' U' R2 U' R2' U R2' U2' R2' U2 R' U R2' U' R2' U2' R2 U2 R'",
  ],
  143: [
    "R2 U R2' U2 R' U' R U' R2 U2 R2' U' R2 U2' R2' U R' U R",
    "R' U' R U' R2 U2 R2' U R2 U2' R2' U R' U R U2' R2 U' R2'",
    "R' U2 R2' U R2 U R U' R2 U2 R2' U' R2 U2' R2' U R' U R",
    "R' U' R U' R2 U2 R2' U R2 U2' R2' U R' U' R2' U' R2 U2' R",
  ],
  144: [
    "R2' U2' R2' U2 R' U R U2 R2 U2' R' U2' R2' U R2 U R2'",
    "R U2 R2' U2' R' U' R U2' R2 U2 R2 U' R2 U R2' U R2",
    "R2 U2' R2' U' R2 U R2 U' R U R2 U2 R2' U' R' U R",
    "R2 U2 R U R' U2 R2' U' R2 U' R U' R2 U R2 U R2'",
  ],
  145: [
    "R2 U2 R2 U2' R U' R' U2' R2' U2 R U2 R2 U' R2' U' R2",
    "R U R U2 R' U2' R' U2 R U2 R U R2' U2' R2 U' R2'",
    "R U2' R' U2' R U2 R U2' R' U' R U R2' U2' R2 U' R2'",
    "R2' U' R2 U2' R2' U R U2 R U2 R' U2' R' U2 R U R",
  ],
  146: [
    "R2 U2' R2' U' R2 U2' R2' U2 R2 U2' R2' U' R2 U2' R2'",
    "R2 U2' R2' U' R2 U2' R2' U2 R2' U2' R2 U' R2' U2' R2",
    "R2' U2' R2 U' R2' U2' R2 U2 R2 U2' R2' U' R2 U2' R2'",
    "R2' U2' R2 U' R2' U2' R2 U2 R2' U2' R2 U' R2' U2' R2",
  ],
  147: [
    "R U2' R2 U2 R2' U2' R2 U2' R2' U2 R' U R2' U2 R2",
    "R' U2' R U R U R2' U' R2 U2 R2' U2' R2 U2 R'",
    "R' U2' R2' U2 R2 U2' R2' U2' R2 U2 R U R2 U2 R2'",
    "R U2 R2' U2' R2 U2 R2' U R2 U' R' U' R' U2 R",
  ],
  148: [
    "R U R' U R2 U2' R2' U2' R U R U2' R' U2 R'",
    "R2 U R2' U R2 U2' R2' U2 R2 U R2' U R2 U2' R2'",
    "R2 U R2' U' R2 U2 R2' U2' R2 U2' R2' U R2 U2' R2'",
    "R2 U2 R2' U' R2 U2 R2' U2 R2 U2' R2' U R2 U' R2'",
  ],
  149: [
    "R2 U2' R2' U R2 U R2' U2 R2 U2' R2' U R2 U R2'",
    "R2 U2' R2' U R2 U2' R2' U2' R2 U2 R2' U' R2 U R2'",
    "R2 U' R2' U R2 U2' R2' U2 R2 U2 R2' U' R2 U2 R2'",
    "R2 U' R2' U' R2 U2 R2' U2' R2 U' R2' U' R2 U2 R2'",
  ],
  150: [
    "R U2 R' U R U R' U2' R U2' R' U2' R U2' R' U R U R'",
    "R2 U2 R U R' U' R' U2' R U R U' R2' U2 R' U2 R2 U R2'",
    "R2 U2 R2' U R2 U2 R' U2 R2' U' R U R U2' R' U' R' U R",
    "R2' U2 R U R' U' R' U2' R U R U' R2' U2 R2' U2 R2' U R2",
  ],
  151: [
    "R2 U R2' U2 R2 U2 R2' U2 R2 U2 R2' U R2 U2' R2' U2 R2 U2 R2'",
    "R2 U R2' U2 R2 U2 R2' U2 R2 U2 R2' U' R2 U2 R2' U2' R2 U' R2'",
    "R2' U R2 U2 R2' U2 R2 U2 R2' U2 R2 U R2' U2' R2 U2 R2' U2 R2",
    "R2' U R2 U2 R2' U2 R2 U2 R2' U2 R2 U' R2' U2 R2 U2' R2' U' R2",
  ],
  152: [
    "R U' R U R U' R' U' R U R U2 R U' R U' R2' U' R2'",
    "R U' R U' R U2 R U R U' R' U' R U R U' R' U' R2",
    "R2 U R2 U R' U R' U2' R' U' R' U R U R' U' R' U R'",
    "R2 U2' R U2 R U R' U' R2' U' R2 U R2' U' R2' U2 R U2 R2",
  ]
};
