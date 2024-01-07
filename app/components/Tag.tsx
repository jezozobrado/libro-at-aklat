import { BADGE_COLOR, BADGE_LABEL } from "../constants/book";
import { Badge } from "../enums/book";
import { Badge as BookBadge } from "@/components/ui/badge";

interface Props {
  badge?: Badge;
  className?: string;
}

const Tag = ({ badge, className }: Props) => {
  if (!badge) return;
  return (
    <BookBadge
      className={`w-fit ${BADGE_COLOR[badge]} rounded-md ${className}`}
    >
      {BADGE_LABEL[badge]}
    </BookBadge>
  );
};

export default Tag;
