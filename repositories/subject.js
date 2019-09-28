const db = require('../init/db')

const subjects = db.get('subjects')

const create = expression => {
  const subject = subjects.find({ expression }).value()

  if (!subject) {
    const newSubject = {
      expression,
      followers: []
    }

    return subjects
      .push(newSubject)
      .write()
  } else {
    return subject
  }
}

const list = () => {
  return subjects
    .value()
}

const wasFollowed = (expression, user) => {
  const newsubject = subjects
    .find({ expression })
    .value()

  if (!newsubject.followers.includes(user)) {
    newsubject.followers.push(user)
  }

  return subjects
    .find({ expression })
    .assign(newsubject)
    .write()
}

module.exports = {
  create,
  list,
  wasFollowed
}
