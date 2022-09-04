export const Wordle = ({ words, solution }) => {
  let rows = []
  words = words.split(',')
  for (let i = 0; i < 6; i++) {
    if (i > words.length - 1) {
      rows.push(<WordleEmptyRow />)
    } else {
      rows.push(<WordleRow word={words[i]} solution={solution} />)
    }
  }

  return (
    <div
      className="wordle-grid"
      style={{
        backgroundColor: '#121213',
        border: '#1E262F',
        borderStyle: 'solid',
        borderRadius: '0.375rem',
        borderWidth: '2px',
      }}
    >
      {rows}
    </div>
  )
}

export const WordleEmptyRow = () => {
  return (
    <div className="wordle-row wordle-border">
      <WordleLetter letter="" color="blank" />
      <WordleLetter letter="" color="blank" />
      <WordleLetter letter="" color="blank" />
      <WordleLetter letter="" color="blank" />
      <WordleLetter letter="" color="blank" />
    </div>
  )
}

/*
not_green = [i for i, letter in enumerate(guess) if letter != solution[i]]
counts = Counter(solution[i] for i in not_green)
color_combo = [2] * len(guess)

for letter_index in not_green:
    letter = guess[letter_index]
    if counts[letter] > 0:
        color_combo[letter_index] = 1
        counts[letter] -= 1
    else:
        color_combo[letter_index] = 0

return color_combo
*/

export const WordleRow = ({ word, solution }) => {
  let notGreen = []
  for (let i = 0; i < 5; i++) {
    if (word[i] != solution[i]) {
      notGreen.push(i)
    }
  }

  let values = []
  for (let i = 0; i < notGreen.length; i++) {
    values.push(solution[notGreen[i]])
  }

  let counts = {}
  for (let element of values) {
    if (counts[element]) {
      counts[element] += 1
    } else {
      counts[element] = 1
    }
  }

  let colorCombo = [2, 2, 2, 2, 2]
  let letter

  for (let i = 0; i < notGreen.length; i++) {
    letter = word[notGreen[i]]
    if (counts[letter] > 0) {
      colorCombo[notGreen[i]] = 1
      counts[letter] -= 1
    } else {
      colorCombo[notGreen[i]] = 0
    }
  }

  let colors = []
  for (let i = 0; i < 5; i++) {
    if (colorCombo[i] == 2) {
      colors[i] = 'green'
    } else if (colorCombo[i] == 1) {
      colors[i] = 'yellow'
    } else {
      colors[i] = 'gray'
    }
  }

  return (
    <div className="wordle-row">
      <WordleLetter letter={word[0]} color={colors[0]} />
      <WordleLetter letter={word[1]} color={colors[1]} />
      <WordleLetter letter={word[2]} color={colors[2]} />
      <WordleLetter letter={word[3]} color={colors[3]} />
      <WordleLetter letter={word[4]} color={colors[4]} />
    </div>
  )
}

export const WordleLetter = ({ letter, color }) => {
  return <div className={'wordle wordle-' + color}>{letter}</div>
}
