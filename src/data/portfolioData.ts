export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  highlights: string[];
  githubUrl: string;
  category: string;
  pythonCode: string;
  demoType: 'voter' | 'atm' | 'grade';
}

export interface Activity {
  title: string;
  role: string;
  subtitle: string;
  description: string;
  keyLearnings: string[];
}

export interface LearningItem {
  id: string;
  title: string;
  focusArea: string;
  description: string;
  topics: string[];
}

export const PERSONAL_INFO = {
  name: "Niharika Ram Kathi",
  roleTitle: "Aspiring AI Engineer & B.Tech Student",
  currentStatus: "B.Tech 1st Semester Student",
  headline: "An Aspiring AI Engineer Building, Learning & Exploring AI",
  tagline: "B.Tech Student | Python | Web Development | Generative AI",
  aboutBio: "I am a B.Tech student and aspiring AI Engineer who is currently building my foundation in Python, Web Development, and Generative AI. I enjoy learning by building projects, participating in hackathons and ideathons, and exploring how AI can be used to solve real-world problems. I am currently focused on strengthening my programming fundamentals and expanding my knowledge of AI and software development.",
  githubUrl: "https://github.com/niharikaram27",
  linkedinUrl: "https://www.linkedin.com/in/niharika-ram-kathi-757184438/",
};

