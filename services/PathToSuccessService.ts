import { STEPS_TO_SUCCESS, PATH_TO_SUCCESS_IMAGES } from "../constants/pathToSuccess";
import { PathToSuccessData, PathToSuccessImages, PathToSuccessStep } from "../types/sections";
import { SectionBGImagesService } from "./SectionBGImagesService";
import { SectionHeadersService } from "./SectionHeadersService";


export class PathToSuccessService {
  static getPathSteps(): PathToSuccessStep[] {
    return STEPS_TO_SUCCESS;
  }

  static getPathToSuccessImages(): PathToSuccessImages {
    return PATH_TO_SUCCESS_IMAGES;
  }

  static getData(): PathToSuccessData {
    const header = SectionHeadersService.getHeader('pathToSuccess');
    const steps = PathToSuccessService.getPathSteps();
    const images = PathToSuccessService.getPathToSuccessImages();
    const bgImages = SectionBGImagesService.getBGImages('pathToSuccess');

    return {
      header,
      steps,
      images,
      bgImages,
    }
  }
}
