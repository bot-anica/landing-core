import { PROBLEM_SOLUTION_ITEMS, PROBLEM_SOLUTION_CTA_BLOCK } from '../constants/problemSolution';
import { ProblemSolutionCTABlock, ProblemSolutionData, ProblemSolutionItem } from '../types/sections';
import { SectionBGImagesService } from './SectionBGImagesService';
import { SectionHeadersService } from './SectionHeadersService';

export class ProblemSolutionService {
  static getProblemSolutionItems(): ProblemSolutionItem[] {
    return PROBLEM_SOLUTION_ITEMS;
  }

  static getProblemSolutionCTABlock(): ProblemSolutionCTABlock {
    return PROBLEM_SOLUTION_CTA_BLOCK;
  }

  static getData(): ProblemSolutionData {
    const header = SectionHeadersService.getHeader('problemSolution');
    const items = ProblemSolutionService.getProblemSolutionItems();
    const ctaBlock = ProblemSolutionService.getProblemSolutionCTABlock();
    const bgImages = SectionBGImagesService.getBGImages('problemSolution');
    
    return {
      header,
      items,
      ctaBlock,
      bgImages,
    }
  }
}