const extractCommand = text => {
  return text.split(' ')[0].slice(1)
}

module.exports = extractCommand
