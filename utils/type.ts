export interface Volunteer {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
}

export interface HelpRequest{
    title:string;
    description:string;
    location:string;
    priority:string;

}