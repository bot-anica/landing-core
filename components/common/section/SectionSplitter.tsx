import { LineStroke } from "../../../assets/images";

export interface SectionSplitterProps {
  top?: boolean;
  bottom?: boolean;
}

const SectionSplitter: React.FC<SectionSplitterProps> = ({top = true, bottom = true}) => {
  return (
    <>
      {top && <img src={LineStroke} alt="" className="absolute -top-[5px] left-1/2 -translate-x-1/2 opacity-50" />}
      {bottom && <img src={LineStroke} alt="" className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 opacity-50" />}
    </>
  )
}

export default SectionSplitter