const express = require('express');
const axios = require('axios');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const checkObjectId = require('../../middleware/checkObjectId');

const Profile = require('../../models/Profile');
const User = require('../../models/User');


// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('user', ['name', 'stats']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/profile/stats
// @desc    Add mood data to user profile
// @access  Private
router.post(
    '/stats', 
        [
            auth, 
            [
                check('mood', 'Mood is required').not().isEmpty(),
                check('energy', 'Energy is required').not().isEmpty()
            ]
        ],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array });
            }
        

        const {
            mood,
            energy,
            hoursSlept,
            interruptedSleep,
            socializing,
            creativity,
            meditation,
            sexualActivity,
            menstruating,
            meals,
            physicalActivity,
            stressOrAnxiety,
            conflict,
            irritability,
            substances,
            notes
        } = req.body;

        const newStats = {
            mood,
            energy,
            hoursSlept,
            interruptedSleep,
            socializing,
            creativity,
            meditation,
            sexualActivity,
            menstruating,
            meals,
            physicalActivity,
            stressOrAnxiety,
            conflict,
            irritability,
            substances,
            notes        
        };

        try {
            const profile = await Profile.findOne({ user: req.user.id });

            profile.stats.unshift(newStats);

            await profile.save();

            res.json(profile);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
        
);

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', auth, async (req, res) => {
    try {
      // Remove profile
      await Profile.findOneAndRemove({ user: req.user.id });
      // Remove user
      await User.findOneAndRemove({ _id: req.user.id });
  
      res.json({ msg: 'User deleted' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });



module.exports = router;
