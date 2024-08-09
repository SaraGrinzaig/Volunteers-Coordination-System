import HelpRequest from './help-requests-dal';

export const getHelpRequests = async (filter: any) => {
  const helpRequests = await HelpRequest.find(filter);
  return helpRequests;
};

export const getHelpRequestById = async (id: string) => {
  const helpRequest = await HelpRequest.findById(id);
  return helpRequest;
};

export const createHelpRequest = async (data: any) => {
  const newHelpRequest = new HelpRequest(data);
  await newHelpRequest.save();
  return newHelpRequest;
};

export const updateHelpRequest = async (id: string, update: any) => {
  const helpRequest = await HelpRequest.findByIdAndUpdate(id, update, { new: true });
  return helpRequest;
};

export const deleteHelpRequest = async (id: string) => {
  await HelpRequest.findByIdAndDelete(id);
};
