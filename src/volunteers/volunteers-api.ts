import express from 'express';
import { createVolunteer, deleteVolunteer, findVolunteerById, getVolunteers, updateVolunteer } from './volunteers-sevice';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const filter = req.query;
    const helpRequests = await getVolunteers(filter);
    res.json(helpRequests);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const volunteer = await findVolunteerById(id);
    if (!volunteer) {
      return res.status(404).send('Volunteer not found');
    }
    res.json(volunteer);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.post('/', async (req, res) => {
  try {
    const volunteerData = req.body;
    const newVolunteer = await createVolunteer(volunteerData);
    res.json(newVolunteer);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedVolunteer = await updateVolunteer(id, updateData);
    if (!updatedVolunteer) {
      return res.status(404).send('Volunteer not found');
    }
    res.json(updatedVolunteer);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await deleteVolunteer(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

export default router;

