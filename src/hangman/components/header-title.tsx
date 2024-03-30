import { getHeaderTitle } from "@/hangman/utils/get-header-title";

type HeaderTitleProps = {
  matchLoss: boolean,
  matchWon: boolean,
}

function HanderTitle({ matchWon, matchLoss, }: HeaderTitleProps) {
  const strings = getHeaderTitle(matchWon, matchLoss);

  return (
    <p className={`text-4xl font-bold text-center mb-6 ${strings.tailwind}`}>
      {strings.title}
    </p>
  )
}

export default HanderTitle
