db.employees.insertMany([
  {empId: 1, name: 'Clark', departamento: 'vendas' },
  {empId: 2, name: 'Davi', idade: 20 },
  {empId: 3, name: 'Ava', idade: 10 },
  {empId: 4, name: 'Pedro', departamento: 'Sales' },
  {empId: 5, name: 'Renato', departamento: 'diretoria' },
  {empId: 6, name: 'Jonas', departamento: 'diretoria' },
  {empId: 7, name: 'Pedro', sobrenome: "Silva", departamento: 'SAC', idade: 35 },
  {empId: 8, name: 'Agata', departamento: 'SAC' },
  {empId: 9, name: 'Maria', idade: 16 },
  {empId: 10, name: 'Vicente', endereco: 'Rua Nove' },
  {empId: 11, name: 'Clara', departamento: 'vendas', idade: 45},
  {empId: 12, name: 'Pablo', endereco: 'Rua 20', idade: 50 }
]);

db.employees.find({departamento: 'vendas'});
