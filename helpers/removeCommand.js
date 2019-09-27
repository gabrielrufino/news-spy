const removeCommand = text => {
  return text
    .split(' ')
    .slice(1)
    .join(' ')
}

module.exports = removeCommand
