// export interface Volunteer {
//     id: string;
//     firstName: string;
//     lastName: string;
//     email: string;
//     phoneNumber: string;
//     address: string;
// }

// export interface HelpRequest{
//     title:string;
//     description:string;
//     location:string;
//     priority:string;

// }
export interface HelpRequest {
    location: string;
    description: string;
    phone: string;
    status: string;
    peopleCount: number;
    priorityCode: string;
    volunteerCode: string;
  }
  
  export interface Volunteer {
    firstName: string;
    lastName: string;
    phone: string;
    internships: string[];
  }
  
  export interface Location {
    code: string;
    name: string;
  }
  
  export interface Priority {
    code: string;
    name: string;
  }
  
  export interface Status {
    name: string;
  }
  