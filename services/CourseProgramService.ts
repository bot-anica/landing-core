import { LESSONS } from '../constants/courseProgram';
import { CourseProgramData, Lesson } from '../types/sections';
import { SectionBGImagesService } from './SectionBGImagesService';
import { SectionHeadersService } from './SectionHeadersService';

export class CourseProgramService {
  static getLessons(): Lesson[] {
    return LESSONS as Lesson[];
  }

  static getSwiperBreakpoints() {
    return {
      320: {
        spaceBetween: 16,
      },
      640: {
        spaceBetween: 20,
      },
      1024: {
        spaceBetween: 24,
      },
    };
  }

  static getData(): CourseProgramData {
    const header = SectionHeadersService.getHeader('courseProgram');
    const lessons = CourseProgramService.getLessons();
    const breakpoints = CourseProgramService.getSwiperBreakpoints();
    const bgImages = SectionBGImagesService.getBGImages('courseProgram');
    
    return {
      header,
      lessons,
      breakpoints,
      bgImages,
    };
  }
}