export const SKILL_CATEGORIES = {
  learning: [
    { name: "Python", context: "Core syntax, data types, functions, control flow, problem solving" },
    { name: "Web Development", context: "Responsive layouts, semantic markup, web interfaces" },
    { name: "Generative AI", context: "Prompt engineering, AI models, practical tooling & concepts" },
  ],
  familiar: [
    { name: "HTML", context: "Semantic page structure & accessible elements" },
    { name: "CSS", context: "Modern layouts, styling & responsive designs" },
    { name: "JavaScript", context: "DOM manipulation, functions & interactive logic" },
    { name: "Git", context: "Version control, branching & commit workflows" },
    { name: "GitHub", context: "Code repositories, sharing & collaboration" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "voter-eligibility",
    title: "Voter Eligibility Calculator",
    shortDescription: "A beginner-friendly Python project that checks whether a person is eligible to vote based on their age.",
    technologies: ["Python", "Conditional Logic", "CLI Input", "Control Flow"],
    highlights: [
      "Python",
      "Conditional statements",
      "User input",
      "Basic programming logic"
    ],
    githubUrl: "#",
    category: "Python Basics",
    demoType: "voter",
    pythonCode: `# Voter Eligibility Calculator in Python
# Author: Niharika Ram Kathi

def check_voter_eligibility():
    print("=== Voter Eligibility System ===")
    try:
        user_name = input("Enter your name: ")
        age_input = input("Enter your age: ")
        age = int(age_input)

        if age < 0:
            print("Error: Age cannot be a negative number.")
        elif age >= 18:
            print(f"Congratulations {user_name}! You are {age} years old and eligible to vote.")
        else:
            years_left = 18 - age
            print(f"Hello {user_name}. You are {age} years old and not yet eligible to vote.")
            print(f"You will be eligible in {years_left} year(s).")
    except ValueError:
        print("Invalid input. Please enter a numerical age.")

if __name__ == "__main__":
    check_voter_eligibility()`
  },
  {
    id: "atm-management",
    title: "ATM Management System",
    shortDescription: "A Python-based beginner project that simulates basic ATM operations and demonstrates programming logic and user interaction.",
    technologies: ["Python", "Functions", "Loop Structures", "State Management"],
    highlights: [
      "Python",
      "Conditional logic",
      "Functions",
      "User input",
      "Basic banking/ATM workflow simulation"
    ],
    githubUrl: "#",
    category: "Workflow Simulation",
    demoType: "atm",
    pythonCode: `# ATM Management System Simulation in Python
# Author: Niharika Ram Kathi

class SimpleATM:
    def __init__(self, initial_balance=5000):
        self.balance = initial_balance
        self.pin = "1234"
        self.is_authenticated = False

    def verify_pin(self, entered_pin):
        if entered_pin == self.pin:
            self.is_authenticated = True
            return True
        return False

    def check_balance(self):
        return self.balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            return True, f"Successfully deposited \${amount:.2f}. New balance: \${self.balance:.2f}"
        return False, "Deposit amount must be greater than zero."

    def withdraw(self, amount):
        if amount <= 0:
            return False, "Withdrawal amount must be greater than zero."
        if amount > self.balance:
            return False, "Insufficient balance for this withdrawal."
        self.balance -= amount
        return True, f"Successfully withdrew \${amount:.2f}. New balance: \${self.balance:.2f}"

def run_atm():
    atm = SimpleATM()
    print("Welcome to the Python ATM Simulator")
    pin = input("Please enter your 4-digit PIN: ")
    if atm.verify_pin(pin):
        print("PIN Accepted. Welcome to your account.")
    else:
        print("Incorrect PIN. Access denied.")`
  },
  {
    id: "grade-calculator",
    title: "Student Grade Calculator",
    shortDescription: "A simple application that calculates student grades based on marks and demonstrates fundamental programming concepts.",
    technologies: ["Python", "Arithmetic Operations", "Data Processing", "Grade Classification"],
    highlights: [
      "Python",
      "Arithmetic operations",
      "Conditional statements",
      "Input handling",
      "Basic logic"
    ],
    githubUrl: "#",
    category: "Academic Utility",
    demoType: "grade",
    pythonCode: `# Student Grade Calculator in Python
# Author: Niharika Ram Kathi

def calculate_grade(average):
    if average >= 90:
        return 'A+', 'Outstanding performance'
    elif average >= 80:
        return 'A', 'Excellent performance'
    elif average >= 70:
        return 'B', 'Good performance'
    elif average >= 60:
        return 'C', 'Satisfactory'
    elif average >= 50:
        return 'D', 'Pass'
    else:
        return 'F', 'Needs improvement'

def evaluate_student():
    print("=== Student Grade Calculator ===")
    subjects = ["Mathematics", "Programming", "Physics", "English"]
    marks = {}
    
    for subject in subjects:
        score = float(input(f"Enter marks for {subject} (out of 100): "))
        marks[subject] = score
        
    total = sum(marks.values())
    percentage = total / len(subjects)
    grade, remark = calculate_grade(percentage)
    
    print(f"Total Marks: {total:.1f} / {len(subjects) * 100}")
    print(f"Average: {percentage:.2f}%")
    print(f"Calculated Grade: {grade} ({remark})")`
  }
];

export const EXPERIENCES: Activity[] = [
  {
    title: "Hackathons",
    role: "Student Participant",
    subtitle: "Collaborative Rapid Prototyping & Problem Solving",
    description: "Participated in hackathons as an enthusiastic engineering student, collaborating with peers to take an initial problem from ideation to functioning technical prototypes within focused sprint timelines.",
    keyLearnings: [
      "Problem solving under time constraints",
      "Cross-functional team collaboration and communication",
      "Rapid prototyping and iterative development",
      "Building practical technology-based solutions"
    ]
  },
  {
    title: "Ideathons",
    role: "Student Participant",
    subtitle: "Innovation, Discovery & Solution Development",
    description: "Participated in ideathons centered around identifying real challenges in daily life and technology, synthesizing creative ideas, and structuring clear problem-solving frameworks.",
    keyLearnings: [
      "Structured idea generation and conceptual thinking",
      "Technology-driven innovation methodologies",
      "Accurate problem identification and root cause framing",
      "Presenting technology-based solution development concepts"
    ]
  }
];

export const LEARNING_JOURNEY: LearningItem[] = [
  {
    id: "python-dev",
    title: "Python Development",
    focusArea: "Programming Fundamentals",
    description: "Learning programming fundamentals, problem solving, functions, data structures, and application development.",
    topics: ["Variables & Data Types", "Control Structures", "Functions & Scope", "Lists & Dictionaries", "Algorithmic Thinking"]
  },
  {
    id: "web-dev",
    title: "Web Development",
    focusArea: "Frontend & Web Foundations",
    description: "Building foundations in HTML, CSS, JavaScript, responsive design, and modern web development.",
    topics: ["Semantic HTML5", "Modern CSS & Flexbox/Grid", "JavaScript Fundamentals", "Responsive UI Design", "DOM Interactions"]
  },
  {
    id: "gen-ai",
    title: "Generative AI",
    focusArea: "AI Concepts & Tooling",
    description: "Exploring AI concepts, prompt engineering, AI tools, and practical Generative AI applications.",
    topics: ["Foundational AI Principles", "Prompt Engineering Techniques", "Modern AI Tools & APIs", "Practical AI Applications", "Ethics & Limitations"]
  },
  {
    id: "ai-eng",
    title: "AI Engineering",
    focusArea: "Long-term Pathway",
    description: "Building a foundation toward becoming an AI Engineer through projects, experimentation, and continuous learning.",
    topics: ["Math & Logic for AI", "Data Preprocessing Basics", "Step-by-step Project Building", "Experimentation Mindset", "Continuous Learning"]
  }
];
