const employees = [
  {
    id: 1,
    email: "sarthak@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page using React and Tailwind CSS.",
        taskDate: "2026-07-05",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve responsive navbar alignment issues.",
        taskDate: "2026-07-01",
        category: "Development",
      },
    ],
  },

  {
    id: 2,
    email: "sameer@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Develop Dashboard",
        taskDescription: "Implement employee dashboard components.",
        taskDate: "2026-07-06",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with authentication API.",
        taskDate: "2026-07-02",
        category: "Backend",
      },
    ],
  },

  {
    id: 3,
    email: "rahul@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Landing Page",
        taskDescription: "Build the company landing page UI.",
        taskDate: "2026-06-30",
        category: "Frontend",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress and optimize website assets.",
        taskDate: "2026-07-07",
        category: "Optimization",
      },
    ],
  },

  {
    id: 4,
    email: "priya@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Prepare project documentation and setup guide.",
        taskDate: "2026-07-08",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Testing",
        taskDescription: "Perform UI testing on all pages.",
        taskDate: "2026-07-03",
        category: "Testing",
      },
    ],
  },

  {
    id: 5,
    email: "aman@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Configure MongoDB collections for the project.",
        taskDate: "2026-07-09",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed:false,
        failed: true,
        taskTitle: "Deploy Website",
        taskDescription: "Deploy the React application to Vercel.",
        taskDate: "2026-07-04",
        category: "Deployment",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    console.log("employees are : ",employees)
    console.log("admin is : ",admin)
}