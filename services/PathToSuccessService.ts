import { PathToSuccessData, PathToSuccessImages, PathToSuccessStep } from "../types/sections";
import { SectionBGImagesService } from "./SectionBGImagesService";
import { SectionHeadersService } from "./SectionHeadersService";


export class PathToSuccessService {
  static async getPathSteps(courseUrlParam: string): Promise<PathToSuccessStep[]> {
    const { STEPS_TO_SUCCESS } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/pathToSuccess.ts`);
    return STEPS_TO_SUCCESS;
  }

  static async getPathToSuccessImages(courseUrlParam: string): Promise<PathToSuccessImages> {
    const { PATH_TO_SUCCESS_IMAGES } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/pathToSuccess.ts`);
    return PATH_TO_SUCCESS_IMAGES;
  }

  static async getData(courseUrlParam: string): Promise<PathToSuccessData> {
    const header = await SectionHeadersService.getHeader(courseUrlParam, 'pathToSuccess');
    const steps = await PathToSuccessService.getPathSteps(courseUrlParam);
    const images = await PathToSuccessService.getPathToSuccessImages(courseUrlParam);
    const bgImages = await SectionBGImagesService.getBGImages(courseUrlParam, 'pathToSuccess');

    return {
      header,
      steps,
      images,
      bgImages,
    }
  }
}
