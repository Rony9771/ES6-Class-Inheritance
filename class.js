class Friends  {
  name ;
  Address = 'Nikunja-2'
  course;
  Department ='CSE'
  location ;

  constructor(name ,course,location){
    this.name = name;
    this.course = course;
    this.location=location;
  }

  startClass(time){
    console.log(`Class will be start at ${time}`)
  }
  joinClub(time2){
    console.log(`Debate club starts from ${time2}`)
  }
}

const fb = new Friends('Nabil', 'webTech', 'Nikunja-2')
console.log(fb);

fb.startClass('12 PM')
fb.joinClub('4 AM')
