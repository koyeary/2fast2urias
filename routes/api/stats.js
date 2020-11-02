const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require ('../../middleware/auth');

// @route   POST api/stats
// @desc    Add mood data to user profile
// @access  Private
router.post(
    '/', 
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