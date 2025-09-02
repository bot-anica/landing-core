import { SectionHeaderProps } from "../types/sections";

export class SectionHeadersService {
  static async getHeader(courseUrlParam: string, section: string): Promise<SectionHeaderProps> {
    const { SECTION_HEADERS } = await import(/* @vite-ignore */ `../../constants/${courseUrlParam}/common.ts`);
    const sectionHeaders = SECTION_HEADERS as Record<string, SectionHeaderProps>;
    return sectionHeaders[section];
  }
}
