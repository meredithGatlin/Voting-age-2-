// Checks the given age to see whether it's legal to vote in the US or not.
// Returns true if the age is 18 years or older. Otherwise, returns false.

function checkVotingAge(age) {
  // TODO: Implement this function.
  let result;
  let age = 18;
  if (age >= 18) {
    return 'true';
  } else {
    return 'false';
  }
  return result;
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE.

module.exports = {
  checkVotingAge,
};
