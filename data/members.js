export class Member {
  id; // Unique identifier for the member
  name; // Full name
  nickname; // Nickname
  emoji; // Emoji to represent the member
  age; // Age of the member
  smallGroup; // Small group name
  department; // 
  role; // 
  email; // Email address
  phoneNumber; // 전화번호
  birthday; // Birthday
}

export const members = [
  {
    id : '1732066370576-pb3fihtvl',  
    name : '유영민', 
    nickname: '영민이', 
    emoji : String.fromCodePoint(0x1FAC0),
    age : 26,
    smallGroup : '직장인 반',
    department : '청년부', 
    role : '청년부 회장', 
    email : 'estherliu919@gmail.com', 
    phoneNumber : '010-8442-3410', 
    birthday : '1999-09-19'
  }, 
  {
    id : '1732248713829-l8sjz74ul',  
    name : '김성희', 
    nickname: '웅니', 
    emoji : String.fromCodePoint(0x1FAC1),
    age : 37,
    smallGroup : '직장인 반',
    department : '청년부', 
    role : '간사', 
    email : 'ac919@gmail.com', 
    phoneNumber : '010-1111-3410', 
    birthday : '1988-09-19'
  }
]

