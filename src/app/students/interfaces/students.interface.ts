export interface Empty {
  students: Student[];
}

export interface Student {
  id:        string;
  course:    number;
  email:     string;
  full_name: string;
  alt_img?:  string;
  subject1:  string;
  grade1:    number;
  subject2:  string;
  grade2:    number;
  subject3:  string;
  grade3:    number;
}
