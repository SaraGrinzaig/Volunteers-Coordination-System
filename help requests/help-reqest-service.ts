import HelpRequest from '../help requests/help-requests-dal';

export const getHelpRequests = async (filter: any) => {
  const helpRequests = await HelpRequest.find(filter);
  return helpRequests;
};

export const updateHelpRequest = async (id: string, update: any) => {
  const helpRequest = await HelpRequest.findByIdAndUpdate(id, update, { new: true });
  return helpRequest;
};
