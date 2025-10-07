
export interface Customer {
    accountType: "RESIDENT" | "FOREIGNER";// account type
    refererResidentId: string | null; // referer id of resident if is a foreigner
    email: string; 
    phone: string;
    pin: string; // pin code
    postalCode: string;
    city: string;
    profileSelfie: string; // url of profile selfie
}