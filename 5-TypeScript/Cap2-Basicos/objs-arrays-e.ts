//creacion de un enum
enum Role {ADMIN = 5, READ_ONLY = 100, AUTHOR = 200};

const person : { //objects
  name: string;
  age: number;
  hobbies: string[];
  //role: [number, string]; //tuplas
} = {
  name: 'Jose',
  age: 32,
  hobbies: ['Sports', 'Cooking'],
  //role: [2, 'author'] tupla
  //role: Role.ADMIN
};

//person.role.push('admin');
//person.role[1] = 10;

//person.role = [0, 'admin']; //son tuplas

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for( const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());
}

// if(person.role == Role.AUTHOR){
//   console.log('is Author');
// }