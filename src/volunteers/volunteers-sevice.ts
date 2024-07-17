import Volunteer from './volunteers-dal';

export const getVolunteers = async (filter: any) => {
  const volunteers = await Volunteer.find(filter);
  return volunteers;
};

export const createVolunteer = async (volunteerData: any) => {
  const newVolunteer = new Volunteer(volunteerData);
  await newVolunteer.save();
  return newVolunteer;
};

export const findVolunteerById = async (id: string) => {
  const volunteer = await Volunteer.findById(id);
  return volunteer;
};

export const updateVolunteer = async (id: string, updateData: any) => {
  const updatedVolunteer = await Volunteer.findByIdAndUpdate(id, updateData, { new: true });
  return updatedVolunteer;
};

export const deleteVolunteer = async (id: string) => {
  await Volunteer.findByIdAndDelete(id);
};
