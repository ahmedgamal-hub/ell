import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
math:any[]=
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
english:any[]=
[
  {
    id: '1',
    cover: '../../assets/images/courses/how-to-improve-your-elearning-course-cover-design.webp',
    courseName: 'Learn English: Beginning Grammar Specialization',
    constractor: 'khaled saad',
    des: `Learn in-demand skills from university and industry experts,
    Master a subject or tool with hands-on projects,
    Develop a deep understanding of key concepts`,
    rate: '4.2',
  },
  {
    id: '2',
    cover: '../../assets/images/courses/how-to-improve-your-elearning-course-cover-design.webp',
    courseName: 'Introduction to Calculus',
    constractor: 'kareem mohmed',
    des: `The focus and themes of the Introduction to Calculus course address the most important foundations for applications of mathematics in science, engineering and commerce. The course emphasises the key ideas and historical motivation for calculus, while at the same time striking a balance between theory and application, leading to a mastery of key threshold concepts in foundational mathematics.`,
    rate: '4.9',
  },
  {
    id: '3',
    cover: '../../assets/images/courses/how-to-improve-your-elearning-course-cover-design.webp',
    courseName: 'Calculus: Single Variable Part 1 - Functions',
    constractor: ' mohmed omar',
    des: `Calculus is one of the grandest achievements of human thought, explaining everything from planetary orbits to the optimal size of a city to the periodicity of a heartbeat. This brisk course covers the core ideas of single-variable Calculus with emphases on conceptual understanding and applications. The course is ideal for students beginning  .`,
    rate: '4.5',
  },
  {
    id: '4',
    cover: '../../assets/images/courses/how-to-improve-your-elearning-course-cover-design.webp',
    courseName: 'Pre-Calculus',
    constractor: ' sayed hassen',
    des: `A course designed to ease students into first-semester calculus courses for almost any undergraduate degree, with a particular emphasis on science and engineering.`,
    rate: '4.7',
  },
]

}
