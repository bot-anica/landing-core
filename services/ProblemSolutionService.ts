import { ProblemSolutionCTABlock, ProblemSolutionData, ProblemSolutionItem } from '../types/sections';
import { SectionBGImagesService } from './SectionBGImagesService';
import { SectionHeadersService } from './SectionHeadersService';

export class ProblemSolutionService {
  static async getProblemSolutionItems(courseUrlParam: string): Promise<ProblemSolutionItem[]> {
    const { PROBLEM_SOLUTION_ITEMS } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/problemSolution.ts`);
    return PROBLEM_SOLUTION_ITEMS;
  }

  static async getProblemSolutionCTABlock(courseUrlParam: string): Promise<ProblemSolutionCTABlock> {
    const { PROBLEM_SOLUTION_CTA_BLOCK } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/problemSolution.ts`);
    return PROBLEM_SOLUTION_CTA_BLOCK;
  }

  static async getData(courseUrlParam: string): Promise<ProblemSolutionData> {
    const header = await SectionHeadersService.getHeader(courseUrlParam, 'problemSolution');
    const items = await ProblemSolutionService.getProblemSolutionItems(courseUrlParam);
    const ctaBlock = await ProblemSolutionService.getProblemSolutionCTABlock(courseUrlParam);
    const bgImages = await SectionBGImagesService.getBGImages(courseUrlParam, 'problemSolution');
    
    return {
      header,
      items,
      ctaBlock,
      bgImages,
    }
  }
}
