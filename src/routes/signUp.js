const router = express.Router();
const signUpController = require('../controller/signUp');

router.get(
  '/',
  signUpController.signUp,
);

module.exports = router;
