module.exports = database => {
  const votes = database.collection('votes')

  const addVote = async feature => {
    await votes.updateOne(
      { feature },
      { $inc: { quantity: 1 } }
    )
  }

  return {
    addVote
  }
}
