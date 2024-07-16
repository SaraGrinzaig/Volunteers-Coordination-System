import express from 'express';
import { createVolunteer, findVolunteerById } from '../volunteers/volunteers-sevice';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const volunteerData = req.body;
    const newVolunteer = await createVolunteer(volunteerData);
    res.json(newVolunteer);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const volunteer = await findVolunteerById(id);
    res.json(volunteer);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

export default router;
