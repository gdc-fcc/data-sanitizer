const removeTags = str => str.replace(/(<([^>]+)>)/ig, '')

const inputCleaner = (req, res, next) => {
   if (!req.body) {
       next()
   }
   if (req.body.username) {
       req.body.username = req.body.username.toLowerCase()
   }
   if (req.body.comment) {
       req.body.comment = removeTags(req.body.comment)
   }
   next()
}

const inputValidator = (req, res, next) => {
   if (req.body.username.length >= 3) {
      next()
   } else {
      res.redirect("/form?error=Username must be at least 3 characters.")
   }
}

export {inputCleaner, inputValidator}