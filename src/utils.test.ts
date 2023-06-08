import { describe, expect, it } from "vitest";
import { convertMinToHour, getTomatoIcon } from "./utils";

describe('utils', () => {
  it('gets proper tomato icon', () => {
    const rottenIcon = getTomatoIcon(50)
    expect(rottenIcon).toContain('Rotten_Tomatoes_rotten.svg')
    const freshIcon = getTomatoIcon(70)
    expect(freshIcon).toContain('Rotten_Tomatoes.svg')
  })
  it('converts minutes to hours', () => {
    expect(convertMinToHour(60)).toEqual('1h')
    expect(convertMinToHour(65)).toEqual('1h 5m')
    expect(convertMinToHour(123)).toEqual('2h 3m')
    expect(convertMinToHour(55)).toEqual('55m')
  })
})