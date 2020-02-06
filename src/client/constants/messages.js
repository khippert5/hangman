// @flow

type Messages = {
  [key: string]: Array<string>,
};

const messages: Messages = {
  correct: [
    'Way to go! Keep it going!',
    'This is amazing!',
    'You\'re so close!',
    'You should enter "Who wants to be a millionaire"',
    'Let\'s get you signed up for a spelling bee!',
    'You just might be a decendant of Einstein!',
    'Have you tried the lottery lately? Your picking is stellar!',
  ],
  duplicate: [
    '"[letterReplace]" is already in use.',
    'Grey means it has been used. Com\'on maaaan!!',
    'Really? Check again. "[letterReplace]" is already used.',
    '"[letterReplace]" is already used. Lock it up butter cup!',
  ],
  failed: [
    'I would stay away from the lottery. Your guessing game is not strong',
    'I feel we need to revisit some basics.',
    'To bad, so sad.',
    'The force is not strong with this one.',
    'That\'s a shame.',
  ],
  success: [
    'Making something from nothing. Way to go!',
    'Have you thought about trying the lottery? That was some good guessing!',
    'Woohoo! You did it!',
    'There are times I am worried about the intelligence of society. Then you came along and relieved all concerns!',
    'Great job! That\'s the ticket!',
  ],
  wrong: [
    '"[letterReplace]" is not in the word. Try again.',
    'Wrong again. Let\'s try another.',
    'I would give you a letter, but that is cheating',
    'Whoops! That\'s not it.',
    'Let\'s go Einstein',
    'Well this is getting embarrasing. Keep trying!',
  ],
};

export default messages;
