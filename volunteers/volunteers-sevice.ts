import Volunteer from '../volunteers/volunteers-dal';

export const createVolunteer = async (volunteerData: any) => {
  const newVolunteer = new Volunteer(volunteerData);
  await newVolunteer.save();
  return newVolunteer;
};

export const findVolunteerById = async (id: string) => {
  const volunteer = await Volunteer.findById(id);
  return volunteer;
};
