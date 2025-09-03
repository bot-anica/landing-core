import { SectionHeaderProps } from "../types/sections";

export class SectionHeadersService {
  static async getHeader(courseUrlParam: string, section: string): Promise<SectionHeaderProps> {
    const { SECTION_HEADERS } = await import(`../../constants/${courseUrlParam}/common`);
    const sectionHeaders = SECTION_HEADERS as Record<string, SectionHeaderProps>;
    return sectionHeaders[section];
  }
}
