import { Stat } from '../types/sections';

export class StatsService {
  static async getAllStats(courseUrlParam: string): Promise<Stat[]> {
    const { STATS } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/stats.ts`);
    return STATS;
  }

  static async getStatByIndex(courseUrlParam: string, index: number): Promise<Stat | undefined> {
    const { STATS } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/stats.ts`);
    return STATS[index];
  }

  static async getStatsCount(courseUrlParam: string): Promise<number> {
    const { STATS } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/stats.ts`);
    return STATS.length;
  }

  static async validateStatIndex(courseUrlParam: string, index: number): Promise<boolean> {
    const { STATS } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/stats.ts`);
    return index >= 0 && index < STATS.length;
  }
}
 