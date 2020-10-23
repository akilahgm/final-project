export default {
  course1: {
    name:'CSC540',
    subModules:[
      {
        id:1,
        name:'React Tutorial',
        description:'In this tutorial you will be learning how to create the applications using the react.'
      },
      {
        id:2,
        name:'Javascript Tutorial',
        description:'In this tutorial you will be learning how to create the applications using the javascript technology'
      },
      {
        id:3,
        name:'Assignment-1',
        description:'Write Javascript functions that will transform a string passed as parameter into various forms as shown in the attached figure. The function names are in bold face in the figure. Read a string from a file input.txt and pass it to each function.'
      },
      {
        id:4,
        name:'Assignment-2',
        description:'We talked about the OWASP XSS Prevention Cheatsheet in class. In order to mitigate XSS related issues, you need to escape strings in the context of html, JavaScript and JSON. Write three different functions each of which take a string as a parameter and return an appropriately escaped string. Call the functions escapeHTML, escapsJavaScript and escapeJSON respectively. You may want to use the following functions and objects: String.prototype.replace, a regular expression for detecting non-alphanumeric characters, String.prototype.CharCodeAt, Number.prototype.toString(base)'
      }
    ]
  },
  course2:{
    name:'CSC630',
    subModules:[
      {
        id:1,
        name:'Parallel Programming Techniques',
        description:'The purpose of this text is to introduce parallel programming techniques. Parallel program- ming is programming multiple computers, or computers with multiple internal processors, to solve a problem at a greater computational speed than is possible with a single computer.'
      },
      {
        id:2,
        name:'Assignment-1',
        description:'Analyze its theoreticalperformance of hypercube in terms of serial runtime, parallel runtime, speedup, efficiency and scalability, assuming that the communicationcost can be ignored.'
      },
      {
        id:3,
        name:'Assignment-2',
        description:'Analyze its theoreticalperformance of star mesh in terms of serial runtime, parallel runtime, speedup, efficiency and scalability, assuming that the communicationcost can be ignored.'
      },
    ]
  },
  course3:{
    name:'CSC633',
    subModules:[
      {
        id:1,
        name:'Distributed Database systems',
        description:'A distributed database (DDB) is an integrated collection of databases that is physically distributed across sites in a computer network. ... To form a distributed database system (DDBS), the files must be structured, logically interrelated, and physically distributed across multiple sites.'
      },
      {
        id:2,
        name:'Assignment-1',
        description:'Create an ontology for Rocket Science Database project'
      },
    ]
  },
  externalLinks:[
    {
      name:'Student life',
      link:'https://www.usm.edu/university/student-life.php'
    },
    {
      name:'Reserch',
      link:'https://www.usm.edu/university/research.php'
    },
    {
      name:'Admissions',
      link:'https://www.usm.edu/admissions/'
    }
  ]
};
