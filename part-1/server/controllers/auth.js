const bcyptjs = require('bcryptjs');
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        let correctPassword = bcyptjs.compareSync(password, users[i].passwordHash);
        if (users[i].username === username && correctPassword) {
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },

    register: (req, res) => {
        const {password, firstName, lastName, username, email} = req.body

        const salt = bcyptjs.genSaltSync(5);
        const passwordHash = bcyptjs.hashSync(password, salt)

        let singleUser = {
          firstName,
          lastName,
          username,
          email,
          passwordHash
        }
        
        users.push(singleUser)

        console.log(users)
        
        console.log('Registering User')
        console.log(req.body)
        users.push(req.body)
        res.status(200).send(req.body)
    }
}