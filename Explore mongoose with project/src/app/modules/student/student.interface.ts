export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  fatherContactNo: string;
  motherContactNo: string;
  motherOccupation: string;
};

export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
};

export type Student = {
  id: string;
  password: string;
  name: UserName;
  //Union type litaral
  gender: 'male' | 'female' | 'other';
  email: string;
  profileImg?: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  isActive: 'active' | 'blocked';
};
