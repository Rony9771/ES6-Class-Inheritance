class JobHolder {
  name;
  position = 'Teacher'
  hair= 'black'
  salary;

  constructor(name, salary){
    this.name = name;
    this.salary = salary;
  }

  officeTime(time){
    console.log(`Office time will start from ${time}`)
  }


}
 class OfficeWorker extends JobHolder{
  height ;
  age;

  constructor(name,salary,height,age){
    super(name,salary)
    this.height = height;
    this.age = age;
  }

  officeOff(time2){
    console.log(`Office going to close from ${time2}`)
  }
 }


 const j1 = new JobHolder('Rony', '1000 taka')
 const o1 = new OfficeWorker ('Nabil', '20000 Taka', '5.1 feet', '24 year')
 o1.officeOff('8 PM');
 console.log(o1);
 j1.officeTime('10 AM')
 console.log(j1);