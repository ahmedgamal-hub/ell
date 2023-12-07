import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
courses:any[]=[];
coursesName:any;
mathematics:any[]=
[
  {
    id: '1',
    cover: '../../assets/images/courses/math/1.jpg',
    courseName: 'Introduction to Mathematical Thinking',
    constractor: 'mohmed saad',
    des: `Learn how to think the way mathematicians do  a powerful cognitive process developed over thousands of years.

    Mathematical thinking is not the same as doing mathematics – at least not as mathematics is typically presented in our school system. School math typically focuses on learning procedures to solve highly stereotyped problems. Professional mathematicians think a certain way to solve real problems, problems that can arise from the everyday world, or from science, or from within mathematics itself. The key to success in school math is to learn to think inside-the-box. In contrast, a key feature of mathematical thinking is thinking outside-the-box – a valuable ability in today’s world. This course helps to develop that crucial way of thinking.`,
    rate: '4',
  },
  {
    id: '2',
    cover: '../../assets/images/courses/math/3.jpg',
    courseName: 'Introduction to Calculus',
    constractor: 'kareem mohmed',
    des: `The focus and themes of the Introduction to Calculus course address the most important foundations for applications of mathematics in science, engineering and commerce. The course emphasises the key ideas and historical motivation for calculus, while at the same time striking a balance between theory and application, leading to a mastery of key threshold concepts in foundational mathematics.`,
    rate: '4.9',
  },
  {
    id: '3',
    cover: '../../assets/images/courses/math/2.jpg',
    courseName: 'Calculus: Single Variable Part 1 - Functions',
    constractor: ' mohmed omar',
    des: `Calculus is one of the grandest achievements of human thought, explaining everything from planetary orbits to the optimal size of a city to the periodicity of a heartbeat. This brisk course covers the core ideas of single-variable Calculus with emphases on conceptual understanding and applications. The course is ideal for students beginning  .`,
    rate: '4.5',
  },
  {
    id: '4',
    cover: '../../assets/images/courses/math/maxresdefault.jpg',
    courseName: 'Pre-Calculus',
    constractor: ' sayed hassen',
    des: `A course designed to ease students into first-semester calculus courses for almost any undergraduate degree, with a particular emphasis on science and engineering.`,
    rate: '4.7',
  },
]
English:any[]=
[
  {
    id: '1',
    cover: '../../assets/images/courses/english/1.png',
    courseName: 'Learn English: Beginning Grammar Specialization',
    constractor: 'khaled saad',
    des: `Learn in-demand skills from university and industry experts,
    Master a subject or tool with hands-on projects,
    Develop a deep understanding of key concepts`,
    rate: '4.2',
  },
  {
    id: '2',
    cover: '../../assets/images/courses/english/2.png',
    courseName: 'Training and Practicing in English Public Speaking',
    constractor: 'kareem ahmed',
    des: `Professor Zhang is Central South University’s top training coach in English speaking and interpreting contests and has engaged in teaching and research on English speaking and interpreting as well as competition training for more than ten years.`,
    rate: '4.8',
  },
  {
    id: '3',
    cover: '../../assets/images/courses/english/3.jpg',
    courseName: 'English Composition I',
    constractor: ' mohmed omar',
    des: `You will gain a foundation for college-level writing valuable for nearly any field. Students will learn how to read carefully, write effective arguments, understand the writing process, engage with others' ideas, cite accurately, and craft powerful prose.`,
    rate: '4.4',
  },
  {
    id: '4',
    cover: '../../assets/images/courses/english/4.png',
    courseName: 'Improve Your English Communication Skills Specialization',
    constractor: ' sayed hassen',
    des: `This Specialization helps you improve your professional communication in English for successful business interactions. Each course focuses on a particular area of communication in English:  writing emails, speaking at meetings and interviews, giving presentations, and networking online. Whether you want to communicate to potential employers, `,
    rate: '4.7',
  },
]
programing:any[]=
[
  {
    id: '1',
    cover: '../../assets/images/courses/programing/1.jpg',
    courseName: 'Programming for Everybody (Getting Started with Python)',
    constractor: 'khaled saad',
    des: `This course aims to teach everyone the basics of programming computers using Python. We cover the basics of how one constructs a program from a series of simple instructions in Python.  The course has no pre-requisites and avoids all but the simplest mathematics. Anyone with moderate computer experience should be able to master the materials in this `,
    rate: '4.2',
  },
  {
    id: '2',
    cover: '../../assets/images/courses/programing/2.jpg',
    courseName: 'Introduction to Computer Programming',
    constractor: 'kareem ahmed',
    des: `This MOOC provides you with the foundational skill set required to write computer programs. If you are interested in learning how to write interactive, graphical programs from an introductory level in a real programming language, this is the course for you. You will begin by learning the basics of editing and running programs.`,
    rate: '4.8',
  },
  {
    id: '3',
    cover: '../../assets/images/courses/programing/3.jpg',
    courseName: 'Python 3 Programming Specialization',
    constractor: ' mohmed omar',
    des: `This specialization teaches the fundamentals of programming in Python 3. We will begin at the beginning, with variables, conditionals, and loops, and get to some intermediate material like keyword parameters, list comprehensions, lambda expressions, and class inheritance.`,
    rate: '4.4',
  },
  {
    id: '4',
    cover: '../../assets/images/courses/programing/4.jpg',
    courseName: 'Object Oriented Programming',
    constractor: ' sayed hassen',
    des: `In this 5-course specialisation, you will develop various C++ programming skills. Rather than building many small programs as you will in other courses, we have taken a different approach: you will create a single, extensive program through the five courses. The program will be a simplified cryptocurrency exchange platform. We will cover the`,
    rate: '4.7',
  },
]
constructor(
  private _ActivatedRoute:ActivatedRoute,
  ) { }
ngOnInit() {
  
  this.coursesName = this._ActivatedRoute.snapshot.paramMap.get('name');
 if(this.coursesName=="English"){
  this.English.forEach((element:any) => {
    this.courses.push(element)
  });
 }else  if(this.coursesName=="mathematics"){
  this.mathematics.forEach((element:any) => {
    this.courses.push(element)
  });
}else  if(this.coursesName=="programing"){
  this.programing.forEach((element:any) => {
    this.courses.push(element)
  });
}
  
}
printTo(id:any){
  console.log(id);
  
}
}
