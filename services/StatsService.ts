import { STATS } from '../../constants/stats';
import { Stat } from '../types/sections';

export class StatsService {
  static getAllStats(): Stat[] {
    return STATS;
  }

  static getStatByIndex(index: number): Stat | undefined {
    return STATS[index];
  }

  static getStatsCount(): number {
    return STATS.length;
  }

  static validateStatIndex(index: number): boolean {
    return index >= 0 && index < STATS.length;
  }
} 